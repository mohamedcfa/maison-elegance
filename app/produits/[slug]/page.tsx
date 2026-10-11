import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/data/products";
import { formatCurrency } from "@/lib/format";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) notFound();

  return (
    <main className="container-shell py-12">
      <Link href="/boutique" className="mb-8 inline-block text-sm text-[#6b625d]">
        ← Retour au catalogue
      </Link>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[32px] border border-[#E7DCC7] bg-whiteSoft shadow-premium">
          <div className="relative h-[520px]">
            <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>

        <div>
          <p className="section-tag">{product.category}</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#24211F]">{product.name}</h1>
          <p className="mt-2 text-sm text-[#6b625d]">{product.reference}</p>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-3xl font-bold text-[#24211F]">{formatCurrency(product.price)}</span>
            <span className="rounded-full bg-[#F4EBDD] px-3 py-1 text-xs uppercase tracking-[0.1em] text-[#24211F]">
              {product.availability}
            </span>
          </div>

          <p className="mt-5 text-base text-[#4a433f]">{product.description}</p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton product={product} className="w-full sm:w-auto" />
            <Link href="/boutique" className="ghost-button w-full sm:w-auto">
              Continuer shopping
            </Link>
          </div>

          <div className="mt-8 rounded-[24px] border border-[#E7DCC7] bg-[#F4EBDD] p-5">
            <h2 className="text-lg font-semibold text-[#24211F]">Informations</h2>
            <ul className="mt-4 space-y-2 text-sm text-[#4a433f]">
              <li>Référence : {product.reference}</li>
              <li>Catégorie : {product.category}</li>
              <li>Disponibilité : {product.availability}</li>
              <li>Livraison : À confirmer lors de la commande</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
