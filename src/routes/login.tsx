import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-bg px-5 py-16">
      <div className="w-full max-w-sm space-y-6 rounded-xl border border-border bg-bg-elevated p-8 shadow-soft">
        <div className="space-y-4 text-center">
          <div className="flex justify-center">
            <Logo heightClass="h-10" />
          </div>
          <h1 className="font-display text-2xl font-semibold text-ink">
            Sign in
          </h1>
          <p className="text-sm text-fg-muted">
            Access client materials and project updates.
          </p>
        </div>

        {authEnabled ? (
          <div className="space-y-3">
            {GROK_PROVIDERS.map((p) => (
              <Button
                key={p.providerId}
                type="button"
                variant="secondary"
                className="w-full"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
              >
                Continue with {p.label}
              </Button>
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-fg-muted">
            Sign-in is currently disabled.
          </p>
        )}

        <p className="text-center text-sm text-fg-subtle">
          <Link
            to="/"
            className="text-fg-muted underline-offset-4 hover:underline"
          >
            Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
