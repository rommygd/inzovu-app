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
    <section className="py-8 sm:py-12 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-foreground">
            Shop by Category
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Browse our curated collections
          </p>
        </div>
        
        {/* Mobile: Horizontal scroll with compact cards */}
        <div className="block sm:hidden overflow-x-auto pb-3 scrollbar-hide">
          <div className="flex gap-3 px-1">
            {promotionalOffers.map((offer) => (
              <Link
                key={offer.id}
                to="/shop"
                className="group relative flex-shrink-0 w-36 aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className={`absolute inset-0 ${offer.bgColor}`}>
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                <div className={`absolute bottom-0 left-0 right-0 p-3 ${offer.textColor}`}>
                  <h3 className="font-display text-xs font-bold mb-1 leading-tight drop-shadow-lg line-clamp-2">
                    {offer.title}
                  </h3>
                  <p className="text-[10px] opacity-90 drop-shadow-md line-clamp-1">
                    {offer.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Tablet & Desktop: Grid layout */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {promotionalOffers.map((offer) => (
            <Link
              key={offer.id}
              to="/shop"
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden hover-scale shadow-lg hover:shadow-2xl transition-all duration-300"
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
              <div className={`absolute bottom-0 left-0 right-0 p-4 sm:p-5 ${offer.textColor}`}>
                <h3 className="font-display text-base sm:text-lg font-bold mb-1 sm:mb-2 leading-tight drop-shadow-lg">
                  {offer.title}
                </h3>
                <p className="text-xs sm:text-sm opacity-95 drop-shadow-md mb-2">
                  {offer.subtitle}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-medium opacity-90 group-hover:opacity-100 transition-opacity">
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
