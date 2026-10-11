import Link from "next/link";
import type { Product } from "@/data/products";

export default function WhatsAppButton({
  product,
  label = "Commander sur WhatsApp",
  className = "",
  quantity = 1,
}: {
  product?: Product;
  label?: string;
  className?: string;
  quantity?: number;
}) {
  const message = product
    ? `Bonjour, je souhaite commander le ${product.name} (${product.reference}), affiché à ${new Intl.NumberFormat("fr-FR").format(product.price)} FCFA. Quantité : ${quantity}. Merci de confirmer la disponibilité, les frais de livraison et le délai pour ma commune.`
    : "Bonjour, je souhaite commander un sac MAISON ÉLÉGANCE. Merci de me confirmer la disponibilité et les frais de livraison.";

  const href = `https://wa.me/2250759916295?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-[#C6A15B] px-5 py-3 text-sm font-semibold text-[#24211F] transition hover:bg-[#b99551] ${className}`}
    >
      {label}
    </Link>
  );
}
