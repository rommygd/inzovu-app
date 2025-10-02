import { useMemo } from "react";
import ProductCard from "@/components/product/ProductCard";
import { categories } from "@/data/inzovu";
import { Link, useLocation } from "react-router-dom";
import { useProducts } from "@/contexts/ProductContext";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function Shop() {
  const { products } = useProducts();
  const q = useQuery().get("q")?.toLowerCase() || "";
  const filtered = q
    ? products.filter((p) => p.name.toLowerCase().includes(q))
    : products;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="text-center mb-8">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
          Discover Our Fresh Selection
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 px-2 sm:px-0">
          Explore our wide range of premium quality groceries, from farm-fresh produce to artisanal bakery items.
          Everything you need for healthy, delicious meals.
        </p>
        <div className="text-sm text-muted-foreground">{filtered.length} fresh items available</div>
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

        {/* Mobile horizontal scroll */}
        <section className="flex-1 block sm:hidden overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max">
            {filtered.map((p) => (
              <div key={p.id} className="w-64 flex-shrink-0">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>

        {/* Desktop grid */}
        <section className="flex-1 hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>
      </div>
    </div>
  );
}
