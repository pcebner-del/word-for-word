import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-cream/70 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="flex flex-col gap-[3px]">
                <div className="w-4 h-[3px] bg-[#333333]" />
                <div className="w-4 h-[3px] bg-german-red" />
                <div className="w-4 h-[3px] bg-german-gold" />
              </div>
              <span className="font-display text-lg font-bold text-cream">
                WORD FOR WORD
              </span>
            </div>
            <p className="text-sm italic text-cream/50">
              &ldquo;Lost in translation? That&apos;s the point.&rdquo;
            </p>
          </div>
          <nav className="flex gap-6 text-sm">
            <Link
              href="/"
              className="hover:text-cream transition-colors"
            >
              Home
            </Link>
            <Link
              href="/sayings"
              className="hover:text-cream transition-colors"
            >
              Browse
            </Link>
            <Link
              href="/merch"
              className="hover:text-cream transition-colors"
            >
              Merch
            </Link>
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-cream/10 text-center text-xs text-cream/30">
          © {new Date().getFullYear()} Word For Word. German humor, delivered
          literally.
        </div>
      </div>
    </footer>
  );
}
