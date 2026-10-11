export default function ContactPage() {
  return (
    <main className="container-shell py-12">
      <div className="mb-8">
        <p className="section-tag">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold text-[#24211F]">Nous sommes à votre écoute</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[28px] border border-[#E7DCC7] bg-[#F4EBDD] p-6">
          <h2 className="text-2xl font-semibold text-[#24211F]">Par WhatsApp</h2>
          <p className="mt-4 text-sm text-[#4a433f]">+225 07 59 91 62 95</p>
          <a
            href="https://wa.me/2250759916295"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block gold-button"
          >
            Ouvrir WhatsApp
          </a>
        </div>

        <div className="rounded-[28px] border border-[#E7DCC7] bg-whiteSoft p-6">
          <h2 className="text-2xl font-semibold text-[#24211F]">Horaires</h2>
          <p className="mt-4 text-sm text-[#4a433f]">
            Nous répondons selon nos disponibilités. Pour une réponse rapide, utilisez WhatsApp.
          </p>
        </div>
      </div>
    </main>
  );
}
