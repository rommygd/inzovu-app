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
      <div className="p-4 sm:p-5 space-y-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent whitespace-nowrap">
              RWF {product.price.toLocaleString()}
            </span>
            <span className="text-xs font-medium text-muted-foreground bg-muted/40 px-2 py-0.5 rounded-full border border-border/30">
              per {product.unit || "piece"}
            </span>
          </div>
        </div>

        {/* Quantity Controls and Add to Cart */}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <button
                onClick={decrementQuantity}
                className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors duration-200"
                disabled={quantity <= 1}
              >
                <Minus className="h-3 w-3" />
              </button>
              <span className="w-8 text-center font-medium text-sm">
                {quantity}
              </span>
              <button
                onClick={incrementQuantity}
                className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors duration-200"
              >
                <Plus className="h-3 w-3" />
              </button>
            </div>

            {/* Add to Cart */}
            <Button
              onClick={addToCart}
              size="sm"
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-1 px-3 py-1.5 text-xs"
            >
              <ShoppingCart className="h-3 w-3" />
              Add
            </Button>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
    </div>
  );
}
