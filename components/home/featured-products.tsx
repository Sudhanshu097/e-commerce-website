import Link from "next/link";
import Image from "next/image";
import { seedProducts } from "@/lib/seed-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FeaturedProducts() {
  const featuredProducts = seedProducts.slice(0, 3);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link key={product.name} href={`/products/${product.name}`}>
              <Card className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{product.name}</h3>
                      <Badge variant="secondary">${product.price}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {product.description.substring(0, 100)}...
                    </p>
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