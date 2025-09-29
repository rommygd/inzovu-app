import { Link } from "react-router-dom";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/inzovu";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <Star className="h-5 w-5 sm:h-6 sm:w-6 text-accent fill-accent" />
            <span className="text-accent font-semibold uppercase tracking-wider text-sm sm:text-base">Featured Products</span>
            <Star className="h-5 w-5 sm:h-6 sm:w-6 text-accent fill-accent" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Fresh Picks for You
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Handpicked premium quality fruits and vegetables, sourced directly from local farms for maximum freshness and flavor.
          </p>
        </div>

        {/* Products Grid */}
        {/* Mobile Carousel */}
        <div className="block sm:hidden mb-8">
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {Array.from({ length: Math.ceil(featuredProducts.length / 3) }).map((_, slideIndex) => (
                <CarouselItem key={slideIndex} className="pl-2 basis-full">
                  <div className="grid grid-cols-3 gap-3">
                    {featuredProducts
                      .slice(slideIndex * 3, slideIndex * 3 + 3)
                      .map((product) => (
                        <div key={product.id} className="group">
                          <ProductCard product={product} />
                        </div>
                      ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/shop">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto touch-manipulation">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}