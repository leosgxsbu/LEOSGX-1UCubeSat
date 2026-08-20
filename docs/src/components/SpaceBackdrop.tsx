"use client";

import { backgroundForPath } from "@/lib/backgrounds";
import { usePathname } from "next/navigation";

/** Fixed space photo behind the existing site UI — changes per page. */
export function SpaceBackdrop() {
  const pathname = usePathname() || "/";
  const src = backgroundForPath(pathname);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={src}
        src={src}
        alt=""
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-white/20" />
    </div>
  );
}
