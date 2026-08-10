import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { company } from "@/lib/company";

const schema = z.object({
  firstName: z.string().trim().min(1, "Required"),
  lastName: z.string().trim().min(1, "Required"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(10, "Tell us a little more"),
  /** Honeypot for bots — leave empty */
  companyWebsite: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const TO = company.email;

/**
 * Delivery order (browser-side so datacentre IPs are not blocked):
 * 1. Web3Forms if VITE_WEB3FORMS_ACCESS_KEY is set (most reliable free option)
 * 2. FormSubmit ajax to hello@inovacore.co.uk (needs one-time activation email)
 * 3. Our /api/contact server fallback
 */
async function deliverEnquiry(data: FormValues): Promise<void> {
  const name = `${data.firstName} ${data.lastName}`.trim();
  const phone = data.phone?.trim() || "";
  const messageBody = [
    data.message,
    "",
    `—`,
    `Phone: ${phone || "(not provided)"}`,
    `From: ${name} <${data.email}>`,
  ].join("\n");

  const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
  if (web3Key) {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: web3Key,
        subject: `Website enquiry — ${name}`,
        from_name: name,
        name,
        email: data.email,
        phone,
        message: messageBody,
      }),
    });
    const body = (await res.json().catch(() => null)) as {
      success?: boolean;
      message?: string;
    } | null;
    if (res.ok && body?.success) return;
    console.error("[contact] Web3Forms failed", body);
    throw new Error(body?.message || "Web3Forms could not send the message.");
  }

  // FormSubmit from the visitor's browser (avoids Vercel IP blocks / rate limits)
  const fsRes = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(TO)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email: data.email,
        phone,
        message: messageBody,
        _subject: `Website enquiry — ${name}`,
        _template: "table",
        _captcha: "false",
        _replyto: data.email,
      }),
    },
  );
  const fsBody = (await fsRes.json().catch(() => null)) as {
    success?: string | boolean;
    message?: string;
  } | null;

  if (fsRes.ok && fsBody?.success !== false) {
    return;
  }

  // Last resort: our server route (Resend / Web3Forms server key / FormSubmit)
  const apiRes = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  const apiBody = (await apiRes.json().catch(() => null)) as {
    ok?: boolean;
    error?: string;
  } | null;
  if (apiRes.ok && apiBody?.ok) return;

  const detail =
    fsBody?.message ||
    apiBody?.error ||
    `Could not send. Please email ${TO} directly.`;
  throw new Error(detail);
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      companyWebsite: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    if (data.companyWebsite) {
      // Silent success for bots
      setSent(true);
      reset();
      return;
    }

    try {
      await deliverEnquiry(data);
      setSent(true);
      reset();
      toast.success("Message sent", {
        description: `Thanks — we’ll reply to ${data.email}. If you don’t hear back, email ${TO}.`,
      });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : `Please email ${TO} instead.`;
      toast.error("Message not sent", {
        description: `${message} You can also email ${TO} directly.`,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative space-y-5 rounded-xl border border-border bg-bg-elevated p-6 shadow-soft sm:p-8"
      noValidate
    >
      <div
        className="pointer-events-none absolute left-0 top-0 -z-10 h-0 w-0 overflow-hidden opacity-0"
        aria-hidden
      >
        <Label htmlFor="companyWebsite">Company website</Label>
        <Input
          id="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
          {...register("companyWebsite")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            autoComplete="given-name"
            {...register("firstName")}
          />
          {errors.firstName ? (
            <p className="text-xs text-red-700">{errors.firstName.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input
            id="lastName"
            autoComplete="family-name"
            {...register("lastName")}
          />
          {errors.lastName ? (
            <p className="text-xs text-red-700">{errors.lastName.message}</p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-xs text-red-700">{errors.email.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea id="message" rows={5} {...register("message")} />
        {errors.message ? (
          <p className="text-xs text-red-700">{errors.message.message}</p>
        ) : null}
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-fg-subtle">
          {sent
            ? `Thanks — check your inbox if we need to follow up. We also receive mail at ${TO}.`
            : `Prefer email? ${TO}`}
        </p>
        <Button type="submit" disabled={isSubmitting} className="sm:min-w-40">
          {isSubmitting ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
