"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ProductFiltersProps {
  categories: string[];
}

export default function ProductFilters({ categories }: ProductFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  const handleCategoryClick = (category: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg">Categories</h2>
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="space-y-1">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start",
              !currentCategory && "bg-accent"
            )}
            onClick={() => handleCategoryClick(null)}
          >
            All Products
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className={cn(
                "w-full justify-start",
                currentCategory === category && "bg-accent"
              )}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}