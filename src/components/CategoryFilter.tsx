"use client";

import type { Category } from "@/data/sayings";
import { categories, categoryEmojis } from "@/data/sayings";

interface CategoryFilterProps {
  selected: Category | null;
  onChange: (category: Category | null) => void;
}

export default function CategoryFilter({
  selected,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
          selected === null
            ? "bg-primary text-cream shadow-sm"
            : "bg-white text-primary border border-cream-dark hover:border-primary"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
            selected === cat
              ? "bg-primary text-cream shadow-sm"
              : "bg-white text-primary border border-cream-dark hover:border-primary"
          }`}
        >
          {categoryEmojis[cat]} {cat}
        </button>
      ))}
    </div>
  );
}
