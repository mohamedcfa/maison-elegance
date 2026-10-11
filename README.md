# MAISON ÉLÉGANCE

Boutique e-commerce premium pour sacs à main pour femmes en Côte d’Ivoire.

## Stack
- Next.js 14
- React
- TypeScript
- Tailwind CSS

## Installation

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Variables d’environnement

```env
NEXT_PUBLIC_SITE_NAME=MAISON ÉLÉGANCE
NEXT_PUBLIC_WHATSAPP_NUMBER=2250759916295
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/2250759916295
NEXT_PUBLIC_DEFAULT_CURRENCY=FCFA
NEXT_PUBLIC_SHIPPING_NOTE=À confirmer lors de la commande
NEXT_PUBLIC_DELIVERY_ZONES=Abidjan et autres villes selon zone desservie
```

## Production

```bash
npm run build
npm run start
```

## Déploiement

Le plus simple est de déployer sur Vercel :

```bash
npm install -g vercel
vercel
```

## Données de démonstration

Les produits du catalogue sont des exemples fictifs, clairement identifiés comme démonstration. Ils doivent être remplacés par de vrais produits avant mise en ligne officielle.

## Points importants
- Le panier est local côté client.
- Les commandes passent par WhatsApp.
- Les pages de conditions et confidentialité sont en attente de vérification avant publication.
