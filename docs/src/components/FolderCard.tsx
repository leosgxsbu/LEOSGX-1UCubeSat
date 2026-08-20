import { Folder } from "lucide-react";
import Link from "next/link";
import type { RepoFolder } from "@/lib/constants";

export function FolderCard({ folder }: { folder: RepoFolder }) {
  return (
    <Link
      href={`/repository/${folder.slug}`}
      className="group block border border-line bg-white p-5 no-underline transition-colors hover:border-accent"
    >
      <div className="flex items-start gap-3">
        <Folder className="mt-0.5 h-6 w-6 shrink-0 text-accent" strokeWidth={1.5} />
        <div>
          <h3 className="font-display text-lg font-semibold text-ink group-hover:text-accent-dark">
            {folder.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{folder.summary}</p>
          <p className="mt-3 text-xs text-link">Open folder →</p>
        </div>
      </div>
    </Link>
  );
}
