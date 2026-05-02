import clsx from "clsx";
import type { Product } from "@/data/products";

export function ProductVisual({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <div
      className={clsx("product-visual", `product-visual--${product.slug}`, priority && "product-visual--large")}
      aria-label={`${product.name} preview artwork`}
      role="img"
    >
      <div className="product-visual__shape" />
      <div className="product-visual__meta">
        <span>{product.code}</span>
        <strong>{product.shortName}</strong>
      </div>
    </div>
  );
}
