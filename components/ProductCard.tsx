"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";
import { formatCurrency } from "@/lib/format";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#E7DCC7] bg-whiteSoft shadow-premium">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#6b625d]">
          <span>{product.category}</span>
          <span>{product.reference}</span>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#24211F]">{product.name}</h3>
          <p className="mt-2 text-sm text-[#4a433f]">{product.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[#24211F]">{formatCurrency(product.price)}</span>
          <span className="text-xs text-[#6b625d]">{product.availability}</span>
        </div>

        <div className="flex gap-3">
          <Link
            href={`/produits/${product.slug}`}
            className="flex-1 rounded-full border border-[#24211F] px-4 py-3 text-center text-sm font-medium text-[#24211F] transition hover:bg-[#24211F] hover:text-white"
          >
            Voir le produit
          </Link>
          <button
            type="button"
            onClick={() => addItem(product)}
            className="rounded-full bg-[#F4EBDD] px-4 py-3 text-sm font-medium text-[#24211F] transition hover:bg-[#e9dcc2]"
          >
            Ajouter
          </button>
        </div>

        <a
          href={`https://wa.me/2250759916295?text=${encodeURIComponent(`Bonjour, je souhaite commander le ${product.name} (${product.reference}), affiché à ${formatCurrency(product.price)}. Quantité : 1. Merci de confirmer la disponibilité, les frais de livraison et le délai pour ma commune.`)}`}
          target="_blank"
          rel="noreferrer"
          className="block w-full rounded-full bg-[#C6A15B] px-5 py-3 text-center text-sm font-semibold text-[#24211F]"
        >
          Commander sur WhatsApp
        </a>
      </div>
    </article>
  );
}
