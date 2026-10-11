const faqs = [
  {
    q: "Comment passer une commande ?",
    a: "Choisissez un modèle, ajoutez-le au panier, puis commandez depuis WhatsApp.",
  },
  {
    q: "Les frais de livraison sont-ils inclus ?",
    a: "Les frais de livraison sont confirmés lors de la commande selon votre région.",
  },
  {
    q: "Comment sont déterminés les délais ?",
    a: "Les délais sont confirmés lors de la commande, selon la zone de livraison.",
  },
  {
    q: "Les produits affichés sont-ils des exemples ?",
    a: "Oui. Ces produits sont des exemples de démonstration et doivent être remplacés avant mise en ligne.",
  },
];

export default function FaqPage() {
  return (
    <main className="container-shell py-12">
      <div className="mb-8">
        <p className="section-tag">FAQ</p>
        <h1 className="mt-3 text-4xl font-semibold text-[#24211F]">Questions fréquentes</h1>
      </div>

      <div className="space-y-4">
        {faqs.map((item) => (
          <div key={item.q} className="rounded-[24px] border border-[#E7DCC7] bg-whiteSoft p-6">
            <h2 className="text-lg font-semibold text-[#24211F]">{item.q}</h2>
            <p className="mt-2 text-sm text-[#4a433f]">{item.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
