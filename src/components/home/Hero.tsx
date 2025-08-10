import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import heroSide from "@/assets/hero-side.jpg";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(0deg, hsl(var(--background) / 0.92), hsl(var(--background) / 0.92)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        e.currentTarget.style.setProperty("--x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
        e.currentTarget.style.setProperty("--y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
      }}
    >
      <div className="container mx-auto py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-enter">
          <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium mb-3">Fresh • Fast • Local</span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            Fresh groceries delivered to your door
          </h1>
          <p className="mt-4 text-muted-foreground max-w-prose">
            Shop Inzovu Market’s handpicked fruits, vegetables, dairy, and everyday essentials. Same‑day delivery available.
          </p>
          <div className="mt-6 flex gap-3">
            <Button className="btn-hero" asChild>
              <a href="/shop">Start Shopping</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="#categories">Browse Categories</a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src={heroSide} alt="Inzovu Market fresh produce assortment" className="w-full h-64 md:h-80 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
