import { Tag, Clock, TrendingDown, ShoppingBag, Percent, Gift, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import ProductCard from "@/components/product/ProductCard";
import { useProducts } from "@/contexts/ProductContext";

const exclusiveDeals = [
  {
    id: 1,
    title: "Weekend Flash Sale",
    discount: "30% OFF",
    description: "All fresh fruits and vegetables",
    endTime: "Ends Sunday 11:59 PM",
    color: "bg-gradient-to-r from-orange-500 to-red-500",
    icon: Zap
  },
  {
    id: 2,
    title: "Dairy Delight",
    discount: "Buy 2 Get 1 FREE",
    description: "Selected dairy products",
    endTime: "Limited time offer",
    color: "bg-gradient-to-r from-blue-500 to-indigo-500",
    icon: Gift
  },
  {
    id: 3,
    title: "Bulk Buy Special",
    discount: "25% OFF",
    description: "Orders above RWF 50,000",
    endTime: "Valid all week",
    color: "bg-gradient-to-r from-green-500 to-emerald-500",
    icon: ShoppingBag
  }
];

export default function Deals() {
  const { products } = useProducts();
  const dealProducts = products.slice(0, 8); // Show first 8 products as deals

  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
          <Tag className="h-4 w-4" />
          <span className="text-sm font-semibold uppercase tracking-wide">Exclusive Deals</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
          Amazing <span className="text-primary">Savings</span> Await
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Don't miss out on our exclusive offers! Fresh products at unbeatable prices.
        </p>
      </div>

      {/* Featured Deals */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Featured Offers</h2>
          <Badge variant="secondary" className="hidden sm:inline-flex">
            <Clock className="h-3 w-3 mr-1" />
            Limited Time
          </Badge>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {exclusiveDeals.map((deal) => (
            <Card key={deal.id} className={`relative overflow-hidden ${deal.color} text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
              <CardContent className="p-6 sm:p-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <deal.icon className="h-10 w-10 sm:h-12 sm:w-12 mb-4 opacity-90" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{deal.title}</h3>
                  <div className="text-3xl sm:text-4xl font-bold mb-3">{deal.discount}</div>
                  <p className="text-white/90 mb-4 text-sm sm:text-base">{deal.description}</p>
                  <div className="flex items-center gap-2 text-xs sm:text-sm opacity-90">
                    <Clock className="h-4 w-4" />
                    <span>{deal.endTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Daily Deals */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Today's Best Deals</h2>
            <p className="text-muted-foreground text-sm sm:text-base">Fresh products at special prices</p>
          </div>
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link to="/shop">View All</Link>
          </Button>
        </div>
        
        {/* Mobile horizontal scroll */}
        <div className="block sm:hidden overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max">
            {dealProducts.map((product) => (
              <div key={product.id} className="w-64 flex-shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dealProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Button asChild className="w-full sm:w-auto">
            <Link to="/shop">View All Deals</Link>
          </Button>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl sm:rounded-3xl p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">How to Save More</h2>
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Percent className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h3 className="font-bold text-lg sm:text-xl mb-2">1. Browse Deals</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Check our exclusive deals page regularly for the latest offers and discounts
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h3 className="font-bold text-lg sm:text-xl mb-2">2. Add to Cart</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Select your favorite products and add them to your cart to enjoy special prices
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h3 className="font-bold text-lg sm:text-xl mb-2">3. Save Big</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Complete your purchase and enjoy amazing savings on quality products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
