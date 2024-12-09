"use client";

import Link from "next/link";
import { ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Elegance
          </Link>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/admin">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}