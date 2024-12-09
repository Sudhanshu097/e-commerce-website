"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import ProductForm from "@/components/admin/product-form";
import { Loader2 } from "lucide-react";

export default function EditProductPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch product");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch product",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [params.id, toast]);

  const handleSubmit = async (formData: FormData) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/products/${params.id}`, {
        method: "PUT",
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

      if (!response.ok) throw new Error("Failed to update product");

      toast({
        title: "Success",
        description: "Product updated successfully",
      });

      router.push("/admin");
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update product",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Edit Product</h1>
        {product && (
          <ProductForm
            onSubmit={handleSubmit}
            loading={loading}
            initialData={product}
          />
        )}
      </div>
    </div>
  );
}