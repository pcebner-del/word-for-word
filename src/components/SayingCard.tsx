import Link from "next/link";
import type { Saying } from "@/data/sayings";
import { categoryEmojis } from "@/data/sayings";

interface SayingCardProps {
  saying: Saying;
}

export default function SayingCard({ saying }: SayingCardProps) {
  return (
    <Link href={`/sayings/${saying.id}`} className="block group h-full">
      <div className="bg-white rounded-2xl p-6 border border-cream-dark group-hover:border-accent transition-all duration-200 group-hover:shadow-lg h-full flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-4">
          <span className="text-xs font-medium bg-cream px-2.5 py-1 rounded-full text-primary border border-cream-dark whitespace-nowrap">
            {categoryEmojis[saying.category]} {saying.category}
          </span>
        </div>
        <p className="font-display text-lg font-semibold text-primary mb-3 leading-snug">
          {saying.german}
        </p>
        <p className="text-accent italic text-base mb-3 leading-relaxed font-display flex-1">
          &ldquo;{saying.wordForWord}&rdquo;
        </p>
        <p className="text-sm text-gray-500 leading-relaxed mt-auto pt-3 border-t border-cream-dark">
          {saying.meaning}
        </p>
      </div>
    </Link>
  );
}
