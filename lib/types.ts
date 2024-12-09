export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  sizes: string[];
  images: string[];
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
}