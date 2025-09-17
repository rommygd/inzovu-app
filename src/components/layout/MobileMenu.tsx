import { NavLink, Link } from "react-router-dom";
import { Menu, Search, User, Heart, ShoppingCart, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { categories } from "@/data/inzovu";
import { useState, useEffect } from "react";

export default function MobileMenu() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.reduce((sum: number, item: any) => sum + item.qty, 0));
    };

    updateCartCount();
    window.addEventListener("cart:updated", updateCartCount);
    return () => window.removeEventListener("cart:updated", updateCartCount);
  }, []);

  const mainCategories = [
    { name: "FRUITS", href: "/category/fruits" },
    { name: "VEG", href: "/category/vegetables" },
    { name: "DAIRY & EGGS", href: "/category/dairy" },
    { name: "BAKERY", href: "/category/bakery" },
    { name: "PANTRY", href: "/category/pantry" },
  ];

  const additionalMenus = [
    { name: "DELI", href: "/shop" },
    { name: "NEW IN", href: "/shop" },
    { name: "GOOD STUFF", href: "/shop" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="lg:hidden h-10 w-10 hover:bg-muted/50 rounded-full touch-manipulation" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-sm p-0 bg-background/98 backdrop-blur-md">
        <div className="flex flex-col h-full">
          {/* Stunning Header */}
          <SheetHeader className="px-6 py-8 border-b-0 bg-gradient-to-br from-primary via-primary/90 to-accent shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-50"></div>
            <SheetTitle className="text-left flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/30">
                <span className="text-white font-bold text-2xl drop-shadow-md">I</span>
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-white block drop-shadow-md">INZOVU</span>
                <span className="text-base text-white/90 font-semibold flex items-center gap-1">
                  <span>🥬</span> Fresh Market
                </span>
              </div>
            </SheetTitle>
          </SheetHeader>

          {/* Premium Mobile Search */}
          <div className="px-6 py-6 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-b border-primary/10">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-primary" />
              <Input
                type="search"
                placeholder="🔍 Search fresh fruits, vegetables..."
                className="pl-14 h-14 text-base bg-white/80 backdrop-blur-sm border-2 border-primary/20 focus:border-primary focus:bg-white rounded-2xl transition-all shadow-lg hover:shadow-xl font-medium placeholder:text-muted-foreground/70"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const query = (e.target as HTMLInputElement).value;
                    window.location.href = `/shop?q=${encodeURIComponent(query)}`;
                  }
                }}
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <nav className="px-6 py-4 space-y-2">
              {/* Stunning Quick Actions */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <Link to="/cart" className="group flex flex-col items-center gap-3 p-5 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/15 to-primary/10 hover:from-primary/30 hover:via-primary/25 hover:to-primary/15 transition-all duration-500 border-2 border-primary/20 hover:border-primary shadow-lg hover:shadow-2xl hover:shadow-primary/20 touch-manipulation active:scale-95 transform hover:-translate-y-1">
                  <div className="relative w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <ShoppingCart className="h-7 w-7 text-primary" />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-bounce shadow-lg">
                        {cartCount > 9 ? '9+' : cartCount}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-bold text-primary group-hover:text-primary/80">🛒 Cart</span>
                </Link>
                
                <div className="group flex flex-col items-center gap-3 p-5 rounded-3xl bg-gradient-to-br from-accent/20 via-accent/15 to-accent/10 hover:from-accent/30 hover:via-accent/25 hover:to-accent/15 transition-all duration-500 border-2 border-accent/20 hover:border-accent shadow-lg hover:shadow-2xl hover:shadow-accent/20 touch-manipulation active:scale-95 cursor-pointer transform hover:-translate-y-1">
                  <div className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Heart className="h-7 w-7 text-accent" />
                  </div>
                  <span className="text-sm font-bold text-accent group-hover:text-accent/80">💝 Wishlist</span>
                </div>
                
                <div className="group flex flex-col items-center gap-3 p-5 rounded-3xl bg-gradient-to-br from-muted/50 via-muted/40 to-muted/30 hover:from-muted/70 hover:via-muted/60 hover:to-muted/50 transition-all duration-500 border-2 border-muted-foreground/20 hover:border-muted-foreground/30 shadow-lg hover:shadow-2xl touch-manipulation active:scale-95 cursor-pointer transform hover:-translate-y-1">
                  <div className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <User className="h-7 w-7 text-foreground" />
                  </div>
                  <span className="text-sm font-bold text-foreground group-hover:text-foreground/80">👤 Account</span>
                </div>
              </div>

              {/* Enhanced Categories */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="categories" className="border-none">
                  <AccordionTrigger className="text-xl font-bold hover:no-underline py-4 px-0 text-primary hover:text-primary/80">
                    🍎 Shop Categories
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 pt-2">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        to={`/category/${category.slug}`}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-muted/30 to-muted/10 hover:from-muted/50 hover:to-muted/30 transition-all duration-300 border border-muted-foreground/10 hover:border-muted-foreground/20 touch-manipulation active:scale-98"
                      >
                        <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                          <img 
                            src={category.image} 
                            alt={category.title}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1">
                          <span className="font-semibold text-base text-foreground">{category.title}</span>
                          <p className="text-sm text-muted-foreground">Fresh & Premium</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Enhanced Main Navigation */}
              <div className="space-y-3 pt-6">
                <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  🛒 Quick Shop
                </h3>
                {mainCategories.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-background to-muted/20 hover:from-primary/5 hover:to-primary/10 transition-all duration-300 border border-muted-foreground/10 hover:border-primary/20 touch-manipulation active:scale-98"
                  >
                    <span className="font-semibold text-base">{item.name}</span>
                    <ChevronRight className="h-5 w-5 text-primary transition-transform hover:translate-x-1" />
                  </Link>
                ))}
              </div>

              {/* Enhanced Additional Menus */}
              <div className="space-y-3 pt-6 border-t border-border/30">
                <h3 className="text-lg font-bold mb-4 text-accent flex items-center gap-2">
                  ⭐ Discover More
                </h3>
                {additionalMenus.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-background to-accent/5 hover:from-accent/10 hover:to-accent/15 transition-all duration-300 border border-accent/10 hover:border-accent/20 touch-manipulation active:scale-98"
                  >
                    <span className="font-semibold text-base">{item.name}</span>
                    <ChevronRight className="h-5 w-5 text-accent transition-transform hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          {/* Enhanced Footer */}
          <div className="p-6 border-t bg-gradient-to-r from-primary/5 to-accent/5 mt-auto">
            <div className="space-y-4">
              <Button className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl touch-manipulation active:scale-95">
                🎁 Exclusive Deals & Offers!
              </Button>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span>📞 Support</span>
                <span>•</span>
                <span>🚚 Fast Delivery</span>
                <span>•</span>
                <span>💯 Fresh</span>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
