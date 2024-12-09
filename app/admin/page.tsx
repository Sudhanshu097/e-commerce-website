import { Product } from "@/lib/models/product";
import connectDB from "@/lib/db";
import AdminProductList from "@/components/admin/product-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getProducts() {
  await connectDB();
  const products = await Product.find({});
  return JSON.parse(JSON.stringify(products));
}

export default async function AdminPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <Link href="/admin/products/new">
          <Button>Add New Product</Button>
        </Link>
      </div>
      <AdminProductList products={products} />
    </div>
  );
}