import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus, Minus, ShoppingCart, Heart, Star } from "lucide-react";
import { useState, useEffect } from "react";
import type { Product } from "@/data/inzovu";

export default function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const liked = JSON.parse(localStorage.getItem("liked") || "[]");
    setIsLiked(liked.includes(product.id));
  }, [product.id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find((item: any) => item.id === product.id);

    if (existing) {
      existing.qty += quantity;
    } else {
      cart.push({ id: product.id, product, qty: quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cart:updated"));
    setQuantity(1); // Reset quantity
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const toggleLike = () => {
    const liked = JSON.parse(localStorage.getItem("liked") || "[]");
    const updated = isLiked
      ? liked.filter((id: string) => id !== product.id)
      : [...liked, product.id];

    localStorage.setItem("liked", JSON.stringify(updated));
    setIsLiked(!isLiked);
  };

  return (
    <div className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-primary/20">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex gap-2">
        <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
          Fresh
        </span>
        {product.price > 5000 && (
          <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
            Popular
          </span>
        )}
      </div>

      {/* Like Button */}
      <button
        onClick={toggleLike}
        className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200"
      >
        <Heart
          className={`h-4 w-4 transition-colors duration-200 ${
            isLiked
              ? "fill-red-500 text-red-500"
              : "text-gray-600 dark:text-gray-400"
          }`}
        />
      </button>

      {/* Image */}
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Rating */}
          <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-white/90 dark:bg-gray-800/90 px-2 py-1 rounded-full">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {Math.floor(Math.random() * 2) + 4}.
              {Math.floor(Math.random() * 9) + 1}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 sm:p-6 space-y-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight min-h-[3rem]">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-end justify-between mb-3">
          <div className="space-y-1.5">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                RWF {product.price.toLocaleString()}
              </span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-muted-foreground bg-gradient-to-r from-muted/40 to-muted/20 px-3 py-1.5 rounded-full inline-block border border-border/30">
              per {product.unit || "piece"}
            </div>
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={decrementQuantity}
              className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors duration-200"
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-12 text-center font-medium text-lg">
              {quantity}
            </span>
            <button
              onClick={incrementQuantity}
              className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors duration-200"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          {/* Add to Cart */}
          <Button
            onClick={addToCart}
            className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
    </div>
  );
}
