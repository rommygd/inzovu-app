import { useMemo } from "react";
import ProductCard from "@/components/product/ProductCard";
import { categories, products } from "@/data/inzovu";
import { Link, useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function Shop() {
  const q = useQuery().get("q")?.toLowerCase() || "";
  const filtered = q
    ? products.filter((p) => p.name.toLowerCase().includes(q))
    : products;

  return (
    <div className="container mx-auto py-8">
      <header className="flex items-end justify-between">
        <h1 className="font-display text-3xl font-semibold">Shop All</h1>
        <div className="text-sm text-muted-foreground">{filtered.length} items</div>
      </header>

      <div className="flex gap-6 mt-6">
        <aside className="w-56 hidden md:block">
          <h3 className="font-medium mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={`/category/${c.slug}`} className="story-link">{c.title}</Link>
              </li>
            ))}
          </ul>
        </aside>

        <section className="flex-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>
      </div>
    </div>
  );
}
