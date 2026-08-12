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
  message: z.string().min(10, "Please write a short message"),
});

type FormValues = z.infer<typeof schema>;

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: `Contact | ${shop.name}`,
      description: `Contact ${shop.name} about second-hand carp tackle orders or sales.`,
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });

  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Orders, stock questions, or selling enquiries — we reply within 1–2 working days."
      />
      <section className="section-pad pt-8">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm text-fg-muted">Email</p>
            <a
              href={`mailto:${shop.email}`}
              className="mt-1 block break-all font-medium text-accent"
            >
              {shop.email}
            </a>
            <p className="mt-6 text-sm text-fg-muted">Region</p>
            <p className="mt-1 font-medium text-fg">{shop.region}</p>
            <p className="mt-6 text-sm text-fg-muted">Shipping</p>
            <p className="mt-1 text-sm text-fg">{shop.shippingNote}</p>
          </div>
          <form
            className="card-surface space-y-4 p-6 lg:col-span-8"
            onSubmit={form.handleSubmit(() => {
              toast.success("Message sent");
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
              <Label>Message</Label>
              <Textarea rows={5} {...form.register("message")} />
              {form.formState.errors.message ? (
                <p className="text-xs text-sale">
                  {form.formState.errors.message.message}
                </p>
              ) : null}
            </div>
            <Button type="submit" size="lg">
              Send message
            </Button>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}
