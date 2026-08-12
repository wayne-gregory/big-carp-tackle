/**
 * Security headers for the Nitro / Vercel runtime.
 * HSTS only when the request is HTTPS (never on local http:// preview).
 *
 * Auto-registered via nitro `serverDir: "./server"` in vite.config.ts.
 */

interface SecurityEvent {
  url: URL;
  req: { method: string; headers: Headers };
  res?: { setHeader?: (name: string, value: string) => void };
  node?: { res?: { setHeader: (name: string, value: string) => void } };
}

function isHttps(event: SecurityEvent): boolean {
  const forwarded = event.req.headers.get("x-forwarded-proto");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim().toLowerCase() === "https";
  }
  return event.url.protocol === "https:";
}

function setHeader(event: SecurityEvent, name: string, value: string) {
  // h3 / nitro event response
  const res =
    (event as { node?: { res?: { setHeader: (n: string, v: string) => void } } })
      .node?.res ?? event.res;
  if (res && typeof res.setHeader === "function") {
    res.setHeader(name, value);
  }
}

export default async function securityHeadersMiddleware(
  event: SecurityEvent,
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  if (isHttps(event)) {
    // 2 years · all subdomains · preload-ready
    setHeader(
      event,
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload",
    );
  }
  setHeader(event, "X-Content-Type-Options", "nosniff");
  setHeader(event, "Referrer-Policy", "strict-origin-when-cross-origin");
  setHeader(event, "X-Frame-Options", "SAMEORIGIN");

  const result = await next();

  // Also stamp headers onto Response objects returned by later middleware
  if (result instanceof Response && isHttps(event)) {
    const headers = new Headers(result.headers);
    if (!headers.has("strict-transport-security")) {
      headers.set(
        "Strict-Transport-Security",
        "max-age=63072000; includeSubDomains; preload",
      );
    }
    if (!headers.has("x-content-type-options")) {
      headers.set("X-Content-Type-Options", "nosniff");
    }
    if (!headers.has("referrer-policy")) {
      headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    }
    if (!headers.has("x-frame-options")) {
      headers.set("X-Frame-Options", "SAMEORIGIN");
    }
    return new Response(result.body, {
      status: result.status,
      statusText: result.statusText,
      headers,
    });
  }

  return result;
}
