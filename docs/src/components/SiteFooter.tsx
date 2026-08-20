import { GITHUB_BASE, MISSION } from "@/lib/constants";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-auto border-t border-line bg-paper-soft">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="font-display text-base font-semibold text-ink">Location</h3>
          <p className="mt-2 text-sm text-muted">
            {MISSION.addressLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div>
          <h3 className="font-display text-base font-semibold text-ink">Program</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link href="/architecture">Architecture</Link>
            </li>
            <li>
              <Link href="/repository">Repository</Link>
            </li>
            <li>
              <Link href="/collaborate">Collaborate</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-base font-semibold text-ink">Open source</h3>
          <p className="mt-2 text-sm text-muted">
            Released under the MIT License.{" "}
            <a href={GITHUB_BASE} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </p>
          <p className="mt-2 text-sm text-muted">
            Contact:{" "}
            <a href={`mailto:${MISSION.contactEmail}`}>{MISSION.contactEmail}</a>
          </p>
        </div>
      </div>
      <div className="border-t border-line px-4 py-4 text-center text-xs text-muted">
        {MISSION.org} · {MISSION.codename} / {MISSION.callsign}
      </div>
    </footer>
  );
}
