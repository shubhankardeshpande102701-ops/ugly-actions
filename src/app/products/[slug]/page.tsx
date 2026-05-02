import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Bell, Ruler, Truck } from "lucide-react";
import { EmailCapture } from "@/components/marketing/email-capture";
import { ProductVisual } from "@/components/product/product-visual";
import { getProductBySlug, products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found | Ugly Actions" };
  }

  return {
    title: `${product.name} | Ugly Actions`,
    description: product.description
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="product-detail">
      <div>
        <Link className="back-link" href="/products">
          <ArrowLeft aria-hidden size={17} /> All products
        </Link>
        <ProductVisual product={product} priority />
      </div>

      <div className="product-buy">
        <p className="eyebrow">{product.category}</p>
        <h1>{product.name}</h1>
        <p className="price">{product.price}</p>
        <p className="product-description">{product.description}</p>

        <div className="option-block">
          <div className="option-header">
            <h2>Size</h2>
            <a href="#size-guide">Size guide</a>
          </div>
          <div className="size-row" aria-label="Available sizes">
            {product.sizes.map((size) => (
              <button key={size} className="size-button" type="button">
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="fit-callout">
          <Ruler aria-hidden size={20} />
          <div>
            <strong>{product.fit}</strong>
            <p>{product.fitNote}</p>
          </div>
        </div>

        <EmailCapture source={product.slug} compact />

        <div className="trust-list">
          <div>
            <Bell aria-hidden size={19} />
            <span>No checkout yet. Join the drop list for launch access.</span>
          </div>
          <div>
            <Truck aria-hidden size={19} />
            <span>Shipping and returns policy will be visible before purchase opens.</span>
          </div>
        </div>

        <section id="size-guide" className="detail-panel">
          <h2>Product details</h2>
          <ul>
            {product.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
