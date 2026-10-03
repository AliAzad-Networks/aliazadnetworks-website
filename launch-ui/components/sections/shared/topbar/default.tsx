"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, User, ChevronDown, X } from "lucide-react";

import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Config                                                             */
/* ------------------------------------------------------------------ */

const QUICK_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Support", href: "/contact" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function TopBar({ className }: { className?: string }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
  };

  return (
    <div
      className={cn(
        "sticky top-0 z-50 w-full bg-slate-900 text-slate-300 border-b border-slate-800 -mb-4 px-4",
        className,
      )}
    >
      <div className="max-w-container mx-auto px-4">
        <div className="flex h-10 items-center justify-end gap-6 text-xs">
          {/* -------------------- Right: quick links + search + login -------------------- */}
          <nav className="hidden md:flex items-center gap-6">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile fallback: just one link */}
          <Link
            href="/contact"
            className="md:hidden text-slate-300 hover:text-white transition-colors"
          >
            Support
          </Link>

          {/* Divider */}
          <div className="hidden lg:block h-4 w-px bg-slate-700" />

          {/* Search toggle */}
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
            className="flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            {searchOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Search className="h-4 w-4" />
            )}
          </button>

          {/* Client Login */}
          <Link
            href="/login"
            className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
          >
            <User className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Client Login</span>
            <span className="sm:hidden">Login</span>
            <ChevronDown className="hidden sm:inline h-3 w-3 opacity-60" />
          </Link>
        </div>

        {/* -------------------- Search panel (expandable) -------------------- */}
        {searchOpen && (
          <div className="border-t border-slate-800 py-3">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, case studies, services…"
                className="w-full rounded-md border border-slate-700 bg-slate-800/60 pl-9 pr-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600 transition"
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
}