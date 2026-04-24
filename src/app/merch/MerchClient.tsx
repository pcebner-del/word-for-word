"use client";

export default function MerchClient() {
  return (
    <>
      {/* Coming Soon */}
      <section className="max-w-5xl mx-auto px-4 py-24">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-primary/40 font-medium mb-4">
            The Collection
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8">
            Something good is coming.
          </h2>
          <ComingSoonCapture />
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
