import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/inzovu";
import { useEffect, useMemo, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const load = () => {
      const items = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(items.reduce((sum: number, it: any) => sum + (it.qty || 1), 0));
    };
    load();
    const onUpdate = () => load();
    window.addEventListener("cart:updated", onUpdate as any);
    return () => window.removeEventListener("cart:updated", onUpdate as any);
  }, []);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (q.trim()) navigate(`/shop?q=${encodeURIComponent(q.trim())}`);
  };

  const navItems = useMemo(() => categories.slice(0, 6), []);

  const activeCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-primary" : "text-foreground/80 hover:text-foreground";

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto flex items-center justify-between py-3">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-display text-xl md:text-2xl font-semibold tracking-tight">
            Inzovu Market
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            {navItems.map((c) => (
              <NavLink key={c.slug} to={`/category/${c.slug}`} className={activeCls}>
                {c.title}
              </NavLink>
            ))}
            <NavLink to="/shop" className={activeCls}>Shop All</NavLink>
          </nav>
        </div>

        <form onSubmit={onSearch} className="hidden lg:flex items-center gap-2 w-1/2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search for fresh produce..."
              className="pl-9"
            />
          </div>
          <Button type="submit">Search</Button>
        </form>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/account" aria-label="Account">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/cart" className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              <span className="font-medium">Cart</span>
              <span className="ml-1 rounded-full bg-primary/10 text-primary px-2 py-0.5 text-xs">{cartCount}</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile search */}
      <div className="container mx-auto px-4 pb-3 lg:hidden">
        <form onSubmit={onSearch} className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products" className="pl-9" />
          </div>
          <Button type="submit">Search</Button>
        </form>
        <div className="flex gap-3 overflow-x-auto py-2">
          {navItems.map((c) => (
            <Link key={c.slug} to={`/category/${c.slug}`} className="px-3 py-1 rounded-full bg-secondary text-sm whitespace-nowrap">
              {c.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
