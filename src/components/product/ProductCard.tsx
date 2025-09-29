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
    <div className="group bg-white rounded-2xl shadow-md border border-border/50 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm bg-white/95 touch-manipulation active:scale-95">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-muted/30 to-muted/10 relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </Link>
      
      <div className="p-4 sm:p-5 space-y-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-base sm:text-lg lg:text-xl mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight">{product.name}</h3>
        </Link>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-baseline gap-1">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">RWF {(product.price * 1000).toFixed(0)}</span>
            </div>
            <div className="text-sm text-muted-foreground bg-muted/30 px-2 py-1 rounded-full inline-block">per {product.unit || 'piece'}</div>
          </div>
        </div>
        
        <Button
          onClick={addToCart}
          className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-semibold h-11 sm:h-12 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn touch-manipulation active:scale-95"
        >
          <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover/btn:rotate-90 transition-transform duration-300" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
