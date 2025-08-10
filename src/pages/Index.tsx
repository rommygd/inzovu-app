import Hero from "@/components/home/Hero";
import ProductCard from "@/components/product/ProductCard";
import { categories, products } from "@/data/inzovu";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      {/* SEO-friendly structure */}
      <Hero />

      <main className="container mx-auto">
        <section id="categories" className="mt-12">
          <header className="flex items-end justify-between">
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Shop by category</h2>
            <Link to="/shop" className="story-link">View all</Link>
          </header>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
            {categories.map((c) => (
              <Link
                to={`/category/${c.slug}`}
                key={c.slug}
                className="group rounded-lg overflow-hidden bg-card border hover-scale card-elevated"
                aria-label={`Shop ${c.title}`}
              >
                <img src={c.image} alt={`${c.title} category - Inzovu Market`} className="w-full h-28 object-cover" loading="lazy" />
                <div className="p-3 font-medium group-hover:text-primary transition-colors">{c.title}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <header className="flex items-end justify-between">
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Featured products</h2>
            <Link to="/shop" className="story-link">Shop all</Link>
          </header>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {products.slice(0, 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>

      {/* JSON-LD basic site schema */}
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
