"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import ProductForm from "@/components/admin/product-form";

export default function NewProductPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    try {
      setLoading(true);
      const response = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          description: formData.get("description"),
          price: Number(formData.get("price")),
          category: formData.get("category"),
          sizes: formData.getAll("sizes"),
          images: formData.getAll("images"),
          inStock: Boolean(formData.get("inStock")),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      toast({
        title: "Success",
        description: "Product created successfully",
      });

      router.push("/admin");
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create product",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Add New Product</h1>
        <ProductForm onSubmit={handleSubmit} loading={loading} />
      </div>
    </div>
  );
}