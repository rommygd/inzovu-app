import { Link } from "react-router-dom";

const promotionalOffers = [
  {
    id: 1,
    title: "TENDER DELIGHT",
    subtitle: "Sweet Meat, Crisp Thrill",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=400&fit=crop",
    bgColor: "bg-slate-800",
    textColor: "text-white"
  },
  {
    id: 2,
    title: "SWEET AND SAVORY", 
    subtitle: "Sweet Meat, Crisp Thrill",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=400&fit=crop",
    bgColor: "bg-orange-600",
    textColor: "text-white"
  },
  {
    id: 3,
    title: "FRESH AS YOU LIKE",
    subtitle: "Sweet Meat, Crisp Thrill",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=400&fit=crop",
    bgColor: "bg-green-600",
    textColor: "text-white"
  },
  {
    id: 4,
    title: "BAKED WITH LOVE",
    subtitle: "Sweet Meat, Crisp Thrill",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=400&fit=crop",
    bgColor: "bg-amber-600",
    textColor: "text-white"
  },
  {
    id: 5,
    title: "THE GOOD STUFF",
    subtitle: "Sweet Meat, Crisp Thrill",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=400&fit=crop",
    bgColor: "bg-blue-600",
    textColor: "text-white"
  }
];

export default function PromotionalCards() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-foreground">
            Explore Our Categories
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Discover fresh, quality products across all departments
          </p>
        </div>
        
        {/* Mobile: Stack vertically with larger cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {promotionalOffers.map((offer) => (
            <Link
              key={offer.id}
              to="/shop"
              className="group relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden hover-scale shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`absolute inset-0 ${offer.bgColor}`}>
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className={`absolute bottom-0 left-0 right-0 p-5 sm:p-6 ${offer.textColor}`}>
                <h3 className="font-display text-xl sm:text-lg lg:text-xl font-bold mb-2 leading-tight drop-shadow-lg">
                  {offer.title}
                </h3>
                <p className="text-sm sm:text-xs lg:text-sm opacity-95 drop-shadow-md">
                  {offer.subtitle}
                </p>
                <div className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                  <span>Shop Now</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
