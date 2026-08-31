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
        subtitle={`${MISSION.codename} internal stack — 95.0 × 95.0 mm decks`}
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
            The {MISSION.codename} bus uses PCBs as load-bearing tiers inside a{" "}
            {MISSION.envelope} aluminum chassis. Decks are spaced on M3 stainless threaded
            rods with dual 40-pin 2.54 mm stacking headers on the left and right edges for
            power and signal distribution.
          </p>
          <p>
            <strong>Build status (Aug 11, 2026 proposal):</strong> mechanical integration
            of Stages 3–6 is in progress; Stages 1–2 payload front-end integration is
            planned after power and deployment loops are verified.
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
