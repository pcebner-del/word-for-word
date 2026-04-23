"use client";

// TODO: Replace STORE_URL with the actual Gelato store URL once live
const STORE_URL = "https://www.etsy.com/shop/WordForWordShop";

const products = [
  { saying: "Das ist nicht mein Bier", literal: "That's not my beer.", item: "Mug" },
  { saying: "Das ist mir Wurst", literal: "That is sausage to me.", item: "Tee" },
  { saying: "Alles in Butter", literal: "Everything in butter.", item: "Mug" },
  { saying: "Ich glaub', mein Schwein pfeift", literal: "I think my pig is whistling.", item: "Tee" },
  { saying: "Da steppt der Bär", literal: "The bear is doing the step dance.", item: "Tee + Beanie" },
  { saying: "Da haben wir den Salat", literal: "There we have the salad.", item: "Mug" },
  { saying: "Hals- und Beinbruch!", literal: "Neck and leg break!", item: "Print" },
  { saying: "Wo gehobelt wird, da fallen Späne", literal: "Where there is planing, there are shavings.", item: "Framed Print" },
];

export default function MerchClient() {
  const isLive = Boolean(STORE_URL);

  return (
    <>
      {/* Product preview grid */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-primary/40 font-medium mb-3">
            The Collection
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
            8 sayings. Mugs, tees, prints & more.
          </h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Printed locally in the US, Germany, and 30+ countries. Fast shipping. Real quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {products.map((p) => (
            <div
              key={p.saying}
              className="bg-white border border-primary/10 rounded-2xl p-5 flex flex-col gap-2 hover:border-accent/40 transition-colors"
            >
              <span className="text-[10px] uppercase tracking-widest text-accent font-medium">
                {p.item}
              </span>
              <p className="font-display font-bold text-primary text-sm leading-snug">
                {p.saying}
              </p>
              <p className="text-gray-400 text-xs italic leading-relaxed">
                &ldquo;{p.literal}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          {isLive ? (
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-primary text-cream rounded-full text-sm font-medium hover:bg-primary-light transition-colors"
            >
              Shop the Collection →
            </a>
          ) : (
            <ComingSoonCapture />
          )}
        </div>
      </section>

      {/* Flags / shipping callout */}
      <section className="bg-primary/5 border-t border-primary/10 py-10 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-primary/40 font-medium mb-4">
            Ships from your corner of the world
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-primary/60">
            <span>🇺🇸 Printed in the US</span>
            <span>🇩🇪 Printed in Germany</span>
            <span>🌍 30+ countries</span>
          </div>
        </div>
      </section>
    </>
  );
}

function ComingSoonCapture() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="inline-flex items-center gap-3 px-8 py-4 bg-primary/5 border border-primary/20 text-primary rounded-full">
        <span className="text-sm font-medium">Launching very soon — check back shortly</span>
      </div>
      <p className="text-xs text-gray-400">
        Gut Ding will Weile haben. Good things want to take their time.
      </p>
    </div>
  );
}
