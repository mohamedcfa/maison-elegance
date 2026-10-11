"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";

export default function BoutiquePage() {
  const [selectedCategory, setSelectedCategory] = useState<"Tout" | (typeof categories)[number]>("Tout");
  const [maxPrice, setMaxPrice] = useState(20000);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("prix-bas");

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchCategory = selectedCategory === "Tout" || product.category === selectedCategory;
      const matchPrice = product.price <= maxPrice;
      const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchPrice && matchSearch;
    });

    if (sort === "prix-bas") result.sort((a, b) => a.price - b.price);
    if (sort === "prix-haut") result.sort((a, b) => b.price - a.price);

    return result;
  }, [selectedCategory, maxPrice, search, sort]);

  return (
    <main className="container-shell py-12">
      <div className="mb-8">
        <p className="section-tag">Boutique</p>
        <h1 className="mt-3 text-4xl font-semibold text-[#24211F]">Catalogue</h1>
      </div>

      <div className="mb-8 grid gap-4 rounded-[24px] border border-[#E7DCC7] bg-[#F4EBDD] p-5 md:grid-cols-[1.5fr_1fr_1fr]">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher un modèle"
          className="rounded-full border border-[#ddd0c0] bg-white px-4 py-3 text-sm outline-none"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as any)}
          className="rounded-full border border-[#ddd0c0] bg-white px-4 py-3 text-sm outline-none"
        >
          <option value="Tout">Toutes les catégories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-full border border-[#ddd0c0] bg-white px-4 py-3 text-sm outline-none"
        >
          <option value="prix-bas">Prix croissant</option>
          <option value="prix-haut">Prix décroissant</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm text-[#4a433f]">
          Budget maximum : {maxPrice.toLocaleString("fr-FR")} FCFA
        </label>
        <input
          type="range"
          min={4000}
          max={20000}
          step={500}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="mt-3 w-full accent-[#C6A15B]"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <div className="col-span-full rounded-[24px] border border-[#E7DCC7] bg-[#F4EBDD] p-8 text-center">
            <p className="text-xl font-medium text-[#24211F]">Aucun produit ne correspond à votre recherche.</p>
          </div>
        )}
      </div>
    </main>
  );
}
