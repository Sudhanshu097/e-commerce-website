import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Product } from "@/lib/models/product";
import { seedProducts } from "@/lib/seed-data";

export async function POST() {
  try {
    await connectDB();
    
    // Clear existing products
    await Product.deleteMany({});
    
    // Insert seed data
    await Product.insertMany(seedProducts);
    
    return NextResponse.json({ message: "Database seeded successfully" });
  } catch (error) {
    console.error("Seeding error:", error);
    return NextResponse.json(
      { error: "Failed to seed database" },
      { status: 500 }
    );
  }
}