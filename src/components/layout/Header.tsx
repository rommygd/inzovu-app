import { Search, ShoppingCart, Menu, Heart, User, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import { useState, useEffect } from "react";

export default function Header() {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.reduce((sum: number, item: any) => sum + item.qty, 0));
    };

    updateCartCount();
    window.addEventListener("cart:updated", updateCartCount);
    return () => window.removeEventListener("cart:updated", updateCartCount);
  }, []);

  const categories = [
    { name: "FRUITS", href: "/category/fruits" },
    { name: "VEG", href: "/category/vegetables" },
    { name: "DAIRY & EGGS", href: "/category/dairy" },
    { name: "BAKERY", href: "/category/bakery" },
    { name: "PANTRY", href: "/category/pantry" },
    { name: "DELI", href: "/shop" },
    { name: "NEW IN", href: "/shop" },
    { name: "GOOD STUFF", href: "/shop" },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
        🎉 New to Inzovu Market? Use code NEWCUSTOMER2025 and get 250 RWF discount on orders above 1000 RWF! 🚚💨
      </div>

      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="container mx-auto px-4">
          {/* Top Header */}
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground font-medium">EST. 2024</span>
            </div>
            
            <Link to="/" className="flex flex-col items-center">
              <span className="font-display text-2xl font-bold text-primary">INZOVU</span>
              <span className="text-sm text-accent font-medium -mt-1">Market</span>
            </Link>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search"
                  className="pl-9 w-64 bg-muted/50"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      const query = (e.target as HTMLInputElement).value;
                      window.location.href = `/shop?q=${encodeURIComponent(query)}`;
                    }
                  }}
                />
                <Button size="sm" className="ml-2 btn-hero">Search</Button>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <Heart className="h-5 w-5" />
                </Button>
                
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <User className="h-5 w-5" />
                  <span className="ml-1 text-sm hidden lg:block">My Account<br/>Log In</span>
                </Button>

                <Link
                  to="/cart"
                  className="relative p-2 hover:bg-accent rounded-lg transition-colors flex items-center gap-1"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <div className="hidden md:flex flex-col text-xs">
                    <span>My Cart</span>
                    <span className="text-primary font-semibold">RWF 0</span>
                  </div>
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>

                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setShowMobileMenu(true)}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Categories */}
          <div className="hidden md:flex items-center justify-between py-4 border-t">
            <div className="flex items-center gap-1">
              <Button variant="outline" className="text-sm flex items-center gap-1">
                All Categories
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
            
            <nav className="flex items-center gap-8">
              {categories.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.href
                      ? "text-primary font-semibold"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <Button className="btn-hero text-sm">
              🎁 Exclusive Deals !!
            </Button>
          </div>
        </div>

        <MobileMenu />
      </header>
    </>
  );
}
