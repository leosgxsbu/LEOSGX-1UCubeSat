"use client";

import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="relative z-20 bg-header text-white">
      <div className="border-b border-accent bg-accent px-4 py-2 text-center text-sm text-header">
        NASA CSLI submission deadline:{" "}
        <strong>November 19, 2026</strong>
      </div>

      <div className="mx-auto flex max-w-5xl items-start justify-between gap-4 px-4 py-5 md:px-6">
        <div>
          <Link href="/" className="no-underline hover:no-underline">
            <p className="font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
              SYSTEM-3 · LEO-GRM
            </p>
            <p className="mt-1 text-sm text-white/70">
              Stony Brook University Nanosatellite Division
            </p>
          </Link>
        </div>
        <button
          type="button"
          className="border border-accent bg-accent p-2 text-header md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <nav className="border-t border-white/10">
        <div
          className={`mx-auto max-w-5xl px-4 md:flex md:items-center md:gap-1 md:px-6 ${
            open ? "block" : "hidden md:flex"
          }`}
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block border-b-2 px-3 py-3 text-sm no-underline transition-colors md:inline-block ${
                  active
                    ? "border-accent text-white"
                    : "border-transparent text-white/75 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
