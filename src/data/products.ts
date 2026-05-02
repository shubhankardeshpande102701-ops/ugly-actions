export type Product = {
  slug: string;
  code: string;
  name: string;
  shortName: string;
  category: string;
  price: string;
  description: string;
  fit: string;
  fitNote: string;
  sizes: string[];
  details: string[];
};

export const products: Product[] = [
  {
    slug: "training-shorts",
    code: "UA-001",
    name: "Action Training Short",
    shortName: "Short",
    category: "Unisex short",
    price: "$78 preview",
    description:
      "A clean 7-inch training short concept with secure storage, fast-dry structure, and enough polish for the walk after the session.",
    fit: "Athletic regular fit",
    fitNote: "Designed to sit above the knee with room through the thigh for squats, sprints, and warmups.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    details: [
      "Planned recycled nylon stretch shell",
      "Internal drawcord and low-profile waistband",
      "Phone-stable side pocket concept",
      "Future Shopify variant fields: size, color, inseam"
    ]
  },
  {
    slug: "performance-tshirt",
    code: "UA-002",
    name: "Ugly Rep Performance Tee",
    shortName: "Tee",
    category: "Unisex t-shirt",
    price: "$54 preview",
    description:
      "A technical tee concept with a sharp everyday silhouette, built for training sweat without looking like disposable gym gear.",
    fit: "Relaxed athletic fit",
    fitNote: "Room across the chest and shoulders with a straight body that layers cleanly.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    details: [
      "Planned breathable knit with soft handfeel",
      "Set-in sleeve for a cleaner shoulder line",
      "Interior neck mark instead of scratchy label",
      "Future Shopify variant fields: size, color"
    ]
  },
  {
    slug: "training-hoodie",
    code: "UA-003",
    name: "After Action Training Hoodie",
    shortName: "Hoodie",
    category: "Unisex hoodie",
    price: "$138 preview",
    description:
      "A structured warmup and recovery hoodie concept with a heavy hand, clean hood shape, and enough utility for cold starts.",
    fit: "Slightly oversized fit",
    fitNote: "Built for layering over training tops. Size down for a closer everyday fit.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    details: [
      "Planned heavyweight cotton-blend fleece",
      "Double-layer hood with structured opening",
      "Hidden media pocket concept",
      "Future Shopify variant fields: size, color"
    ]
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
