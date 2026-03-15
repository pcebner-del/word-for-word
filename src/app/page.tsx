import Link from "next/link";
import DailySaying from "@/components/DailySaying";
import SayingCard from "@/components/SayingCard";
import { sayings } from "@/data/sayings";

const FEATURED_IDS = [
  "tomaten-augen",
  "baer-steppt",
  "nur-bahnhof",
  "schwein-haben",
];

const featured = FEATURED_IDS.map(
  (id) => sayings.find((s) => s.id === id)!
).filter(Boolean);

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-widest text-primary/50 font-medium mb-4">
              Deutsch → English → 😂
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary leading-tight mb-6">
              German. Translated.
              <br />
              <span className="text-accent italic">Literally.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto leading-relaxed">
              German idioms, translated word for word into English. The results
              are delightfully unhinged.
            </p>
          </div>
          <DailySaying />
        </div>
      </section>

      {/* Featured Sayings */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-3">
              Fan Favorites
            </h2>
            <p className="text-gray-500 text-sm">
              The sayings people keep coming back to
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featured.map((saying) => (
              <SayingCard key={saying.id} saying={saying} />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sayings"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-cream rounded-full font-medium hover:bg-primary-light transition-colors"
            >
              Browse All {sayings.length} Sayings →
            </Link>
            <Link
              href="/merch"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-cream transition-colors"
            >
              Shop Merch 🛍️
            </Link>
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-3xl md:text-4xl text-primary/60 italic leading-relaxed">
            &ldquo;The sausage always has two ends — and the Germans have a
            saying for that.&rdquo;
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇩🇪</span>
              <span>{sayings.length} authentic sayings</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌭</span>
              <span>Featuring actual sausage metaphors</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">😂</span>
              <span>100% literally translated</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
