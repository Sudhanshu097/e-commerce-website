import HeroSection from "@/components/home/hero-section";
import FeaturedCategories from "@/components/home/featured-categories";
import FeaturedProducts from "@/components/home/featured-products";
import Newsletter from "@/components/home/newsletter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
      <Newsletter />
    </main>
  );
}