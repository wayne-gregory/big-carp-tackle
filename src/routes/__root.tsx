import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "sonner";
import { AuthProvider } from "@/lib/auth/provider";
import { CreatedWithGrokBanner } from "@/components/created-with-grok-banner";
import { shop } from "@/lib/shop";
import { jsonLdScript, organizationJsonLd, SITE_URL } from "@/lib/seo";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: shop.description },
      { title: `${shop.name} | ${shop.tagline}` },
      { name: "theme-color", content: "#101840" },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:image", content: `${SITE_URL}/og.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: shop.name },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/brand/apple-touch.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
      },
    ],
    scripts: [jsonLdScript(organizationJsonLd())],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <CreatedWithGrokBanner />
        <AuthProvider>
          <Outlet />
          <Toaster position="bottom-right" toastOptions={{ className: "font-sans" }} />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
