export default function NotFoundPage() {
  return (
    <main className="container-shell py-20 text-center">
      <h1 className="text-4xl font-semibold text-[#24211F]">Page introuvable</h1>
      <p className="mt-4 text-[#4a433f]">La page recherchée n’existe pas ou a été déplacée.</p>
      <a href="/" className="mt-8 inline-block gold-button">
        Retour à l’accueil
      </a>
    </main>
  );
}
