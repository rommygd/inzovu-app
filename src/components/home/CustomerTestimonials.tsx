import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Impressed by the quality of fresh foods and the efficiency of delivery. The products are excellent.",
    location: "Kigali, Rwanda"
  },
  {
    id: 2,
    name: "James Uwimana",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Outstanding service and incredibly fresh vegetables. Inzovu Market has become my go-to choice for groceries.",
    location: "Kigali, Rwanda"
  },
  {
    id: 3,
    name: "Marie Claire",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Great experience at Inzovu AK. Their staff were extremely welcoming with great service. Highly recommended!",
    location: "Kigali, Rwanda"
  },
  {
    id: 4,
    name: "David Nzeyimana",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Fast delivery, fresh food and reasonable prices. Fantastic budget and convenience. Thanks for the excellent service.",
    location: "Kigali, Rwanda"
  }
];

export default function CustomerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            What our customers say about Inzovu
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from our satisfied customers about their experience with fresh, quality products and exceptional service.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-3 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl border border-border/50 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 lg:hover:-translate-y-2 mx-2">
                    <div className="flex flex-col items-center text-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full p-1">
                          <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-base sm:text-lg lg:text-xl text-foreground group-hover:text-primary transition-colors">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-2">{testimonial.location}</p>
                        <div className="flex items-center justify-center gap-1 mb-3">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed italic text-center">
                      "{testimonial.text}"
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors touch-manipulation ${
                  index === currentIndex ? 'bg-primary' : 'bg-border'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
