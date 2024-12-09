"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center text-primary-foreground">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-8 max-w-md mx-auto">
          Subscribe to our newsletter for exclusive offers, new arrivals, and style tips.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-primary-foreground text-primary"
            required
          />
          <Button type="submit" variant="secondary">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}