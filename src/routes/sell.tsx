import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { PageHero, SiteShell } from "@/components/shop/shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { pageHead } from "@/lib/seo";
import { shop } from "@/lib/shop";

const schema = z.object({
  name: z.string().min(2),
  email: z.email(),
  item: z.string().min(3),
  condition: z.string().min(2),
  asking: z.string().optional(),
  details: z.string().min(20, "Tell us a bit more about the kit"),
});

type FormValues = z.infer<typeof schema>;

export const Route = createFileRoute("/sell")({
  head: () =>
    pageHead({
      title: `Sell second hand carp fishing tackle | ${shop.name}`,
      description:
        "Sell second hand carp fishing tackle in the UK. Fair buy-in offers or list with Big Carp Fishing — rods, reels, alarms and more.",
      path: "/sell",
    }),
  component: SellPage,
});

function SellPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      item: "",
      condition: "",
      asking: "",
      details: "",
    },
  });

  return (
    <SiteShell>
      <PageHero
        eyebrow="Sell"
        title="Sell second hand carp fishing tackle"
        description="Clear space in the garage. We buy quality used carp gear or list it for UK anglers with transparent fees."
      />

      <section className="section-pad pt-0">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          <div className="space-y-4 text-fg-muted lg:col-span-2">
            <p className="text-base leading-relaxed">
              Got unused{" "}
              <strong className="font-semibold text-fg">
                second hand carp fishing tackle
              </strong>
              ? We specialise in carp rods, reels, alarms, luggage and bankside
              kit for the UK market.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Photos + brand / model help us price quickly</li>
              <li>Honest condition notes (scuffs, repairs, missing parts)</li>
              <li>Buy-in offer or commission listing — your choice</li>
              <li>UK sellers only</li>
            </ul>
            <p className="text-sm">
              Prefer a quick chat?{" "}
              <Link to="/contact" className="font-medium text-accent underline">
                Contact us
              </Link>{" "}
              or email{" "}
              <a
                href={`mailto:${shop.email}`}
                className="font-medium text-accent underline"
              >
                {shop.email}
              </a>
              .
            </p>
          </div>

          <form
            className="card-surface space-y-4 p-6 lg:col-span-3"
            onSubmit={form.handleSubmit(() => {
              toast.success("Thanks — we’ll reply by email shortly.");
              form.reset();
            })}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...form.register("name")} />
                {form.formState.errors.name ? (
                  <p className="text-xs text-sale">Required</p>
                ) : null}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...form.register("email")} />
                {form.formState.errors.email ? (
                  <p className="text-xs text-sale">Valid email required</p>
                ) : null}
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="item">Item (brand & model)</Label>
              <Input
                id="item"
                placeholder="e.g. Fox Horizon X4 12ft pair"
                {...form.register("item")}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="condition">Condition</Label>
                <Input
                  id="condition"
                  placeholder="Excellent / Good / Fair"
                  {...form.register("condition")}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="asking">Asking price (optional)</Label>
                <Input id="asking" placeholder="£" {...form.register("asking")} />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="details">Details</Label>
              <Textarea
                id="details"
                rows={5}
                placeholder="What’s included, wear notes, location in the UK…"
                {...form.register("details")}
              />
              {form.formState.errors.details ? (
                <p className="text-xs text-sale">
                  {form.formState.errors.details.message}
                </p>
              ) : null}
            </div>
            <Button type="submit" size="lg">
              Send sell enquiry
            </Button>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}
