import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Category {
  name: string;
  image: string;
  count: number;
}

export default function CategoryPreview({ categories }: { categories: Category[] }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/products?category=${encodeURIComponent(category.name)}`}
            >
              <Card className="group cursor-pointer overflow-hidden">
                <CardContent className="p-4">
                  <div
                    className="h-40 mb-4 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                  <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.count} Products
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}