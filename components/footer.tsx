import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Elegance</h3>
            <p className="text-sm text-muted-foreground">
              Premium clothing for those who appreciate quality and style.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products">All Products</Link></li>
              <li><Link href="/products?category=new-arrivals">New Arrivals</Link></li>
              <li><Link href="/products?category=best-sellers">Best Sellers</Link></li>
              <li><Link href="/products?category=sale">Sale</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shipping">Shipping Information</Link></li>
              <li><Link href="/returns">Returns & Exchanges</Link></li>
              <li><Link href="/size-guide">Size Guide</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Elegance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}