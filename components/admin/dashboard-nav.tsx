"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Package, ShoppingCart } from "lucide-react";

const navItems = [
  {
    title: "Overview",
    href: "/admin",
    icon: LayoutGrid,
  },
  {
    title: "Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    title: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
];

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="grid gap-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link key={item.href} href={item.href}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2",
                pathname === item.href && "bg-accent"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.title}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
}