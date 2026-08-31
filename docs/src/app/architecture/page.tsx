import { ContentsBox } from "@/components/ContentsBox";
import { PageHero } from "@/components/PageHero";
import { MISSION, PCB_STAGES } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture",
};

export default function ArchitecturePage() {
  return (
    <>
      <PageHero
        title="Six-Layer PCB Architecture"
        subtitle={`Hardware stages in the ${MISSION.codename} flight stack`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Architecture" },
        ]}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-12">
        <ContentsBox
          items={PCB_STAGES.map((s) => ({
            id: `stage-${s.id}`,
            label: `Stage ${s.id}: ${s.name}`,
          }))}
        />

        <article className="prose-page">
          <p>
            {MISSION.codename} uses a vertical six-board stack. Each stage occupies a 95 ×
            95 mm deck and supports a distinct subsystem from science payload
            through antenna deployment.
          </p>

          <div className="not-prose mt-8 space-y-4">
            {PCB_STAGES.map((stage) => (
              <section
                key={stage.id}
                id={`stage-${stage.id}`}
                className="scroll-mt-24 border border-line bg-white p-5"
              >
                <p className="text-sm font-medium text-accent-dark">
                  Stage {stage.id}
                </p>
                <h2 className="mt-1 font-display text-xl font-semibold text-ink">
                  {stage.name}
                </h2>
                <p className="mt-1 text-sm text-muted">{stage.dims}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink">
                  {stage.hardware.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}
