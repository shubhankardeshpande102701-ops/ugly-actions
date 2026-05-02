import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/products";

export const metadata = {
  title: "Products | Ugly Actions"
};

export default function ProductsPage() {
  return (
    <section className="page-shell">
      <div className="section-heading">
        <p className="eyebrow">Drop 001</p>
        <h1>Preview the first three Ugly Actions pieces.</h1>
        <p>
          V1 is intentionally small: a short, a tee, and a hoodie with enough fit detail to make
          the product story feel real before checkout is enabled.
        </p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
