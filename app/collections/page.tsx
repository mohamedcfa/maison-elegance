import Link from "next/link";
import { categories } from "@/data/products";

export default function CollectionsPage() {
  return (
    <main className="container-shell py-12">
      <div className="mb-8">
        <p className="section-tag">Nos collections</p>
        <h1 className="mt-3 text-4xl font-semibold text-[#24211F]">Une élégance pour chaque moment</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <div key={category} className="premium-card p-6">
            <p className="section-tag">Collection</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#24211F]">{category}</h2>
            <p className="mt-4 text-sm text-[#4a433f]">
              {category === "Essentielle" && "Des looks simples, élégants et faciles à porter au quotidien."}
              {category === "Élégance" && "Des modèles raffinés pour sublimer les tenues et les grands moments."}
              {category === "Premium" && "Une sélection haut standing pour un style marqué et distingué."}
            </p>
            <Link href="/boutique" className="mt-6 inline-block gold-button">
              Voir les modèles
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
