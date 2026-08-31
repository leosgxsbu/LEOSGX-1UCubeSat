import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const readmePath = join(root, "README.md");

const DEADLINE = new Date("2026-11-19T23:59:59");
const START = new Date("2026-08-19T00:00:00");
const now = new Date();

const msLeft = DEADLINE.getTime() - now.getTime();
const daysLeft = msLeft > 0 ? Math.ceil(msLeft / (1000 * 60 * 60 * 24)) : 0;
const expired = msLeft <= 0;

const totalMs = DEADLINE.getTime() - START.getTime();
const elapsedMs = Math.min(Math.max(now.getTime() - START.getTime(), 0), totalMs);
const progressPct = Math.round((elapsedMs / totalMs) * 100);

const statusLine = expired
  ? "CSLI submission window closed"
  : `${daysLeft} day${daysLeft === 1 ? "" : "s"} until NASA CSLI proposal deadline`;

const badgeLabel = expired ? "CSLI_CLOSED" : `${daysLeft}_DAYS_LEFT`;
const badgeColor = expired ? "lightgrey" : daysLeft <= 14 ? "red" : daysLeft <= 45 ? "orange" : "blue";

const block = `<!-- deadline:begin -->
**NASA CSLI proposal deadline:** November 19, 2026 · **${statusLine}** · development window ~${progressPct}% elapsed

[![CSLI deadline](https://img.shields.io/badge/${badgeLabel}-${encodeURIComponent(
  expired ? "November 19, 2026" : `November 19, 2026`,
)}/${badgeColor}?style=for-the-badge)](https://www.nasa.gov/directorates/stmd/launch-services/cubesat-launch-initiative/)
<!-- deadline:end -->`;

let readme = readFileSync(readmePath, "utf8");
const pattern = /<!-- deadline:begin -->[\s\S]*?<!-- deadline:end -->/;

if (!pattern.test(readme)) {
  console.error("README deadline markers not found");
  process.exit(1);
}

readme = readme.replace(pattern, block);
writeFileSync(readmePath, readme);
console.log(statusLine);
