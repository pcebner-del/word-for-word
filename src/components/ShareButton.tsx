"use client";

import { useState } from "react";
import type { Saying } from "@/data/sayings";

interface ShareButtonProps {
  saying: Saying;
  className?: string;
}

export default function ShareButton({ saying, className }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const text = `🇩🇪 "${saying.german}"\n\n📝 Literally: "${saying.wordForWord}"\n\n💡 Actually means: ${saying.meaning}\n\n— Word For Word`;

    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleShare}
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 cursor-pointer ${
        copied
          ? "bg-green-600 text-white"
          : "bg-accent text-primary hover:bg-accent-dark"
      } ${className ?? ""}`}
    >
      {copied ? "✓ Copied!" : "📋 Share"}
    </button>
  );
}
