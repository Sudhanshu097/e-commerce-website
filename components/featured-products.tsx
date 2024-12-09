import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";

export default function FeaturedProducts({ products }: { products: Product[] }) {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <Link key={product._id} href={`/products/${product._id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-2">
                      {product.description.substring(0, 100)}...
                    </p>
                    <p className="font-bold">${product.price}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}