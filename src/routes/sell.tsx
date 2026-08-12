import { createFileRoute } from "@tanstack/react-router";
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
      title: `Sell carp tackle | ${shop.name}`,
      description:
        "Sell your second-hand carp gear in the UK. Fair offers or list with us.",
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
      condition: "Very good",
      asking: "",
      details: "",
    },
  });

  return (
    <SiteShell>
      <PageHero
        eyebrow="Sell"
        title="Sell your carp tackle"
        description="Clear the shed of rods, reels and luggage that still has life. We buy outright or list on commission."
      />
      <section className="section-pad pt-8">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 text-fg-muted lg:col-span-5">
            <h2 className="font-display text-2xl font-semibold text-fg">
              What we take
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Carp rods, reels, alarms and indicators</li>
              <li>Bedchairs, chairs, bivvies and luggage</li>
              <li>Nets, mats, scales and terminal tackle lots</li>
              <li>Honest condition — Fair and up is fine</li>
            </ul>
            <p className="text-sm">
              Email photos to{" "}
              <a
                className="font-medium text-accent underline"
                href={`mailto:${shop.email}`}
              >
                {shop.email}
              </a>{" "}
              or use the form — we’ll reply within 1–2 working days.
            </p>
          </div>
          <form
            className="card-surface space-y-4 p-6 lg:col-span-7"
            onSubmit={form.handleSubmit(() => {
              toast.success("Thanks — we’ll be in touch");
              form.reset();
            })}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label>Name</Label>
                <Input {...form.register("name")} />
              </div>
              <div className="space-y-1.5">
                <Label>Email</Label>
                <Input type="email" {...form.register("email")} />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Item(s)</Label>
              <Input
                placeholder="e.g. Fox Horizon X3 pair + Shimano reels"
                {...form.register("item")}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label>Condition</Label>
                <Input {...form.register("condition")} />
              </div>
              <div className="space-y-1.5">
                <Label>Asking price (optional)</Label>
                <Input placeholder="£" {...form.register("asking")} />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Details</Label>
              <Textarea
                rows={5}
                placeholder="Age, usage, any damage, location…"
                {...form.register("details")}
              />
              {form.formState.errors.details ? (
                <p className="text-xs text-sale">
                  {form.formState.errors.details.message}
                </p>
              ) : null}
            </div>
            <Button type="submit" size="lg">
              Submit listing enquiry
            </Button>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}
