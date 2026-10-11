export type Category = "Essentielle" | "Élégance" | "Premium";

export type Product = {
  id: number;
  slug: string;
  name: string;
  reference: string;
  price: number;
  category: Category;
  description: string;
  image: string;
  demo: boolean;
  availability: "À confirmer" | "Démonstration";
};

export const products: Product[] = [
  {
    id: 1,
    slug: "sac-elise",
    name: "Sac Élise",
    reference: "SAC-001",
    price: 5000,
    category: "Essentielle",
    description: "Un sac élégant, léger et pratique pour un usage quotidien, pensé pour s’adapter à plusieurs tenues.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
    demo: true,
    availability: "Démonstration",
  },
  {
    id: 2,
    slug: "sac-amelia",
    name: "Sac Amélia",
    reference: "SAC-002",
    price: 6000,
    category: "Essentielle",
    description: "Une silhouette fine et raffinée, idéale pour la ville, les rencontres et les sorties courantes.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
    demo: true,
    availability: "Démonstration",
  },
  {
    id: 3,
    slug: "sac-victoria",
    name: "Sac Victoria",
    reference: "SAC-003",
    price: 9000,
    category: "Élégance",
    description: "Un modèle plus imposant et chic, parfait pour les tenues sophistiquées et les occasions modes.",
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1200&q=80",
    demo: true,
    availability: "Démonstration",
  },
  {
    id: 4,
    slug: "sac-prestige",
    name: "Sac Prestige",
    reference: "SAC-004",
    price: 17000,
    category: "Premium",
    description: "Un accessoire premium qui apporte une touche de luxe et se distingue par son allure raffinée.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    demo: true,
    availability: "Démonstration",
  },
  {
    id: 5,
    slug: "sac-elegance",
    name: "Sac Élégance",
    reference: "SAC-005",
    price: 12000,
    category: "Élégance",
    description: "Un sac moderne et structuré, pensé pour une présence élégante lors des événements et réceptions.",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80",
    demo: true,
    availability: "Démonstration",
  },
  {
    id: 6,
    slug: "sac-lumiere",
    name: "Sac Lumière",
    reference: "SAC-006",
    price: 8000,
    category: "Essentielle",
    description: "Un style lumineux et facile à associer, idéal pour passer du quotidien aux sorties élégantes.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80",
    demo: true,
    availability: "Démonstration",
  },
  {
    id: 7,
    slug: "sac-classique",
    name: "Sac Classique",
    reference: "SAC-007",
    price: 6500,
    category: "Essentielle",
    description: "Un modèle intemporel et discret, pensé pour un look propre et raffiné au quotidien.",
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1200&q=80",
    demo: true,
    availability: "Démonstration",
  },
  {
    id: 8,
    slug: "sac-signature",
    name: "Sac Signature",
    reference: "SAC-008",
    price: 15000,
    category: "Premium",
    description: "Un accessoire affirmé, pensé pour celles qui recherchent un style premium avec une touche distinctive.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    demo: true,
    availability: "Démonstration",
  },
];

export const categories = ["Essentielle", "Élégance", "Premium"] as const;
