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
      <SheetContent side="left" className="w-full max-w-sm p-0 bg-background/98 backdrop-blur-xl border-r-2 border-primary/10 shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Elegant Header */}
          <SheetHeader className="px-6 py-8 border-b-0 bg-gradient-to-br from-primary via-primary/95 to-accent shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-accent/30 opacity-60"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
            <SheetTitle className="text-left flex items-center gap-4 relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-xl border border-white/40 ring-4 ring-white/20">
                <span className="text-white font-bold text-3xl drop-shadow-lg">I</span>
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-white block drop-shadow-lg tracking-tight">INZOVU</span>
                <span className="text-base text-white/95 font-semibold flex items-center gap-2 mt-1">
                  <span>🌿</span> Fresh Market
                </span>
              </div>
            </SheetTitle>
          </SheetHeader>

          {/* Enhanced Mobile Search */}
          <div className="px-6 py-6 bg-gradient-to-r from-primary/8 via-accent/8 to-primary/8 border-b border-border/30">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-primary/70" />
              <Input
                type="search"
                placeholder="🔍 Search fresh products..."
                className="pl-14 h-14 text-base bg-white/90 backdrop-blur-sm border-2 border-primary/20 focus:border-primary focus:bg-white rounded-2xl transition-all shadow-md hover:shadow-lg font-medium placeholder:text-muted-foreground/70 focus:ring-4 focus:ring-primary/10"
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
            <nav className="px-6 py-6 space-y-6">
              {/* Premium Quick Actions */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <Link to="/cart" className="group flex flex-col items-center gap-3 p-5 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5 hover:from-primary/25 hover:via-primary/20 hover:to-primary/10 transition-all duration-500 border-2 border-primary/20 hover:border-primary/30 shadow-lg hover:shadow-xl hover:shadow-primary/20 touch-manipulation active:scale-95 transform hover:-translate-y-2">
                  <div className="relative w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-primary/10">
                    <ShoppingCart className="h-7 w-7 text-primary" />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-bounce shadow-lg border-2 border-white">
                        {cartCount > 9 ? '9+' : cartCount}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-bold text-primary group-hover:text-primary/90">🛒 Cart</span>
                </Link>
                
                <div className="group flex flex-col items-center gap-3 p-5 rounded-3xl bg-gradient-to-br from-accent/15 via-accent/10 to-accent/5 hover:from-accent/25 hover:via-accent/20 hover:to-accent/10 transition-all duration-500 border-2 border-accent/20 hover:border-accent/30 shadow-lg hover:shadow-xl hover:shadow-accent/20 touch-manipulation active:scale-95 cursor-pointer transform hover:-translate-y-2">
                  <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-accent/10">
                    <Heart className="h-7 w-7 text-accent" />
                  </div>
                  <span className="text-sm font-bold text-accent group-hover:text-accent/90">💝 Wishlist</span>
                </div>
                
                <div className="group flex flex-col items-center gap-3 p-5 rounded-3xl bg-gradient-to-br from-muted/60 via-muted/40 to-muted/20 hover:from-muted/80 hover:via-muted/60 hover:to-muted/40 transition-all duration-500 border-2 border-muted-foreground/20 hover:border-muted-foreground/30 shadow-lg hover:shadow-xl touch-manipulation active:scale-95 cursor-pointer transform hover:-translate-y-2">
                  <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-muted-foreground/10">
                    <User className="h-7 w-7 text-foreground" />
                  </div>
                  <span className="text-sm font-bold text-foreground group-hover:text-foreground/90">👤 Account</span>
                </div>
              </div>

              {/* Enhanced Categories */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="categories" className="border-none">
                  <AccordionTrigger className="text-xl font-bold hover:no-underline py-4 px-0 text-primary hover:text-primary/80 flex items-center gap-2">
                    <span className="text-2xl">🛍️</span>
                    <span>Shop Categories</span>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 pt-2">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        to={`/category/${category.slug}`}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-background to-muted/20 hover:from-primary/5 hover:to-primary/10 transition-all duration-300 border border-border hover:border-primary/20 shadow-sm hover:shadow-md touch-manipulation active:scale-98 group"
                      >
                        <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
                          <img 
                            src={category.image} 
                            alt={category.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1">
                          <span className="font-semibold text-base text-foreground group-hover:text-primary transition-colors">{category.title}</span>
                          <p className="text-sm text-muted-foreground group-hover:text-primary/70 transition-colors">Fresh & Premium</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1 group-hover:text-primary/80" />
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Enhanced Main Navigation */}
              <div className="space-y-3 pt-6">
                <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <span className="text-xl">🛒</span>
                  <span>Quick Shop</span>
                </h3>
                {mainCategories.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-background to-muted/15 hover:from-primary/8 hover:to-primary/12 transition-all duration-300 border border-border hover:border-primary/25 shadow-sm hover:shadow-md touch-manipulation active:scale-98 group"
                  >
                    <span className="font-semibold text-base group-hover:text-primary transition-colors">{item.name}</span>
                    <ChevronRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1 group-hover:text-primary/80" />
                  </Link>
                ))}
              </div>

              {/* Enhanced Additional Menus */}
              <div className="space-y-3 pt-6 border-t border-border/40">
                <h3 className="text-lg font-bold mb-4 text-accent flex items-center gap-2">
                  <span className="text-xl">⭐</span>
                  <span>Discover More</span>
                </h3>
                {additionalMenus.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-background to-accent/8 hover:from-accent/12 hover:to-accent/16 transition-all duration-300 border border-accent/15 hover:border-accent/25 shadow-sm hover:shadow-md touch-manipulation active:scale-98 group"
                  >
                    <span className="font-semibold text-base group-hover:text-accent transition-colors">{item.name}</span>
                    <ChevronRight className="h-5 w-5 text-accent transition-transform group-hover:translate-x-1 group-hover:text-accent/80" />
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          {/* Enhanced Footer */}
          <div className="p-6 border-t bg-gradient-to-r from-primary/8 via-background to-accent/8 mt-auto">
            <div className="space-y-4">
              <Button className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/80 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl touch-manipulation active:scale-95 border-2 border-primary/20 hover:border-primary/30">
                🎁 Exclusive Deals & Offers!
              </Button>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">📞 Support</span>
                <span>•</span>
                <span className="flex items-center gap-1">🚚 Fast Delivery</span>
                <span>•</span>
                <span className="flex items-center gap-1">💯 Fresh</span>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
