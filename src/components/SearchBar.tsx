"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search sayings… (e.g. Wurst, sausage, luck, bear)"
        className="w-full px-5 py-3 pl-12 rounded-full border-2 border-cream-dark bg-white text-primary placeholder-gray-400 focus:outline-none focus:border-accent text-sm transition-colors"
      />
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 select-none">
        🔍
      </span>
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}
