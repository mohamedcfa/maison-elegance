import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://maison-elegance.example"),
  title: {
    default: "MAISON ÉLÉGANCE",
    template: "%s | MAISON ÉLÉGANCE",
  },
  description:
    "Boutique de sacs à main pour femmes en Côte d’Ivoire. Découvrez des modèles élégants et commandez facilement sur WhatsApp.",
  keywords: [
    "sac à main femme",
    "Côte d’Ivoire",
    "boutique sac",
    "MAISON ÉLÉGANCE",
    "mode premium",
  ],
  openGraph: {
    title: "MAISON ÉLÉGANCE",
    description:
      "Découvrez notre sélection de sacs à main pour sublimer votre style, du quotidien aux grandes occasions.",
    type: "website",
    locale: "fr_FR",
    url: "https://maison-elegance.example",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-[#FFFCF7] text-[#24211F] antialiased">
        <CartProvider>
          <SiteShell>{children}</SiteShell>
        </CartProvider>
      </body>
    </html>
  );
}
