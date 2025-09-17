import { Link } from "react-router-dom";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/inzovu";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-6 w-6 text-accent fill-accent" />
            <span className="text-accent font-semibold uppercase tracking-wider">Featured Products</span>
            <Star className="h-6 w-6 text-accent fill-accent" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Fresh Picks for You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked premium quality fruits and vegetables, sourced directly from local farms for maximum freshness and flavor.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/shop">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}