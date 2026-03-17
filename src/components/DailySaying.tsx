import { getDailySaying } from "@/data/sayings";
import ShareButton from "./ShareButton";

export default function DailySaying() {
  const saying = getDailySaying();
  const twitterText = encodeURIComponent(
    `"${saying.german}"\n\nLiterally: "${saying.wordForWord}"\n\nwordforword.wtf`
  );
  const twitterUrl = `https://twitter.com/intent/tweet?text=${twitterText}`;

  return (
    <div className="bg-primary rounded-3xl p-8 md:p-12 text-cream max-w-2xl mx-auto shadow-xl">
      <div className="text-center mb-6">
        <span className="inline-block text-xs uppercase tracking-widest text-cream/50 font-medium bg-cream/10 px-4 py-1.5 rounded-full">
          Today&apos;s Saying
        </span>
      </div>

      <p className="font-display text-2xl md:text-3xl font-bold text-center leading-tight mb-6">
        {saying.german}
      </p>

      <div className="border-t border-cream/20 my-6" />

      <div className="text-center mb-2">
        <span className="text-xs uppercase tracking-widest text-accent/70 font-medium">
          Word for word
        </span>
      </div>
      <p className="font-display text-xl md:text-2xl italic text-accent text-center leading-relaxed mb-6">
        &ldquo;{saying.wordForWord}&rdquo;
      </p>

      <div className="text-center mb-2">
        <span className="text-xs uppercase tracking-widest text-cream/50 font-medium">
          Actually means
        </span>
      </div>
      <p className="text-center text-cream/75 text-base md:text-lg mb-8 leading-relaxed">
        {saying.meaning}
      </p>

      <div className="flex justify-center gap-3 flex-wrap">
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
  );
}
