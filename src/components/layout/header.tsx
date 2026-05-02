import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Ugly Actions home">
        Ugly Actions
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/products">Products</Link>
        <a href="/#drop-list">Drop List</a>
      </nav>
    </header>
  );
}
