import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { Product } from "@/data/inzovu";

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find((item: any) => item.id === product.id);
    
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: product.id,
        product: product,
        qty: 1
      });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cart:updated"));
  };

  return (
    <div className="group bg-gradient-to-br from-white via-white to-white/95 dark:from-gray-800 dark:to-gray-800/90 rounded-3xl shadow-lg border-2 border-border/40 overflow-hidden hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 backdrop-blur-sm touch-manipulation active:scale-95">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-muted/40 to-muted/20 relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-3 right-3 bg-accent/90 text-white text-xs font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            Fresh
          </div>
        </div>
      </Link>
      
      <div className="p-5 sm:p-6 space-y-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight min-h-[3rem]">{product.name}</h3>
        </Link>
        
        <div className="flex items-end justify-between mb-3">
          <div className="space-y-1.5">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                RWF {(product.price * 1000).toFixed(0)}
              </span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-muted-foreground bg-gradient-to-r from-muted/40 to-muted/20 px-3 py-1.5 rounded-full inline-block border border-border/30">
              per {product.unit || 'piece'}
            </div>
          </div>
        </div>
        
        <Button
          onClick={addToCart}
          className="w-full bg-gradient-to-r from-primary via-primary to-accent hover:from-primary/90 hover:via-primary/95 hover:to-accent/90 text-white font-bold h-12 sm:h-14 text-sm sm:text-base rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 group/btn touch-manipulation active:scale-95 border-2 border-primary/20"
        >
          <Plus className="h-5 w-5 sm:h-6 sm:w-6 mr-2 group-hover/btn:rotate-90 transition-transform duration-300" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
