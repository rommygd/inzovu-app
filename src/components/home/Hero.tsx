import heroBackground from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section 
      className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-white">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Quality Produce <br/>
            <span className="text-accent">Unbeatable Prices</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            craving second to none delicacies served hot and fast? How about your fruits and vegetables plated in the bloom of their freshness?
          </p>
          
          <Button asChild size="lg" className="btn-hero text-lg px-12 py-6 bg-primary/90 hover:bg-primary">
            <Link to="/shop">DISCOVER</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}