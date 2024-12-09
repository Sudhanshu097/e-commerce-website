import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920"
          alt="Hero background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">Elegance in Every Thread</h1>
          <p className="text-xl mb-8">
            Discover our new collection of premium clothing designed for those who
            appreciate quality and style.
          </p>
          <div className="space-x-4">
            <Link href="/products">
              <Button size="lg" variant="default">
                Shop Now
              </Button>
            </Link>
            <Link href="/products?category=new-arrivals">
              <Button size="lg" variant="outline">
                New Arrivals
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}