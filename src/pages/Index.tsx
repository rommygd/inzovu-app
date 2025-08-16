import Hero from "@/components/home/Hero";
import ProductCard from "@/components/product/ProductCard";
import { categories, products } from "@/data/inzovu";
import { Link } from "react-router-dom";

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

      <main className="container mx-auto px-4">
        {/* Main Category Grid - Zucchini Style */}
        <section className="py-16">
          <div className="grid md:grid-cols-5 gap-6">
            {categoryFeatures.map((category) => (
              <Link
                key={category.slug}
                to={`/category/${category.slug}`}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-card border hover-scale card-elevated"
              >
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-display text-lg font-bold">{category.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Fruits Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Fruits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The freshest fruits straight from the farms
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.filter(p => p.categorySlug === "fruits").slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/category/fruits" className="btn-hero inline-flex items-center px-8 py-3 rounded-lg">
              Shop All Fruits
            </Link>
          </div>
        </section>

        {/* Vegetables Section */}
        <section className="py-16 bg-muted/30 -mx-4 px-4 rounded-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Vegetables</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Crisp, fresh vegetables picked at peak ripeness
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.filter(p => p.categorySlug === "vegetables").slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/category/vegetables" className="btn-hero inline-flex items-center px-8 py-3 rounded-lg">
              Shop All Vegetables
            </Link>
          </div>
        </section>

        {/* Dairy Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Dairy & Eggs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Farm-fresh dairy products and free-range eggs
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.filter(p => p.categorySlug === "dairy").slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/category/dairy" className="btn-hero inline-flex items-center px-8 py-3 rounded-lg">
              Shop All Dairy
            </Link>
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
