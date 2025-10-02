import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-background">
      <div className="container mx-auto grid gap-8 md:grid-cols-4 py-10">
        <div>
          <h3 className="font-display text-lg font-semibold mb-3">Inzovu Market</h3>
          <p className="text-sm text-muted-foreground">Fresh groceries delivered fast. Quality you can taste, service you can trust.</p>
        </div>
        <div>
          <h4 className="font-medium mb-3">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shop" className="story-link">All Products</Link></li>
            <li><Link to="/category/fruits" className="story-link">Fruits</Link></li>
            <li><Link to="/category/vegetables" className="story-link">Vegetables</Link></li>
            <li><Link to="/category/dairy" className="story-link">Dairy & Eggs</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="story-link">About</Link></li>
            <li><Link to="/contact" className="story-link">Contact</Link></li>
            <li><Link to="/faq" className="story-link">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Stay in the loop</h4>
          <p className="text-sm text-muted-foreground mb-2">Get fresh deals and seasonal picks.</p>
          <form className="flex gap-2">
            <input type="email" placeholder="Your email" className="flex-1 rounded-md border bg-background px-3 py-2 text-sm" />
            <button className="rounded-md px-4 py-2 btn-hero text-sm">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Inzovu Market. All rights reserved.</div>
    </footer>
  );
}
