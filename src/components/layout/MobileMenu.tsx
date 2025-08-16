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
        <Button size="icon" variant="ghost" className="lg:hidden" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-sm p-0">
        <div className="flex flex-col h-full">
          <SheetHeader className="px-6 py-4 border-b">
            <SheetTitle className="text-left">
              <span className="font-display text-2xl font-bold text-primary">INZOVU</span>
              <span className="text-sm text-accent font-semibold ml-1">Food Market</span>
            </SheetTitle>
          </SheetHeader>

          {/* Mobile Search */}
          <div className="px-6 py-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-9"
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
              {/* Quick Actions */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <Link to="/cart" className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-medium">Cart</span>
                </Link>
                
                <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <Heart className="h-5 w-5" />
                  <span className="text-xs font-medium">Wishlist</span>
                </div>
                
                <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <User className="h-5 w-5" />
                  <span className="text-xs font-medium">Account</span>
                </div>
              </div>

              {/* Categories */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="categories" className="border-none">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline py-3 px-0">
                    Categories
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2 pt-2">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        to={`/category/${category.slug}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <img 
                          src={category.image} 
                          alt={category.title}
                          className="w-10 h-10 rounded object-cover"
                        />
                        <span className="font-medium">{category.title}</span>
                        <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground" />
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Main Navigation */}
              <div className="space-y-2 pt-4">
                <h3 className="text-lg font-semibold mb-3">Shop</h3>
                {mainCategories.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>

              {/* Additional Menus */}
              <div className="space-y-2 pt-4 border-t border-border/50">
                <h3 className="text-lg font-semibold mb-3">More</h3>
                {additionalMenus.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          {/* Footer */}
          <div className="p-6 border-t bg-muted/20">
            <Button className="w-full btn-hero">
              🎁 Exclusive Deals !!
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
