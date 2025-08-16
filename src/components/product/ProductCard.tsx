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
    <div className="group bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted/20">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">{product.name}</h3>
        </Link>
        
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-xl font-bold text-primary">RWF {(product.price * 1000).toFixed(0)}</span>
            <div className="text-sm text-muted-foreground">per {product.unit || 'piece'}</div>
          </div>
        </div>
        
        <Button
          onClick={addToCart}
          className="w-full btn-hero h-10 text-sm font-medium"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
