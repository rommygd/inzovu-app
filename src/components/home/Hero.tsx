import heroBackground from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section 
      className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Quality Produce <br className="hidden sm:block"/>
            <span className="text-accent block sm:inline"> Unbeatable Prices</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed px-4 sm:px-0">
            Craving second to none delicacies served hot and fast? How about your fruits and vegetables plated in the bloom of their freshness?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="btn-hero text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 bg-primary/90 hover:bg-primary w-full sm:w-auto rounded-full touch-manipulation active:scale-95 transition-all duration-300">
              <Link to="/shop">🛒 SHOP NOW</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 w-full sm:w-auto rounded-full touch-manipulation active:scale-95 transition-all duration-300">
              <Link to="/category/fruits">🍎 FRESH FRUITS</Link>
            </Button>
          </div>

          {/* Mobile-friendly trust indicators */}
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base opacity-90">
            <div className="flex items-center gap-2">
              <span>🚚</span>
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🌿</span>
              <span>100% Fresh</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⚡</span>
              <span>Same Day</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}