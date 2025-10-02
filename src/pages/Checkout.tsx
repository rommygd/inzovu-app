import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Checkout() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const total = cart.reduce((sum: number, it: any) => sum + (it.product.price * it.qty), 0);

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order placed! This is a demo checkout.");
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cart:updated"));
    window.location.href = "/";
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="font-display text-3xl font-semibold mb-6">Checkout</h1>
      <form className="grid md:grid-cols-3 gap-8" onSubmit={placeOrder}>
        <div className="md:col-span-2 space-y-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-3">Contact information</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <input className="rounded-md border bg-background px-3 py-2 text-sm" placeholder="First name" required />
              <input className="rounded-md border bg-background px-3 py-2 text-sm" placeholder="Last name" required />
              <input className="rounded-md border bg-background px-3 py-2 text-sm sm:col-span-2" type="email" placeholder="Email" required />
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-3">Delivery address</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <input className="rounded-md border bg-background px-3 py-2 text-sm sm:col-span-2" placeholder="Address line" required />
              <input className="rounded-md border bg-background px-3 py-2 text-sm" placeholder="City" required />
              <input className="rounded-md border bg-background px-3 py-2 text-sm" placeholder="Postal code" required />
            </div>
          </div>
        </div>

        <aside className="border rounded-lg p-4 h-fit">
          <h3 className="font-medium mb-3">Order summary</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {cart.map((item: any) => (
              <li key={item.id} className="flex items-center justify-between">
                <span>{item.product.name} × {item.qty}</span>
                <span className="text-foreground">RWF {Math.round(item.product.price * item.qty).toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-muted-foreground">Total</span>
            <span className="font-semibold">RWF {Math.round(total).toLocaleString()}</span>
          </div>
          <Button className="w-full mt-4 btn-hero" type="submit">Place order</Button>
          <Button variant="secondary" className="w-full mt-2" asChild>
            <Link to="/cart">Back to cart</Link>
          </Button>
        </aside>
      </form>
    </div>
  );
}
