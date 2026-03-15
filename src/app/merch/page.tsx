import type { Metadata } from "next";
import MerchClient from "./MerchClient";

export const metadata: Metadata = {
  title: "Merch — Word For Word",
  description:
    "Premium merchandise featuring your favorite literally-translated German sayings.",
};

export default function MerchPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-primary text-cream py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent text-xs uppercase tracking-widest font-medium mb-4">
            Deutsche Qualität
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            Wear Your
            <br />
            <span className="text-accent italic">German</span>
          </h1>
          <p className="text-cream/65 text-lg max-w-xl mx-auto leading-relaxed">
            Premium merchandise featuring your favorite literally-translated
            German sayings. Because some wisdom is too good not to wear.
          </p>
        </div>
      </section>

      <MerchClient />
    </div>
  );
}
