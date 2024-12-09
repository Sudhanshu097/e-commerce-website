import { Product } from "@/lib/models/product";
import connectDB from "@/lib/db";
import ProductGrid from "@/components/products/product-grid";
import ProductFilters from "@/components/products/product-filters";
import { getCategories } from "@/lib/utils";

async function getProducts() {
  await connectDB();
  const products = await Product.find({});
  return JSON.parse(JSON.stringify(products));
}

export default async function ProductsPage() {
  const products = await getProducts();
  const categories = getCategories(products);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">All Products</h1>
      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        <div className="hidden lg:block">
          <ProductFilters categories={categories} />
        </div>
        <div className="lg:col-span-3">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}