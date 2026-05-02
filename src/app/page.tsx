import Link from "next/link";
import { ArrowRight, Dumbbell, ShieldCheck, Sparkles } from "lucide-react";
import { EmailCapture } from "@/components/marketing/email-capture";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/products";

const principles = [
  {
    icon: Dumbbell,
    title: "Training first",
    copy: "Cuts, fabrics, and pockets planned for real movement before lifestyle styling."
  },
  {
    icon: ShieldCheck,
    title: "Fit confidence",
    copy: "Visible sizes, fit notes, and product-specific details from the first preview."
  },
  {
    icon: Sparkles,
    title: "Small drop energy",
    copy: "Three focused pieces, built to feel intentional instead of bloated."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">Ugly Actions / Drop 001</p>
          <h1>Performance gear for rookies.</h1>
          <p className="hero-lede">
            Ugly Actions is a premium unisex training label launching with three essentials:
            shorts, a t-shirt, and a hoodie built for work before applause.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/products">
              Preview products <ArrowRight aria-hidden size={18} />
            </Link>
            <a className="button button-secondary" href="#drop-list">
              Join drop list
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Abstract athletic wear campaign visual">
          <div className="hero-visual__badge">UA</div>
          <div className="hero-visual__panel hero-visual__panel--one" />
          <div className="hero-visual__panel hero-visual__panel--two" />
          <div className="hero-visual__caption">
            <span>Preview system</span>
            <strong>3 pieces / 1 drop</strong>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="section-heading">
          <p className="eyebrow">The first uniform</p>
          <h2>Three products, no filler.</h2>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="principles">
        {principles.map((principle) => {
          const Icon = principle.icon;
          return (
            <article key={principle.title} className="principle">
              <Icon aria-hidden size={22} />
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          );
        })}
      </section>

      <section id="drop-list" className="drop-section">
        <div>
          <p className="eyebrow">Coming soon</p>
          <h2>Get the first look before Drop 001 goes live.</h2>
        </div>
        <EmailCapture source="home" />
      </section>
    </>
  );
}
