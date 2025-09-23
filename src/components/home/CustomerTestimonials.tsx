import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            What our customers say about Inzovu
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm border border-border mx-2 sm:mx-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
                        loading="lazy"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-base sm:text-lg">{testimonial.name}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.location}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons - Hidden on mobile */}
          <Button
            onClick={prevTestimonial}
            variant="outline"
            size="icon"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 bg-background/90 backdrop-blur-sm border-border hover:bg-muted h-10 w-10 lg:h-12 lg:w-12 touch-manipulation"
          >
            <ChevronLeft className="h-4 w-4 lg:h-5 lg:w-5" />
          </Button>

          <Button
            onClick={nextTestimonial}
            variant="outline"
            size="icon"
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 bg-background/90 backdrop-blur-sm border-border hover:bg-muted h-10 w-10 lg:h-12 lg:w-12 touch-manipulation"
          >
            <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5" />
          </Button>

          {/* Dots indicator - Mobile friendly */}
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

          {/* Mobile navigation buttons */}
          <div className="flex sm:hidden justify-center gap-4 mt-4">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="sm"
              className="bg-background/90 backdrop-blur-sm border-border hover:bg-muted touch-manipulation"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="sm"
              className="bg-background/90 backdrop-blur-sm border-border hover:bg-muted touch-manipulation"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}