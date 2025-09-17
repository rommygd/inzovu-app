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

import catFruits from "@/assets/categories/fruits.jpg";
import catVegetables from "@/assets/categories/vegetables.jpg";
import catDairy from "@/assets/categories/dairy.jpg";
import catBakery from "@/assets/categories/bakery.jpg";
import catMeat from "@/assets/categories/meat.jpg";
import catPantry from "@/assets/categories/pantry.jpg";

export const categories: Category[] = [
  { slug: "fruits", title: "Fruits", image: catFruits },
  { slug: "vegetables", title: "Vegetables", image: catVegetables },
  { slug: "dairy", title: "Dairy & Eggs", image: catDairy },
  { slug: "bakery", title: "Bakery", image: catBakery },
  { slug: "meat", title: "Meat & Poultry", image: catMeat },
  { slug: "pantry", title: "Pantry", image: catPantry },
];

import pBananas from "@/assets/products/bananas.jpg";
import pAvocado from "@/assets/products/avocado.jpg";
import pApples from "@/assets/products/apples.jpg";
import pOranges from "@/assets/products/oranges.jpg";
import pMangoes from "@/assets/products/mangoes.jpg";
import pPineapple from "@/assets/products/pineapple.jpg";
import pStrawberries from "@/assets/products/strawberries.jpg";
import pGrapes from "@/assets/products/grapes.jpg";
import pSpinach from "@/assets/products/spinach.jpg";
import pMilk from "@/assets/products/milk.jpg";
import pSourdough from "@/assets/products/sourdough.jpg";
import pEggs from "@/assets/products/eggs.jpg";
import pChicken from "@/assets/products/chicken.jpg";
import pOliveOil from "@/assets/products/olive-oil.jpg";

export const products: Product[] = [
  // Fruits
  { id: "p1", name: "Bananas (Ripe)", price: 2.49, unit: "/kg", categorySlug: "fruits", image: pBananas, description: "Sweet, ripe bananas perfect for snacking and smoothies." },
  { id: "p2", name: "Avocado (Hass)", price: 1.99, unit: "each", categorySlug: "fruits", image: pAvocado, description: "Creamy Hass avocado, great for salads and toast." },
  { id: "p9", name: "Apples (Mixed)", price: 3.99, unit: "/kg", categorySlug: "fruits", image: pApples, description: "Fresh crisp apples, red and green varieties." },
  { id: "p10", name: "Oranges (Sweet)", price: 2.99, unit: "/kg", categorySlug: "fruits", image: pOranges, description: "Juicy sweet oranges, perfect for fresh juice." },
  { id: "p11", name: "Mangoes (Tropical)", price: 4.99, unit: "/kg", categorySlug: "fruits", image: pMangoes, description: "Sweet tropical mangoes, rich in vitamins." },
  { id: "p12", name: "Pineapple (Fresh)", price: 5.99, unit: "each", categorySlug: "fruits", image: pPineapple, description: "Fresh golden pineapple, sweet and tangy." },
  { id: "p13", name: "Strawberries (Premium)", price: 7.99, unit: "/kg", categorySlug: "fruits", image: pStrawberries, description: "Premium fresh strawberries, perfect for desserts." },
  { id: "p14", name: "Grapes (Seedless)", price: 6.49, unit: "/kg", categorySlug: "fruits", image: pGrapes, description: "Sweet seedless grapes, purple and green varieties." },
  
  // Vegetables
  { id: "p3", name: "Spinach Bunch", price: 1.5, unit: "bunch", categorySlug: "vegetables", image: pSpinach, description: "Fresh spinach, rich in iron and vitamins." },
  
  // Dairy & Eggs
  { id: "p4", name: "Milk (1L)", price: 1.2, unit: "1L", categorySlug: "dairy", image: pMilk, description: "Fresh whole milk from local farms." },
  { id: "p6", name: "Free-range Eggs (12)", price: 2.99, unit: "tray", categorySlug: "dairy", image: pEggs, description: "Dozen free-range eggs, rich and flavorful." },
  
  // Bakery
  { id: "p5", name: "Sourdough Bread", price: 3.99, unit: "loaf", categorySlug: "bakery", image: pSourdough, description: "Artisanal sourdough with a crisp crust and tender crumb." },
  
  // Meat & Poultry
  { id: "p7", name: "Chicken Breast", price: 5.49, unit: "/kg", categorySlug: "meat", image: pChicken, description: "Lean chicken breast, skinless & boneless." },
  
  // Pantry
  { id: "p8", name: "Olive Oil (500ml)", price: 6.99, unit: "bottle", categorySlug: "pantry", image: pOliveOil, description: "Extra virgin olive oil, cold-pressed." },
];
