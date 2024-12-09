import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Product } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCategories(products: Product[]): string[] {
  const categories = new Set(products.map((product) => product.category));
  return Array.from(categories).sort();
}