import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { categories } from "@/data/inzovu";

export default function MobileMenu() {
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-primary font-medium" : "text-foreground/80";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="md:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <SheetHeader>
          <SheetTitle>Inzovu Market</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 space-y-4">
          <NavLink to="/shop" end className={getNavCls}>
            Shop All
          </NavLink>
          <div className="pt-2">
            <div className="text-sm text-muted-foreground mb-2">Categories</div>
            <ul className="grid grid-cols-2 gap-2">
              {categories.map((c) => (
                <li key={c.slug}>
                  <NavLink to={`/category/${c.slug}`} className="block rounded-md border p-2 hover:bg-muted/50">
                    <div className="text-sm font-medium">{c.title}</div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-2 space-x-4">
            <NavLink to="/cart" className={getNavCls}>Cart</NavLink>
            <NavLink to="/account" className={getNavCls}>Account</NavLink>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
