"use client";

import { getCountdown, pad2, type CountdownParts } from "@/lib/mission-time";
import { useEffect, useState } from "react";

export function DeadlineCard() {
  const [parts, setParts] = useState<CountdownParts | null>(null);

  useEffect(() => {
    const tick = () => setParts(getCountdown(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="border border-line bg-white p-5">
      <p className="text-sm font-medium text-ink">NASA CSLI submission deadline</p>
      <p className="mt-1 text-sm text-muted">November 19, 2026 · Design &amp; prototyping phase</p>
      <div className="mt-4 grid grid-cols-4 gap-2 text-center">
        {(parts
          ? [
              ["Days", pad2(parts.days)],
              ["Hours", pad2(parts.hours)],
              ["Min", pad2(parts.minutes)],
              ["Sec", pad2(parts.seconds)],
            ]
          : [
              ["Days", "--"],
              ["Hours", "--"],
              ["Min", "--"],
              ["Sec", "--"],
            ]
        ).map(([label, value]) => (
          <div key={label} className="border border-line bg-paper-soft px-2 py-3">
            <div className="font-display text-2xl font-semibold text-ink">{value}</div>
            <div className="mt-1 text-xs text-muted">{label}</div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-muted">
        {parts?.expired
          ? "The submission window has closed."
          : `${parts?.days ?? "—"} days remaining in the development window.`}
      </p>
    </div>
  );
}
