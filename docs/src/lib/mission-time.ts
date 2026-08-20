import { TIMELINE } from "./constants";

export type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
  expired: boolean;
};

export function getCountdown(now: Date = new Date()): CountdownParts {
  const totalMs = TIMELINE.deadline.getTime() - now.getTime();
  if (totalMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0, expired: true };
  }
  const days = Math.floor(totalMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalMs / (1000 * 60)) % 60);
  const seconds = Math.floor((totalMs / 1000) % 60);
  return { days, hours, minutes, seconds, totalMs, expired: false };
}

/** Progress through AUG 19 → NOV 19 prototyping window (0–1). */
export function getTimelineProgress(now: Date = new Date()): number {
  const start = TIMELINE.start.getTime();
  const end = TIMELINE.deadline.getTime();
  const t = now.getTime();
  if (t <= start) return 0;
  if (t >= end) return 1;
  return (t - start) / (end - start);
}

export function formatStatusLog(now: Date = new Date()): string {
  const { days, expired } = getCountdown(now);
  const stamp = now.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  if (expired) {
    return `Status: Submission window closed · ${stamp}`;
  }
  return `Status: Nominal · ${days} days remaining until NASA CSLI deadline · ${stamp}`;
}

export function pad2(n: number): string {
  return n.toString().padStart(2, "0");
}
