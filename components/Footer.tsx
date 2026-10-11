import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#24211F] text-[#f5efe8]">
      <div className="container-shell grid gap-10 py-16 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-semibold tracking-[0.12em]">MAISON ÉLÉGANCE</h3>
          <p className="mt-4 text-sm text-[#d4c7b7]">
            Une sélection de sacs à main inspirés par l’élégance quotidienne et les grandes occasions.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Navigation</h4>
          <ul className="mt-4 space-y-2 text-sm text-[#d4c7b7]">
            <li><Link href="/boutique">Boutique</Link></li>
            <li><Link href="/collections">Collections</Link></li>
            <li><Link href="/livraison">Livraison et paiement</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Informations</h4>
          <ul className="mt-4 space-y-2 text-sm text-[#d4c7b7]">
            <li><Link href="/a-propos">À propos</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/conditions-generales">Conditions générales</Link></li>
            <li><Link href="/politique-confidentialite">Politique de confidentialité</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#3d3835] px-4 py-5 text-center text-xs text-[#d4c7b7]">
        © 2026 MAISON ÉLÉGANCE — Tous droits réservés.
      </div>
    </footer>
  );
}
