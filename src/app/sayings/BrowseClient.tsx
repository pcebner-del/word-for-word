"use client";

import { useState, useMemo, useCallback } from "react";
import type { Saying, Category } from "@/data/sayings";
import SayingCard from "@/components/SayingCard";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";

interface BrowseClientProps {
  sayings: Saying[];
}

export default function BrowseClient({ sayings }: BrowseClientProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleCategoryChange = (cat: Category | null) => {
    setSearch("");
    setSelectedCategory(cat);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return sayings.filter((s) => {
      // If searching, ignore category filter — search everything
      if (q) {
        return (
          s.german.toLowerCase().includes(q) ||
          s.wordForWord.toLowerCase().includes(q) ||
          s.meaning.toLowerCase().includes(q) ||
          s.tags.some((t) => t.toLowerCase() === q)
        );
      }
      // No search — apply category filter
      return selectedCategory === null || s.category === selectedCategory;
    });
  }, [sayings, search, selectedCategory]);

  return (
    <div>
      <div className="mb-5">
        <SearchBar value={search} onChange={setSearch} />
      </div>
      <div className="mb-8">
        <CategoryFilter
          selected={selectedCategory}
          onChange={handleCategoryChange}
        />
      </div>
      <div className="mb-6 text-sm text-gray-400">
        {filtered.length === sayings.length ? (
          <span>Showing all {sayings.length} sayings</span>
        ) : (
          <span>
            {filtered.length} saying{filtered.length !== 1 ? "s" : ""} found
          </span>
        )}
      </div>
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <div className="font-display text-5xl font-bold text-gray-200 mb-4">—</div>
          <p className="text-lg font-medium mb-2">No sayings found</p>
          <p className="text-sm">Try a different keyword or clear the filters.</p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedCategory(null);
            }}
            className="mt-6 px-5 py-2 bg-primary text-cream rounded-full text-sm hover:bg-primary-light transition-colors cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((saying) => (
              <SayingCard key={saying.id} saying={saying} />
            ))}
          </div>
          {filtered.length > 6 && (
            <div className="flex justify-center mt-12">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-cream rounded-full text-sm font-medium hover:bg-primary-light transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
                Back to Top
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
