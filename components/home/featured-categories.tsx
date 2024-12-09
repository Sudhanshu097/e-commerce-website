import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/lib/seed-data";

export default function FeaturedCategories() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/products?category=${encodeURIComponent(category.name)}`}
            >
              <Card className="group cursor-pointer overflow-hidden">
                <CardContent className="p-4">
                  <div
                    className="h-48 mb-4 rounded-lg bg-cover bg-center transition-transform group-hover:scale-105"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                  <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}