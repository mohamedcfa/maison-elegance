export default function LivraisonPage() {
  return (
    <main className="container-shell py-12">
      <div className="mb-8">
        <p className="section-tag">Livraison et paiement</p>
        <h1 className="mt-3 text-4xl font-semibold text-[#24211F]">À confirmer lors de la commande</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[28px] border border-[#E7DCC7] bg-[#F4EBDD] p-6">
          <h2 className="text-2xl font-semibold text-[#24211F]">Zones de livraison</h2>
          <p className="mt-4 text-sm text-[#4a433f]">
            Abidjan et les autres villes selon les zones effectivement desservies. Les zones exactes sont confirmées au moment de la commande.
          </p>
        </div>

        <div className="rounded-[28px] border border-[#E7DCC7] bg-whiteSoft p-6">
          <h2 className="text-2xl font-semibold text-[#24211F]">Frais et délais</h2>
          <p className="mt-4 text-sm text-[#4a433f]">
            Frais de livraison, délais estimés et modes de paiement sont à confirmer lors de la commande.
          </p>
        </div>

        <div className="rounded-[28px] border border-[#E7DCC7] bg-whiteSoft p-6">
          <h2 className="text-2xl font-semibold text-[#24211F]">Modes de paiement</h2>
          <p className="mt-4 text-sm text-[#4a433f]">À confirmer lors de la commande.</p>
        </div>

        <div className="rounded-[28px] border border-[#E7DCC7] bg-[#F4EBDD] p-6">
          <h2 className="text-2xl font-semibold text-[#24211F]">Service client</h2>
          <p className="mt-4 text-sm text-[#4a433f]">Contact: +225 07 59 91 62 95</p>
        </div>
      </div>
    </main>
  );
}
