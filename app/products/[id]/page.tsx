import Image from "next/image";
import { notFound } from "next/navigation";
import connectDB from "@/lib/db";
import { Product } from "@/lib/models/product";
import AddToCartButton from "@/components/add-to-cart-button";
import { Card } from "@/components/ui/card";

async function getProduct(id: string) {
  await connectDB();
  const product = await Product.findById(id);
  if (!product) return null;
  return JSON.parse(JSON.stringify(product));
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="overflow-hidden">
          <div className="relative aspect-square">
            <Image
              src={product.images[0] || "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        </Card>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold">${product.price}</p>
          <div className="prose max-w-none">
            <p>{product.description}</p>
          </div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}