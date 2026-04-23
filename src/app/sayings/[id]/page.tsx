import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  sayings,
  getSayingById,
  getRelatedSayings,
  categoryEmojis,
} from "@/data/sayings";
import SayingCard from "@/components/SayingCard";
import ShareButton from "@/components/ShareButton";

export function generateStaticParams() {
  return sayings.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const saying = getSayingById(id);
  if (!saying) return {};
  return {
    title: `"${saying.german}" — Wörd For Word`,
    description: `Literally: "${saying.wordForWord}"`,
  };
}

export default async function SayingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const saying = getSayingById(id);
  if (!saying) notFound();

  const related = getRelatedSayings(saying);
  const twitterText = encodeURIComponent(
    `"${saying.german}"\n\nLiterally: "${saying.wordForWord}"\n\n`
  );
  const twitterUrl = `https://twitter.com/intent/tweet?text=${twitterText}`;

  return (
    <div className="min-h-screen bg-cream py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/sayings"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors mb-8"
        >
          ← Back to all sayings
        </Link>

        {/* Main saying card */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 text-cream mb-8 shadow-xl">
          <div className="mb-6">
            <span className="inline-block text-xs uppercase tracking-widest text-cream/50 font-medium bg-cream/10 px-3 py-1.5 rounded-full">
              {categoryEmojis[saying.category]} {saying.category}
            </span>
          </div>

          <p className="font-display text-3xl md:text-4xl font-bold leading-tight mb-8">
            {saying.german}
          </p>

          <div className="border-t border-cream/20 mb-8" />

          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-accent/70 font-medium mb-3 block">
              Word for word
            </span>
            <p className="font-display text-2xl md:text-3xl italic text-accent leading-relaxed">
              &ldquo;{saying.wordForWord}&rdquo;
            </p>
          </div>

          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest text-cream/50 font-medium mb-3 block">
              Actually means
            </span>
            <p className="text-lg text-cream/80 leading-relaxed">
              {saying.meaning}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ShareButton saying={saying} />
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm bg-cream/10 text-cream hover:bg-cream/20 transition-all duration-200"
            >
              𝕏 Share on X
            </a>
          </div>
        </div>

        {/* Tags */}
        {saying.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-12">
            {saying.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-cream-dark text-gray-500 border border-cream-dark"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Related sayings */}
        {related.length > 0 && (
          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-6">
              More {categoryEmojis[saying.category]} {saying.category} Sayings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <SayingCard key={r.id} saying={r} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
