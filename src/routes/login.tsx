import { createFileRoute, Link } from "@tanstack/react-router";
import { Fish } from "lucide-react";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";
import { shop } from "@/lib/shop";

export const Route = createFileRoute("/login")({
  head: () =>
    pageHead({
      title: `Sign in | ${shop.name}`,
      description: "Account sign-in.",
      path: "/login",
    }),
  component: Login,
});

function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-bg px-5 py-16">
      <div className="w-full max-w-sm space-y-6 rounded-xl border border-border bg-bg-elevated p-8 shadow-soft">
        <div className="space-y-4 text-center">
          <div className="flex justify-center">
            <span className="inline-flex size-12 items-center justify-center rounded-md bg-accent text-accent-fg">
              <Fish className="size-6" />
            </span>
          </div>
          <h1 className="font-display text-2xl font-semibold text-fg">Sign in</h1>
          <p className="text-sm text-fg-muted">
            Optional account access for {shop.name}.
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
                onClick={() => void signIn(p.providerId)}
              >
                Continue with {p.providerId}
              </Button>
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-fg-muted">
            Sign-in is not configured. You can still shop without an account.
          </p>
        )}

        <Button asChild variant="ghost" className="w-full">
          <Link to="/">Back to shop</Link>
        </Button>
      </div>
    </main>
  );
}
