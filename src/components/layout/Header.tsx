import { Search, ShoppingCart, Menu, Heart, User, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import MobileMenu from "./MobileMenu";
import { useState, useEffect } from "react";
import { categories } from "@/data/inzovu";

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
    <>
      {/* Marquee Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-3 text-sm font-medium overflow-hidden relative">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-8">🎉 New to Inzovu Market? Use code NEWCUSTOMER2025 and get 250 RWF discount on orders above 1000 RWF! 🚚💨</span>
          <span className="mx-8">🎉 New to Inzovu Market? Use code NEWCUSTOMER2025 and get 250 RWF discount on orders above 1000 RWF! 🚚💨</span>
          <span className="mx-8">🎉 New to Inzovu Market? Use code NEWCUSTOMER2025 and get 250 RWF discount on orders above 1000 RWF! 🚚💨</span>
          <span className="mx-8">🎉 New to Inzovu Market? Use code NEWCUSTOMER2025 and get 250 RWF discount on orders above 1000 RWF! 🚚💨</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-4">
          {/* Top Navigation Bar */}
          <div className="flex items-center justify-between h-12 text-xs text-muted-foreground border-b border-border/50">
            <div className="flex items-center gap-6">
              <span>FRUITS | VEG | DAIRY & EGGS | BAKERY | PANTRY | DELI | NEW IN |</span>
            </div>
            <div className="flex items-center gap-4">
              <span>My Account</span>
              <span>My Cart</span>
              <span>RWF 0</span>
            </div>
          </div>

          {/* Main Header */}
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left side - Logo centered on mobile */}
            <div className="flex items-center gap-2 md:gap-4">
              <MobileMenu />
              <span className="hidden md:inline text-xs text-muted-foreground font-medium tracking-wider">EST. 2024</span>
            </div>
            
            {/* Logo */}
            <Link to="/" className="flex flex-col items-start group">
              <span className="font-display text-2xl md:text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors">INZOVU</span>
              <span className="text-xs text-accent font-semibold -mt-1 tracking-wider">Food Market</span>
            </Link>

            {/* Right side - Actions */}
            <div className="flex items-center gap-2 md:gap-6">
              {/* Center Search */}
              <div className="flex-1 max-w-lg mx-8">
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Search for products..."
                    className="w-full h-11 pr-20 bg-muted/30 border-muted-foreground/20 focus:bg-background transition-all focus:ring-2 focus:ring-primary/20"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        const query = (e.target as HTMLInputElement).value;
                        window.location.href = `/shop?q=${encodeURIComponent(query)}`;
                      }
                    }}
                  />
                  <Button size="sm" className="absolute right-1 top-1 btn-hero h-9 px-4">
                    Search
                  </Button>
                </div>
              </div>

              {/* Mobile Search Icon */}
              <Button variant="ghost" size="icon" className="lg:hidden h-10 w-10 hover:bg-muted/50 rounded-full">
                <Search className="h-5 w-5" />
              </Button>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center gap-3">
                <Button variant="ghost" size="icon" className="hover:bg-muted/50 rounded-full h-10 w-10">
                  <Heart className="h-5 w-5" />
                </Button>
                
                <div className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-lg transition-colors cursor-pointer">
                  <User className="h-5 w-5" />
                  <div className="flex flex-col text-xs">
                    <span className="font-medium">My Account</span>
                    <span className="text-muted-foreground">Log In</span>
                  </div>
                </div>
              </div>

              {/* Cart - Always visible */}
              <Link
                to="/cart"
                className="relative p-2 md:p-3 hover:bg-muted/50 rounded-full md:rounded-lg transition-colors flex items-center gap-2 touch-manipulation"
              >
                <ShoppingCart className="h-5 w-5" />
                <div className="hidden lg:flex flex-col text-xs">
                  <span className="font-medium">My Cart</span>
                  <span className="text-primary font-semibold">RWF 0</span>
                </div>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 md:h-6 md:w-6 flex items-center justify-center font-bold animate-pulse">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Navigation Categories */}
          <div className="hidden lg:flex items-center justify-between py-4 border-t border-border/50">
            <div className="flex items-center gap-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="text-sm flex items-center gap-2 h-10 px-4 bg-muted/30 border-muted-foreground/20 hover:bg-muted/50">
                    All Categories
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 p-2" align="start">
                  {categories.map((category) => (
                    <DropdownMenuItem key={category.slug} asChild>
                      <Link
                        to={`/category/${category.slug}`}
                        className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-muted rounded-md cursor-pointer"
                      >
                        <img 
                          src={category.image} 
                          alt={category.title}
                          className="w-8 h-8 rounded object-cover"
                        />
                        <span className="font-medium">{category.title}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem asChild>
                    <Link
                      to="/shop"
                      className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-muted rounded-md cursor-pointer border-t border-border/50 mt-2 pt-3"
                    >
                      <span className="font-medium text-primary">View All Products</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <nav className="flex items-center gap-8">
              {mainCategories.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                    location.pathname === item.href
                      ? "text-primary font-semibold"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </Link>
              ))}
              <span className="text-muted-foreground">|</span>
              {additionalMenus.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                    location.pathname === item.href
                      ? "text-primary font-semibold"
                      : "text-foreground/70"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            <Button className="btn-hero text-sm h-10 px-6 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70">
              🎁 Exclusive Deals !!
            </Button>
          </div>
        </div>

        <MobileMenu />
      </header>
    </>
  );
}
