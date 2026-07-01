// Single source of truth for Boterra's public catalogue.
// PUBLIC-FACING: no producer names, no origins, no asserted certifications.
// Keep sourcing detail in private records, not here.

export const products = [
  {
    slug: "nilotica-shea-butter",
    name: "Nilotica Shea Butter",
    inci: "Butyrospermum parkii (Shea) Butter",
    hero: true,
    summary:
      "East African nilotica shea — softer, lower-melt and faster-absorbing than West African varieties, with a naturally mild scent profile.",
    benefits: [
      "Softer, creamier texture than West African shea",
      "Lower melting point — absorbs quickly into skin",
      "Naturally mild, low-odour profile",
      "Rich in oleic and linoleic fatty acids",
    ],
  },
  {
    slug: "prickly-pear-seed-oil",
    name: "Prickly Pear Seed Oil",
    inci: "Opuntia ficus-indica Seed Oil",
    hero: true,
    summary:
      "A rare, premium facial oil — exceptionally high in vitamin E and linoleic acid, prized for high-end skincare formulation.",
    benefits: [
      "One of the highest natural vitamin E (tocopherol) contents of any oil",
      "High in linoleic acid — supports skin barrier",
      "Fast-absorbing, non-greasy finish",
      "Valued in premium facial and anti-ageing formulation",
    ],
  },
  {
    slug: "green-rooibos-extract",
    name: "Green Rooibos Extract",
    inci: "Aspalathus linearis Leaf Extract",
    hero: false,
    summary:
      "Unfermented rooibos extract with high aspalathin content — water-soluble and suited to actives and functional applications.",
    benefits: [
      "High aspalathin (antioxidant) content",
      "Cold-water soluble",
      "Suited to actives and beverage applications",
    ],
  },
  {
    slug: "rosehip-extract",
    name: "Rosehip Extract",
    inci: "Rosa canina Fruit Extract",
    hero: false,
    summary:
      "Vitamin-C-rich cold-water extract for skincare actives and functional formulation.",
    benefits: [
      "Naturally rich in vitamin C",
      "Cold-water soluble",
      "Suited to skincare actives",
    ],
  },
  {
    slug: "honeybush-extract",
    name: "Honeybush Extract",
    inci: "Cyclopia Leaf Extract",
    hero: false,
    summary:
      "Naturally sweet, antioxidant-rich extract — a distinctive botanical with growing formulation demand.",
    benefits: [
      "Antioxidant-rich",
      "Naturally sweet profile",
      "Cold-water soluble",
    ],
  },
  {
    slug: "red-rooibos-extract",
    name: "Red Rooibos Extract",
    inci: "Aspalathus linearis Leaf Extract",
    hero: false,
    summary:
      "Fermented rooibos extract — the classic red grade, antioxidant-rich and widely recognised.",
    benefits: [
      "Classic fermented red rooibos",
      "Antioxidant-rich",
      "Cold-water soluble",
    ],
  },
];

export const company = {
  name: "Boterra Materials",
  tagline:
    "A UK-based B2B distributor of African botanical ingredients for cosmetic and personal-care manufacturers — traceable supply, sourced direct.",
  email: "blair@boterramaterials.com",
};
