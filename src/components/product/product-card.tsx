import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductVisual } from "@/components/product/product-visual";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <ProductVisual product={product} />
      <div className="product-card__body">
        <p>{product.category}</p>
        <h3>{product.name}</h3>
        <span>{product.price}</span>
        <Link href={`/products/${product.slug}`}>
          View details <ArrowRight aria-hidden size={17} />
        </Link>
      </div>
    </article>
  );
}
