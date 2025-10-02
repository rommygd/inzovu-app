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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {promotionalOffers.map((offer) => (
            <Link
              key={offer.id}
              to="/shop"
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden hover-scale card-elevated"
            >
              <div className={`absolute inset-0 ${offer.bgColor}`}>
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className={`absolute bottom-6 left-6 right-6 ${offer.textColor}`}>
                <h3 className="font-display text-lg font-bold mb-1 leading-tight">
                  {offer.title}
                </h3>
                <p className="text-sm opacity-90">
                  {offer.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
