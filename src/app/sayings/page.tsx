import type { Metadata } from "next";
import { sayings } from "@/data/sayings";
import BrowseClient from "./BrowseClient";

export const metadata: Metadata = {
  title: "All Sayings — Wörd For Word",
  description: "Browse all German sayings translated word for word into English.",
};

export default function SayingsPage() {
  return (
    <div className="min-h-screen bg-cream py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-widest text-primary/50 font-medium mb-3">
            The Collection
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-3">
            All Sayings
          </h1>
          <p className="text-gray-500 max-w-md mx-auto">
            {sayings.length} German phrases that make perfect sense… in German.
          </p>
        </div>
        <BrowseClient sayings={sayings} />
      </div>
    </div>
  );
}
