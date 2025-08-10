import { useParams, Link } from "react-router-dom";
import ProductCard from "@/components/product/ProductCard";
import { categories, products } from "@/data/inzovu";

export default function Category() {
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
    <div className="container mx-auto py-8">
      <header className="flex items-end justify-between">
        <h1 className="font-display text-3xl font-semibold">{category.title}</h1>
        <div className="text-sm text-muted-foreground">{items.length} items</div>
      </header>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
