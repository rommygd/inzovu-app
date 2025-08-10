import { useParams, Link } from "react-router-dom";
import { products } from "@/data/inzovu";
import { Button } from "@/components/ui/button";

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const addToCart = () => {
    if (!product) return;
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const idx = cart.findIndex((c: any) => c.id === product.id);
    if (idx > -1) cart[idx].qty += 1; else cart.push({ id: product.id, qty: 1, product });
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cart:updated"));
  };

  if (!product) {
    return (
      <div className="container mx-auto py-12">
        <h1 className="text-2xl font-semibold mb-2">Product not found</h1>
        <Link to="/shop" className="story-link">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 grid md:grid-cols-2 gap-8">
      <img src={product.image} alt={`${product.name} - Inzovu Market product image`} className="w-full h-80 object-cover rounded-lg" loading="lazy" />

      <div>
        <h1 className="font-display text-3xl font-semibold">{product.name}</h1>
        <p className="text-muted-foreground mt-2">{product.description}</p>
        <div className="mt-4 text-2xl font-semibold">${product.price.toFixed(2)} <span className="text-sm text-muted-foreground">{product.unit || ""}</span></div>

        <div className="mt-6 flex gap-3">
          <Button onClick={addToCart}>Add to Cart</Button>
          <Button variant="secondary" asChild>
            <Link to="/cart">Go to Cart</Link>
          </Button>
        </div>

        <div className="mt-8">
          <h3 className="font-medium mb-2">Why you'll love it</h3>
          <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
            <li>Quality checked by Inzovu Market</li>
            <li>Fresh and flavorful</li>
            <li>Perfect for everyday meals</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
