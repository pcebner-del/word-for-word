"use client";

import { useState } from "react";

export default function MerchClient() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-24">
      <div className="max-w-lg mx-auto text-center">

        {/* Divider line */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-primary/20" />
          <span className="text-xs uppercase tracking-[0.3em] text-primary/40 font-medium">
            Gut Ding will Weile haben
          </span>
          <div className="flex-1 h-px bg-primary/20" />
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
          Something worth<br />
          <span className="italic text-accent">wearing</span> is coming.
        </h2>

        <p className="text-gray-500 text-base leading-relaxed mb-12 max-w-sm mx-auto">
          Mugs, tees, and prints. German precision. Literally translated.
          Be the first to know when we launch.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-cream rounded-full">
            <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium">You&apos;re on the list.</span>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={loading}
                className="flex-1 px-5 py-3 rounded-full border-2 border-cream-dark bg-white text-primary placeholder-gray-400 focus:outline-none focus:border-accent text-sm transition-colors disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-7 py-3 bg-primary text-cream rounded-full text-sm font-medium hover:bg-primary-light transition-colors whitespace-nowrap cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Saving…" : "Notify Me"}
              </button>
            </form>
            {error && (
              <p className="mt-4 text-sm text-red-500">{error}</p>
            )}
          </>
        )}

        {/* Bottom accent */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 text-xs uppercase tracking-widest text-primary/30 font-medium">
          <span>Mugs</span>
          <span>·</span>
          <span>Tees</span>
          <span>·</span>
          <span>Prints</span>
          <span>·</span>
          <span>More</span>
        </div>

      </div>
    </section>
  );
}
