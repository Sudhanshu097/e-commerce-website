"use client";

import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart();
  const router = useRouter();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Button onClick={() => router.push("/")}>Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={`${item.productId}-${item.size}`}
              className="flex gap-4 items-center border p-4 rounded-lg"
            >
              <div className="relative w-24 h-24">
                <Image
                  src={item.image || "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                <p>${item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    updateQuantity(item.productId, item.size, item.quantity - 1)
                  }
                  disabled={item.quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span>{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    updateQuantity(item.productId, item.size, item.quantity + 1)
                  }
                >
                  <Plus className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.productId, item.size)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <h2 className="font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${total().toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${total().toFixed(2)}</span>
            </div>
          </div>
          <Button className="w-full" size="lg">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}