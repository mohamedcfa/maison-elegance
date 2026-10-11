import type { Product } from "@/data/products";
import { formatCurrency } from "@/lib/format";

export const WHATSAPP_NUMBER = "2250759916295";
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export function generateProductWhatsAppLink(product: Product, quantity = 1) {
  const message = `Bonjour, je souhaite commander le ${product.name} (${product.reference}), affiché à ${formatCurrency(product.price)}. Quantité : ${quantity}. Merci de confirmer la disponibilité, les frais de livraison et le délai pour ma commune.`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export function generateCartWhatsAppLink(
  items: { name: string; quantity: number; price: number }[],
  total: number
) {
  const lines = items
    .map((item) => `- ${item.name} x${item.quantity} : ${formatCurrency(item.price * item.quantity)}`)
    .join("\n");

  const message = `Bonjour, je souhaite passer commande pour la boutique MAISON ÉLÉGANCE.\n\nArticles :\n${lines}\n\nTotal estimé : ${formatCurrency(total)}\n\nFrais de livraison : à confirmer lors de la commande.\nMerci de confirmer la disponibilité et le délai pour ma commune.`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}
