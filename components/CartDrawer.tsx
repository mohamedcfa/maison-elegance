"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { generateCartWhatsAppLink } from "@/lib/whatsapp";

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, updateQuantity, removeItem, clearCart, subtotal } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
      <div className="h-full w-full max-w-md bg-[#FFFCF7] p-6 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#24211F]">Panier</h2>
          <button onClick={onClose} className="text-sm text-[#6b625d]">
            Fermer
          </button>
        </div>

        {items.length === 0 ? (
          <div className="mt-12 text-center">
            <p className="text-lg text-[#24211F]">Votre panier est vide.</p>
            <Link href="/boutique" onClick={onClose} className="mt-5 inline-block gold-button">
              Découvrir la boutique
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="rounded-2xl border border-[#e8dfd4] p-4">
                  <div className="flex justify-between gap-3">
                    <div>
                      <h3 className="font-medium text-[#24211F]">{product.name}</h3>
                      <p className="text-sm text-[#6b625d]">{product.reference}</p>
                    </div>
                    <button type="button" onClick={() => removeItem(product.id)} className="text-sm text-[#8d6650]">
                      Supprimer
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        className="h-8 w-8 rounded-full border border-[#d8cab6] text-lg"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                      >
                        −
                      </button>
                      <span>{quantity}</span>
                      <button
                        className="h-8 w-8 rounded-full border border-[#d8cab6] text-lg"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <strong>{new Intl.NumberFormat("fr-FR").format(product.price * quantity)} FCFA</strong>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-[#e8dfd4] pt-4">
              <div className="flex justify-between text-[#24211F]">
                <span>Sous-total</span>
                <strong>{new Intl.NumberFormat("fr-FR").format(subtotal)} FCFA</strong>
              </div>
              <p className="mt-2 text-xs text-[#6b625d]">
                Les frais de livraison ne sont pas inclus tant qu’ils ne sont pas confirmés.
              </p>

              <div className="mt-5 space-y-3">
                <a
                  href={generateCartWhatsAppLink(
                    items.map(({ product, quantity }) => ({
                      name: product.name,
                      quantity,
                      price: product.price,
                    })),
                    subtotal
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-full bg-[#C6A15B] px-5 py-3 text-center text-sm font-semibold text-[#24211F]"
                >
                  Commander sur WhatsApp
                </a>
                <button
                  onClick={clearCart}
                  className="block w-full rounded-full border border-[#24211F] px-5 py-3 text-sm font-medium text-[#24211F]"
                >
                  Vider le panier
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
