"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { ImagePlus, Loader2 } from "lucide-react";

interface ProductFormProps {
  onSubmit: (formData: FormData) => Promise<void>;
  loading?: boolean;
  initialData?: any;
}

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const CATEGORIES = ["T-Shirts", "Shirts", "Pants", "Dresses", "Jackets", "Accessories"];

export default function ProductForm({ onSubmit, loading, initialData }: ProductFormProps) {
  const [images, setImages] = useState<string[]>(initialData?.images || []);
  const [selectedSizes, setSelectedSizes] = useState<string[]>(initialData?.sizes || []);

  const handleImageAdd = () => {
    const url = window.prompt("Enter image URL:");
    if (url) {
      setImages([...images, url]);
    }
  };

  const handleImageRemove = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.delete("sizes");
    selectedSizes.forEach((size) => formData.append("sizes", size));
    images.forEach((image) => formData.append("images", image));
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              name="name"
              required
              defaultValue={initialData?.name}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              required
              defaultValue={initialData?.description}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                name="price"
                type="number"
                step="0.01"
                min="0"
                required
                defaultValue={initialData?.price}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select name="category" defaultValue={initialData?.category}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Sizes</Label>
            <div className="flex flex-wrap gap-4">
              {SIZES.map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox
                    id={`size-${size}`}
                    checked={selectedSizes.includes(size)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedSizes([...selectedSizes, size]);
                      } else {
                        setSelectedSizes(selectedSizes.filter((s) => s !== size));
                      }
                    }}
                  />
                  <Label htmlFor={`size-${size}`}>{size}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Images</Label>
            <div className="grid gap-4 sm:grid-cols-3">
              {images.map((url, index) => (
                <Card key={index} className="relative overflow-hidden aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={url}
                    alt={`Product image ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => handleImageRemove(index)}
                  >
                    Remove
                  </Button>
                </Card>
              ))}
              <Button
                type="button"
                variant="outline"
                className="h-[120px]"
                onClick={handleImageAdd}
              >
                <ImagePlus className="mr-2 h-4 w-4" />
                Add Image
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="inStock" name="inStock" defaultChecked={initialData?.inStock} />
            <Label htmlFor="inStock">In Stock</Label>
          </div>
        </div>
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {initialData ? "Update Product" : "Create Product"}
      </Button>
    </form>
  );
}