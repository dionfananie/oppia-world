import type { Route } from "./+types/home";
import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";
import { Hero } from "~/components/home/Hero";
import { ProductMosaic } from "~/components/home/ProductMosaic";
import { PhilosophySection } from "~/components/home/PhilosophySection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Oppia World" },
    {
      name: "description",
      content:
        "A curated ecosystem for the modern intellect. We build tools that honor the craft of thought, the weight of words, and the pursuit of clarity in a digital age.",
    },
  ];
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-[#f9f9f9]">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductMosaic />
        <PhilosophySection />
      </main>
      <Footer />
    </div>
  );
}
