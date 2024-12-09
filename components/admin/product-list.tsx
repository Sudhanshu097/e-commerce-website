"use client";

import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import DeleteProduct from "./delete-product";

interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

export default function AdminProductList({ products }: { products: Product[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product._id}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell>
              {product.inStock ? (
                <span className="text-green-600">In Stock</span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Link href={`/admin/products/${product._id}/edit`}>
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                </Link>
                <DeleteProduct productId={product._id} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}