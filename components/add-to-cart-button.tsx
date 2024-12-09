"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCart } from "@/lib/cart";
import { useToast } from "@/hooks/use-toast";

export default function AddToCartButton({ product }: { product: any }) {
  const [size, setSize] = useState("");
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (!size) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      });
      return;
    }

    addItem({
      productId: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
      size,
      image: product.images[0],
    });

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="space-y-4">
      <Select onValueChange={setSize}>
        <SelectTrigger>
          <SelectValue placeholder="Select size" />
        </SelectTrigger>
        <SelectContent>
          {product.sizes.map((size: string) => (
            <SelectItem key={size} value={size}>
              {size}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button onClick={handleAddToCart} className="w-full">
        Add to Cart
      </Button>
    </div>
  );
}