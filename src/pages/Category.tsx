import { useParams, Link } from "react-router-dom";
import ProductCard from "@/components/product/ProductCard";
import { categories } from "@/data/inzovu";
import { useProducts } from "@/contexts/ProductContext";

export default function Category() {
  const { products } = useProducts();
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);
  const items = products.filter((p) => p.categorySlug === slug);

  if (!category) {
    return (
      <div className="container mx-auto py-12">
        <h1 className="text-2xl font-semibold mb-2">Category not found</h1>
        <Link to="/shop" className="story-link">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="text-center mb-8">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
          Fresh {category.title}
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
          Discover our premium selection of {category.title.toLowerCase()}, sourced directly from local farms for maximum freshness and flavor.
          Quality you can taste in every bite.
        </p>
      </header>
      {/* Mobile horizontal scroll */}
      <div className="block sm:hidden overflow-x-auto pb-4 mt-6">
        <div className="flex gap-4 min-w-max">
          {items.map((p) => (
            <div key={p.id} className="w-64 flex-shrink-0">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop grid */}
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
