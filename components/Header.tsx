"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Header({ onCartClick }: { onCartClick: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  const nav = [
    { label: "Accueil", href: "/" },
    { label: "Boutique", href: "/boutique" },
    { label: "Collections", href: "/collections" },
    { label: "Livraison", href: "/livraison" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#e9dfd2] bg-[#FFFCF7]/90 backdrop-blur-md">
        <div className="container-shell flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-semibold tracking-[0.12em] text-[#24211F] md:text-2xl">
            MAISON ÉLÉGANCE
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-xs uppercase tracking-[0.18em] text-[#24211F]">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="https://wa.me/2250759916295"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-[#C6A15B] px-5 py-2.5 text-sm font-medium text-[#24211F] md:inline-flex"
            >
              Commander
            </Link>

            <button
              type="button"
              onClick={onCartClick}
              className="relative rounded-full border border-[#24211F] px-4 py-2 text-sm text-[#24211F]"
            >
              Panier
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#24211F] text-[10px] text-white">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              type="button"
              className="rounded-full border border-[#24211F] px-3 py-2 text-sm text-[#24211F] md:hidden"
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              Menu
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-[#e9dfd2] bg-[#FFFCF7] p-4 md:hidden">
            <div className="container-shell flex flex-col gap-3">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm uppercase tracking-[0.12em] text-[#24211F]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
