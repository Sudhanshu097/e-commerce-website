"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    price: number;
    images: string[];
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/products/${product._id}`}>
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <Image
              src={product.images[0] || "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"}
              alt={product.name}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 p-4">
          <div className="flex w-full justify-between">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm">${product.price}</p>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}