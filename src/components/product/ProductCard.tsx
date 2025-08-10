import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/inzovu";

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const idx = cart.findIndex((c: any) => c.id === product.id);
    if (idx > -1) cart[idx].qty += 1; else cart.push({ id: product.id, qty: 1, product });
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cart:updated"));
  };

  return (
    <Card className="card-elevated">
      <CardHeader className="p-0">
        <Link to={`/product/${product.id}`} aria-label={product.name}>
          <img src={product.image} alt={`${product.name} - Inzovu Market product image`} className="w-full h-48 object-cover rounded-t-lg" loading="lazy" />
        </Link>
      </CardHeader>
      <CardContent className="pt-4">
        <Link to={`/product/${product.id}`} className="block hover-scale">
          <h3 className="font-medium leading-snug">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-1">{product.unit || ""}</p>
        <div className="mt-2 font-semibold">${product.price.toFixed(2)}</div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button className="w-full" onClick={addToCart}>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
