import Hero from "@/components/home/Hero";
import CustomerTestimonials from "@/components/home/CustomerTestimonials";
import PromotionalCards from "@/components/home/PromotionalCards";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { categories } from "@/data/inzovu";
import { useProducts } from "@/contexts/ProductContext";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const { products } = useProducts();

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
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Shop by Category
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore our wide range of fresh categories, from farm-fresh produce to pantry essentials.
              </p>
            </div>

            <Carousel
              opts={{
                align: "start",
                slidesToScroll: 1,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-3">
                {categoryFeatures.map((category) => (
                  <CarouselItem key={category.slug} className="pl-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <Link to={`/category/${category.slug}`} className="group block">
                      <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                        <div className="aspect-square rounded-xl overflow-hidden mb-3">
                          <img
                            src={category.image}
                            alt={category.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="font-semibold text-center text-sm sm:text-base">{category.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground text-center mt-1">{category.description}</p>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </section>

        <FeaturedProducts />
        <WhyChooseUs />
        <PromotionalCards />
        <CustomerTestimonials />
      </main>

      {/* JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Inzovu Market",
            url: "/",
            potentialAction: {
              "@type": "SearchAction",
              target: "/shop?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </>
  );
};

export default Index;
