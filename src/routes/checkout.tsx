import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { PageHero, SiteShell } from "@/components/shop/shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/lib/cart";
import { pageHead } from "@/lib/seo";
import { formatPrice, shop } from "@/lib/shop";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.email("Enter a valid email"),
  phone: z.string().optional(),
  line1: z.string().min(3, "Enter address line 1"),
  line2: z.string().optional(),
  city: z.string().min(2, "Enter town / city"),
  postcode: z
    .string()
    .min(5, "Enter a UK postcode")
    .regex(/^[A-Za-z0-9 ]{5,10}$/, "Invalid postcode"),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export const Route = createFileRoute("/checkout")({
  head: () =>
    pageHead({
      title: `Checkout | ${shop.name}`,
      description: "Complete your UK carp tackle order.",
      path: "/checkout",
    }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const lines = useCart((s) => s.lines);
  const subtotal = useCart((s) => s.subtotal());
  const clear = useCart((s) => s.clear);
  const navigate = useNavigate();
  const shipping = lines.length ? 4.95 : 0;
  const total = subtotal + shipping;

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      line1: "",
      line2: "",
      city: "",
      postcode: "",
      notes: "",
    },
  });

  if (lines.length === 0) {
    return (
      <SiteShell>
        <PageHero title="Checkout" description="Your basket is empty." />
        <div className="container-page py-10">
          <Button asChild>
            <Link to="/shop">Browse shop</Link>
          </Button>
        </div>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <PageHero
        eyebrow="Checkout"
        title="Delivery details"
        description="UK mainland addresses only. We’ll email payment options and dispatch confirmation."
      />
      <section className="section-pad pt-8">
        <div className="container-page grid gap-8 lg:grid-cols-12">
          <form
            className="card-surface space-y-5 p-6 lg:col-span-7"
            onSubmit={form.handleSubmit((values) => {
              // Demo checkout — no live payment gateway yet
              console.info("order", { values, lines, total });
              clear();
              toast.success("Order received", {
                description:
                  "Thanks — check your email for payment and dispatch details.",
              });
              void navigate({ to: "/shop" });
            })}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" error={form.formState.errors.name?.message}>
                <Input {...form.register("name")} autoComplete="name" />
              </Field>
              <Field label="Email" error={form.formState.errors.email?.message}>
                <Input
                  type="email"
                  {...form.register("email")}
                  autoComplete="email"
                />
              </Field>
            </div>
            <Field label="Phone (optional)">
              <Input type="tel" {...form.register("phone")} autoComplete="tel" />
            </Field>
            <Field
              label="Address line 1"
              error={form.formState.errors.line1?.message}
            >
              <Input {...form.register("line1")} autoComplete="address-line1" />
            </Field>
            <Field label="Address line 2 (optional)">
              <Input {...form.register("line2")} autoComplete="address-line2" />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Town / city" error={form.formState.errors.city?.message}>
                <Input {...form.register("city")} autoComplete="address-level2" />
              </Field>
              <Field
                label="Postcode"
                error={form.formState.errors.postcode?.message}
              >
                <Input {...form.register("postcode")} autoComplete="postal-code" />
              </Field>
            </div>
            <Field label="Order notes (optional)">
              <Textarea
                rows={3}
                placeholder="Collection request, delivery notes…"
                {...form.register("notes")}
              />
            </Field>
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Place order · {formatPrice(total)}
            </Button>
            <p className="text-xs text-fg-subtle">
              By placing an order you confirm the delivery address is in the UK.
              Payment links are sent by email — no card is charged on this page
              yet.
            </p>
          </form>

          <aside className="card-surface h-fit p-6 lg:col-span-5">
            <h2 className="font-display text-xl font-semibold text-fg">
              Your items
            </h2>
            <ul className="mt-4 space-y-3">
              {lines.map((l) => (
                <li
                  key={l.productId}
                  className="flex justify-between gap-3 text-sm"
                >
                  <span className="text-fg-muted">
                    {l.title}{" "}
                    <span className="text-fg-subtle">×{l.quantity}</span>
                  </span>
                  <span className="shrink-0 font-medium text-fg">
                    {formatPrice(l.price * l.quantity)}
                  </span>
                </li>
              ))}
            </ul>
            <dl className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
              <div className="flex justify-between text-fg-muted">
                <dt>Subtotal</dt>
                <dd className="text-fg">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between text-fg-muted">
                <dt>Shipping</dt>
                <dd className="text-fg">{formatPrice(shipping)}</dd>
              </div>
              <div className="flex justify-between text-base font-semibold text-fg">
                <dt>Total</dt>
                <dd className="font-display text-xl">{formatPrice(total)}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium text-fg">{label}</Label>
      {children}
      {error ? <p className="text-xs text-sale">{error}</p> : null}
    </div>
  );
}
