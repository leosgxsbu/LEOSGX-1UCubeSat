import { FolderCard } from "@/components/FolderCard";
import { PageHero } from "@/components/PageHero";
import { GITHUB_BASE, REPO_FOLDERS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Repository",
};

export default function RepositoryPage() {
  return (
    <>
      <PageHero
        title="Repository"
        subtitle="Open a folder to view files and download links for that subsystem."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Repository" },
        ]}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-12">
        <p className="mb-6 text-sm text-muted">
          Each folder opens on its own page. Source files are hosted in the
          public GitHub repository.{" "}
          <a href={GITHUB_BASE} target="_blank" rel="noopener noreferrer">
            View repository root
          </a>
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {REPO_FOLDERS.map((folder) => (
            <FolderCard key={folder.slug} folder={folder} />
          ))}
        </div>
      </div>
    </>
  );
}
