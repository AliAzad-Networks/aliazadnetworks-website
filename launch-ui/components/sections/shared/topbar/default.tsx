"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Search, User, ChevronDown, X, LogIn, KeyRound, UserPlus } from "lucide-react";

import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Config                                                             */
/* ------------------------------------------------------------------ */

const QUICK_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
  { label: "Support", href: "/contact" },
];

const AUTH_LINKS = [
  { label: "Login", href: "/login", icon: LogIn },
  { label: "Forgot Password", href: "/forgot-password", icon: KeyRound },
  { label: "New User", href: "/signup", icon: UserPlus },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function TopBar({ className }: { className?: string }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  const loginRef = useRef<HTMLDivElement>(null);

  /* Close dropdown on outside click / Escape */
  useEffect(() => {
    if (!loginOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(e.target as Node)) {
        setLoginOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLoginOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [loginOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
  };

  return (
    <div
      className={cn(
        "sticky top-0 z-60 w-full bg-slate-900 text-slate-300 border-b border-slate-800 -mb-4 px-4",
        className,
      )}
    >
      <div className="max-w-container mx-auto px-4">
        <div className="flex h-10 items-center justify-end gap-6 text-xs">
          {/* -------------------- Quick links -------------------- */}
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

          <Link
            href="/contact"
            className="md:hidden text-slate-300 hover:text-white transition-colors"
          >
            Support
          </Link>

          <div className="hidden lg:block h-4 w-px bg-slate-700" />

          {/* -------------------- Search toggle -------------------- */}
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
            className="flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            {searchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
          </button>

          {/* -------------------- Client Login dropdown -------------------- */}
          <div ref={loginRef} className="relative">
            <button
              type="button"
              onClick={() => setLoginOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={loginOpen}
              className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
            >
              <User className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Client Login</span>
              <span className="sm:hidden">Login</span>
              <ChevronDown
                className={cn(
                  "hidden sm:inline h-3 w-3 opacity-60 transition-transform duration-200",
                  loginOpen && "rotate-180",
                )}
              />
            </button>

            {loginOpen && (
              <div
                role="menu"
                className="absolute right-0 top-full z-[60] mt-2 w-48 overflow-hidden rounded-lg border border-slate-700 bg-slate-900 py-1 shadow-xl ring-1 ring-black/5"
              >
                {AUTH_LINKS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setLoginOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                      <Icon className="h-3.5 w-3.5 opacity-70" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* -------------------- Search panel -------------------- */}
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