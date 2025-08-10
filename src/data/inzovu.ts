export type Category = {
  slug: string;
  title: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  unit?: string;
  categorySlug: string;
  image: string;
  description?: string;
};

export const categories: Category[] = [
  { slug: "fruits", title: "Fruits", image: "/placeholder.svg" },
  { slug: "vegetables", title: "Vegetables", image: "/placeholder.svg" },
  { slug: "dairy", title: "Dairy & Eggs", image: "/placeholder.svg" },
  { slug: "bakery", title: "Bakery", image: "/placeholder.svg" },
  { slug: "meat", title: "Meat & Poultry", image: "/placeholder.svg" },
  { slug: "pantry", title: "Pantry", image: "/placeholder.svg" },
];

export const products: Product[] = [
  { id: "p1", name: "Bananas (Ripe)", price: 2.49, unit: "/kg", categorySlug: "fruits", image: "/placeholder.svg", description: "Sweet, ripe bananas perfect for snacking and smoothies." },
  { id: "p2", name: "Avocado (Hass)", price: 1.99, unit: "each", categorySlug: "fruits", image: "/placeholder.svg", description: "Creamy Hass avocado, great for salads and toast." },
  { id: "p3", name: "Spinach Bunch", price: 1.5, unit: "bunch", categorySlug: "vegetables", image: "/placeholder.svg", description: "Fresh spinach, rich in iron and vitamins." },
  { id: "p4", name: "Milk (1L)", price: 1.2, unit: "1L", categorySlug: "dairy", image: "/placeholder.svg", description: "Fresh whole milk from local farms." },
  { id: "p5", name: "Sourdough Bread", price: 3.99, unit: "loaf", categorySlug: "bakery", image: "/placeholder.svg", description: "Artisanal sourdough with a crisp crust and tender crumb." },
  { id: "p6", name: "Free-range Eggs (12)", price: 2.99, unit: "tray", categorySlug: "dairy", image: "/placeholder.svg", description: "Dozen free-range eggs, rich and flavorful." },
  { id: "p7", name: "Chicken Breast", price: 5.49, unit: "/kg", categorySlug: "meat", image: "/placeholder.svg", description: "Lean chicken breast, skinless & boneless." },
  { id: "p8", name: "Olive Oil (500ml)", price: 6.99, unit: "bottle", categorySlug: "pantry", image: "/placeholder.svg", description: "Extra virgin olive oil, cold-pressed." },
];
