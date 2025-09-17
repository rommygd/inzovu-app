import Hero from "@/components/home/Hero";
import ProductCard from "@/components/product/ProductCard";
import CustomerTestimonials from "@/components/home/CustomerTestimonials";
import PromotionalCards from "@/components/home/PromotionalCards";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { categories, products } from "@/data/inzovu";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const categoryFeatures = [
    {
      slug: "bakery",
      title: "Bakery",
      description: "Fresh baked goods daily",
      image: categories.find(c => c.slug === "bakery")?.image
    },
    {
      slug: "dairy",
      title: "Dairy",
      description: "Farm fresh dairy products",
      image: categories.find(c => c.slug === "dairy")?.image
    },
    {
      slug: "pantry",
      title: "Pantry",
      description: "Essential pantry items",
      image: categories.find(c => c.slug === "pantry")?.image
    },
    {
      slug: "vegetables",
      title: "Vegetables",
      description: "Fresh vegetables daily",
      image: categories.find(c => c.slug === "vegetables")?.image
    },
    {
      slug: "fruits",
      title: "Fruits",
      description: "Sweet & fresh fruits",
      image: categories.find(c => c.slug === "fruits")?.image
    }
  ];

  return (
    <>
      <Hero />

      <main className="flex-1">
        {/* Categories Section */}
        <section className="py-20 bg-gradient-to-b from-background via-muted/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <span className="text-primary font-semibold">🌟</span>
                <span className="text-primary font-semibold uppercase tracking-wide text-sm">Categories</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Shop by Category
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our wide range of fresh, premium quality products sourced directly from local farms
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  to={`/category/${category.slug}`}
                  className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border border-border/50 hover:bg-white/90 hover:border-primary/20 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div className="w-24 h-24 mx-auto mb-6 rounded-3xl overflow-hidden ring-4 ring-white/50 group-hover:ring-primary/20 transition-all duration-300">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-bold text-base group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 group-hover:text-primary/70 transition-colors">
                    Fresh & Premium
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Fruits Section */}
        <section className="py-16 border-t border-border/50 bg-gradient-to-r from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="font-display text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  🍎 Fresh Fruits
                </h2>
                <p className="text-lg text-muted-foreground">
                  The Freshest Fruits Straight From The Farms - Handpicked Daily
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full hover:bg-primary/10">
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full hover:bg-primary/10">
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.filter(p => p.categorySlug === "fruits").map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/category/fruits">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  View All Fruits
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <FeaturedProducts />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Vegetables Section */}
        <section className="py-16 border-t border-border/50 bg-gradient-to-r from-accent/5 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="font-display text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  🥬 Fresh Vegetables
                </h2>
                <p className="text-lg text-muted-foreground">
                  Freshly Picked - Recently Harvested from Local Gardens
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full hover:bg-accent/10">
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full hover:bg-accent/10">
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.filter(p => p.categorySlug === "vegetables").map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/category/vegetables">
                <Button size="lg" className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  View All Vegetables
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Promotional Cards */}
        <PromotionalCards />

        {/* Customer Testimonials */}
        <CustomerTestimonials />

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-accent relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-6">
                Stay Fresh with Our Newsletter 📧
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Get exclusive deals, fresh product updates, and healthy recipe ideas delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-2xl border-0 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-white/50 shadow-lg"
                />
                <button className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-white/90 transition-colors shadow-lg">
                  Subscribe 🚀
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Inzovu Market',
            url: '/',
            potentialAction: {
              '@type': 'SearchAction',
              target: '/shop?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
    </>
  );
};

export default Index;
