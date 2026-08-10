import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { company } from "@/lib/company";

const bodySchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(5000),
  /** Honeypot — must stay empty */
  companyWebsite: z.string().max(200).optional().or(z.literal("")),
});

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? company.email;

type Payload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
};

function formatBody(payload: Payload) {
  const name = `${payload.firstName} ${payload.lastName}`.trim();
  return {
    name,
    text: [
      `New enquiry from the InovaCore website`,
      ``,
      `Name: ${name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone || "(not provided)"}`,
      ``,
      `Message:`,
      payload.message,
    ].join("\n"),
  };
}

async function sendViaResend(payload: Payload) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false as const, reason: "no_resend" };

  const { name, text } = formatBody(payload);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.CONTACT_FROM_EMAIL ??
        "InovaCore Website <onboarding@resend.dev>",
      to: [TO_EMAIL],
      reply_to: payload.email,
      subject: `Website enquiry — ${name}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend failed", res.status, await res.text().catch(() => ""));
    return { ok: false as const, reason: "resend_error" };
  }
  return { ok: true as const, provider: "resend" as const };
}

/** Free Web3Forms — set WEB3FORMS_ACCESS_KEY in Vercel for reliable delivery */
async function sendViaWeb3Forms(payload: Payload) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return { ok: false as const, reason: "no_web3forms" };

  const { name, text } = formatBody(payload);
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Website enquiry — ${name}`,
      from_name: name,
      email: payload.email,
      phone: payload.phone || "",
      message: text,
      to: TO_EMAIL,
    }),
  });

  const data = (await res.json().catch(() => null)) as {
    success?: boolean;
    message?: string;
  } | null;

  if (!res.ok || !data?.success) {
    console.error("[contact] Web3Forms failed", res.status, data);
    return { ok: false as const, reason: "web3forms_error" };
  }
  return { ok: true as const, provider: "web3forms" as const };
}

/**
 * FormSubmit — zero config. First production use: check TO_EMAIL inbox
 * for an activation link from FormSubmit, click it, then messages flow.
 */
async function sendViaFormSubmit(payload: Payload) {
  const { name, text } = formatBody(payload);

  const res = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(TO_EMAIL)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email: payload.email,
        phone: payload.phone || "",
        message: text,
        _subject: `Website enquiry — ${name}`,
        _template: "table",
        _captcha: "false",
        _replyto: payload.email,
      }),
    },
  );

  const data = (await res.json().catch(() => null)) as {
    success?: string | boolean;
    message?: string;
  } | null;

  if (res.status === 429) {
    console.error("[contact] FormSubmit rate limited");
    return { ok: false as const, reason: "rate_limit" };
  }

  if (!res.ok || data?.success === false) {
    console.error("[contact] FormSubmit failed", res.status, data);
    return { ok: false as const, reason: "formsubmit_error", detail: data?.message };
  }

  return {
    ok: true as const,
    provider: "formsubmit" as const,
    message: typeof data?.message === "string" ? data.message : undefined,
  };
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let json: unknown;
        try {
          json = await request.json();
        } catch {
          return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
        }

        const parsed = bodySchema.safeParse(json);
        if (!parsed.success) {
          return Response.json(
            { ok: false, error: "Please check the form fields and try again." },
            { status: 400 },
          );
        }

        // Bot filled honeypot
        if (parsed.data.companyWebsite && parsed.data.companyWebsite.length > 0) {
          return Response.json({ ok: true });
        }

        const payload: Payload = {
          firstName: parsed.data.firstName,
          lastName: parsed.data.lastName,
          email: parsed.data.email,
          phone: parsed.data.phone || undefined,
          message: parsed.data.message,
        };

        for (const send of [sendViaResend, sendViaWeb3Forms, sendViaFormSubmit]) {
          const result = await send(payload);
          if (result.ok) {
            return Response.json({
              ok: true,
              provider: result.provider,
              note: "message" in result ? result.message : undefined,
            });
          }
        }

        console.error("[contact] All providers failed for", payload.email);
        return Response.json(
          {
            ok: false,
            error: `We could not send your message just now. Please email ${TO_EMAIL} directly.`,
          },
          { status: 502 },
        );
      },
    },
  },
});
