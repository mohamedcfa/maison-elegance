import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <main>
      <section className="container-shell py-10 md:py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="animate-fadeUp">
            <p className="section-tag mb-4">MAISON ÉLÉGANCE</p>
            <h1 className="max-w-xl font-display text-5xl leading-[0.98] text-[#24211F] md:text-6xl lg:text-7xl">
              L’élégance se porte au quotidien.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-[#4c4643]">
              Découvrez notre sélection de sacs à main pour sublimer votre style, du quotidien aux grandes occasions.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/boutique" className="gold-button">
                Découvrir la collection
              </Link>
              <WhatsAppButton className="w-full sm:w-auto" />
            </div>
          </div>

          <div className="relative h-[520px] overflow-hidden rounded-[32px] shadow-premium animate-float">
            <Image
              src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1400&q=80"
              alt="Sacs à main premium"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F4EBDD] py-16">
        <div className="container-shell">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="section-tag">Nouveautés</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#24211F]">Sélection du moment</h2>
            </div>
            <Link href="/boutique" className="text-sm font-medium text-[#24211F]">
              Voir tout
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { label: "Essentielle", description: "Pour un style simple, chic et utile." },
            { label: "Élégance", description: "Pour les tenues raffinées et les belles occasions." },
            { label: "Premium", description: "Le luxe discret pour des looks impeccables." },
          ].map((item) => (
            <div key={item.label} className="premium-card p-6">
              <p className="section-tag">Collection</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#24211F]">{item.label}</h3>
              <p className="mt-3 text-sm text-[#4a433f]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#24211F] py-16 text-[#FFFDF9]">
        <div className="container-shell">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { title: "Quotidien", description: "Sobriété élégante pour la ville." },
              { title: "Travail", description: "Ligne structurée et fonctionnelle." },
              { title: "Sorties", description: "Le détail chic pour des looks affirmés." },
              { title: "Événements", description: "Un sac qui sublime chaque tenue." },
            ].map((item) => (
              <div key={item.title} className="rounded-[24px] border border-[#4b4542] bg-[#2d2927] p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-[#d7cabe]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Commande simple", text: "Choisissez votre sac, ajoutez le panier et validez en quelques clics." },
            { title: "Paiement & livraison", text: "Les frais et délais sont confirmés lors de la commande selon votre commune." },
            { title: "Service client", text: "Contact direct via WhatsApp pour un suivi rapide." },
          ].map((item) => (
            <div key={item.title} className="rounded-[24px] border border-[#E7DCC7] bg-[#F4EBDD] p-6">
              <h3 className="text-lg font-semibold text-[#24211F]">{item.title}</h3>
              <p className="mt-3 text-sm text-[#4a433f]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell pb-16">
        <div className="rounded-[32px] bg-[#F4EBDD] px-6 py-12 text-center">
          <p className="section-tag">Guide de commande</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#24211F]">Une commande claire et rapide</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              "Choisissez votre modèle dans notre catalogue.",
              "Validez votre panier et ouvrez WhatsApp.",
              "Le service client confirme la disponibilité et la livraison.",
            ].map((step, index) => (
              <div key={step}>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#24211F] text-lg font-semibold text-[#FFFCF7]">
                  {index + 1}
                </div>
                <p className="text-sm text-[#4a433f]">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/boutique" className="inline-flex rounded-full bg-[#24211F] px-6 py-3 text-sm font-semibold text-[#FFFCF7]">
              Découvrir le catalogue
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
