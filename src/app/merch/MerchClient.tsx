"use client";

import { useState } from "react";
import { sayings } from "@/data/sayings";

const PRODUCTS = [
  {
    id: "mug",
    name: "German Quality Mug",
    description:
      "Start your morning with the sausage wisdom it deserves. 11oz ceramic, dishwasher safe.",
    price: "$18",
    emoji: "☕",
    sayingId: "wurst-zwei-enden",
    tag: "Best Seller",
    tagColor: "bg-accent text-primary",
  },
  {
    id: "tshirt",
    name: "Word For Word Tee",
    description:
      "Wear your confusion proudly. 100% organic cotton. Available in forest green and cream.",
    price: "$28",
    emoji: "👕",
    sayingId: "tomaten-augen",
    tag: "New",
    tagColor: "bg-german-red text-cream",
  },
  {
    id: "print",
    name: "Framed Saying Print",
    description:
      "German art direction, literally. Archival print, solid wood frame. Perfect for offices and dining rooms.",
    price: "$45",
    emoji: "🖼️",
    sayingId: "um-die-wurst",
    tag: "Coming Soon",
    tagColor: "bg-cream/20 text-cream",
  },
];

export default function MerchClient() {
  const [toast, setToast] = useState<string | null>(null);
  const [notified, setNotified] = useState<Set<string>>(new Set());

  const handleNotify = (productId: string, productName: string) => {
    setNotified((prev) => new Set([...prev, productId]));
    setToast(`You'll be notified when "${productName}" is available!`);
    setTimeout(() => setToast(null), 3500);
  };

  return (
    <div>
      {/* Toast */}
      {toast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-primary text-cream px-6 py-3 rounded-full shadow-xl text-sm font-medium whitespace-nowrap">
          ✓ {toast}
        </div>
      )}

      {/* Products */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => {
              const saying = sayings.find((s) => s.id === product.sayingId);
              const isNotified = notified.has(product.id);

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden border border-cream-dark hover:border-accent transition-all duration-200 hover:shadow-lg flex flex-col"
                >
                  {/* Product mock */}
                  <div className="bg-primary-dark aspect-square flex flex-col items-center justify-center p-8 relative">
                    {product.tag && (
                      <span
                        className={`absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full font-medium ${product.tagColor}`}
                      >
                        {product.tag}
                      </span>
                    )}
                    <div className="text-6xl mb-4 drop-shadow-lg">
                      {product.emoji}
                    </div>
                    {saying && (
                      <div className="text-center px-2">
                        <p className="font-display text-sm text-cream/90 font-semibold mb-1.5 leading-snug">
                          {saying.german}
                        </p>
                        <p className="text-accent text-xs italic leading-snug">
                          &ldquo;{saying.wordForWord}&rdquo;
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-display text-lg font-bold text-primary leading-tight">
                        {product.name}
                      </h3>
                      <span className="text-accent font-bold text-lg ml-2 shrink-0">
                        {product.price}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-1">
                      {product.description}
                    </p>
                    <button
                      onClick={() => handleNotify(product.id, product.name)}
                      disabled={isNotified}
                      className={`w-full py-3 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                        isNotified
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : "bg-accent text-primary hover:bg-accent-dark"
                      }`}
                    >
                      {isNotified ? "✓ You're on the list!" : "Notify Me When Available"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality section */}
      <section className="py-16 px-4 bg-primary text-cream mx-0">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-display text-2xl md:text-3xl italic mb-3 leading-relaxed">
            &ldquo;Qualität ist keine Frage des Preises.&rdquo;
          </p>
          <p className="text-cream/50 text-sm mb-12">
            &ldquo;Quality is not a question of price.&rdquo; — A German proverb
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-sm mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-3">🇩🇪</div>
              <p className="text-xs text-cream/60 font-medium uppercase tracking-wide">
                German-inspired
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">♻️</div>
              <p className="text-xs text-cream/60 font-medium uppercase tracking-wide">
                Sustainably made
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚚</div>
              <p className="text-xs text-cream/60 font-medium uppercase tracking-wide">
                Ships worldwide
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
