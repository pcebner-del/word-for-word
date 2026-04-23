"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/sayings", label: "Browse" },
    { href: "/merch", label: "Merch" },
  ];

  return (
    <header className="bg-black text-cream sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col gap-[3px]">
            <div className="w-6 h-[5px] bg-[#333333]" />
            <div className="w-6 h-[5px] bg-german-red" />
            <div className="w-6 h-[5px] bg-german-gold" />
          </div>
          <span className="font-display text-lg md:text-xl font-bold tracking-tight text-cream group-hover:text-accent transition-colors whitespace-nowrap">
            WÖRD FOR WORD
          </span>
        </Link>
        <nav className="flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-2 sm:px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? "bg-cream/15 text-cream"
                  : "text-cream/70 hover:text-cream hover:bg-cream/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
