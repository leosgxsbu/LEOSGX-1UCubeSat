import { ContentsBox } from "@/components/ContentsBox";
import { DeadlineCard } from "@/components/DeadlineCard";
import { PageHero } from "@/components/PageHero";
import { MISSION } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mission Overview",
};

export default function HomePage() {
  return (
    <>
      <PageHero
        title="SYSTEM-3 Mission Overview"
        subtitle={`${MISSION.fullName} · Open-source LEO science mission`}
        crumbs={[{ label: "Home" }, { label: "Mission Overview" }]}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-12">
        <ContentsBox
          items={[
            { id: "overview", label: "Challenge overview" },
            { id: "status", label: "Mission status" },
            { id: "objectives", label: "Mission objectives" },
            { id: "explore", label: "Explore the project" },
          ]}
        />

        <article className="prose-page">
          <h2 id="overview">Challenge overview</h2>
          <p>
            <strong>SYSTEM-3</strong> is a 1U CubeSat developed by the{" "}
            {MISSION.org}. The mission will fly a miniaturized gamma-ray
            spectrometer in Low Earth Orbit to measure background cosmic
            radiation and support observation of gamma-ray burst events.
          </p>
          <p>
            The detection chain uses a CsI(Tl) scintillator coupled to a
            Hamamatsu SiPM array, processed by a custom analog front-end and an
            STM32F411 flight computer. Science telemetry is downlinked on{" "}
            {MISSION.frequency} using the {MISSION.protocol} protocol and is
            intended for public reception through the SatNOGS network.
          </p>

          <div className="my-8 not-prose grid gap-3 border border-line bg-paper-soft p-5 text-sm sm:grid-cols-2">
            <p>
              <strong>Mission:</strong> Gamma-ray spectrometry in LEO
            </p>
            <p>
              <strong>Who:</strong> {MISSION.org}
            </p>
            <p>
              <strong>Platform:</strong> 1U CubeSat ({MISSION.callsign})
            </p>
            <p>
              <strong>Deadline:</strong> {MISSION.deadlineLabel} (NASA CSLI)
            </p>
            <p>
              <strong>Status:</strong> {MISSION.status}
            </p>
            <p>
              <strong>License:</strong> MIT (open hardware &amp; software)
            </p>
          </div>

          <h2 id="status">Mission status</h2>
          <p>
            The team is currently in the design and prototyping phase, working
            toward the NASA CSLI submission cutoff on {MISSION.deadlineLabel}.
          </p>
          <div className="not-prose my-6 max-w-xl">
            <DeadlineCard />
          </div>

          <h2 id="objectives">Mission objectives</h2>
          <ul>
            <li>
              Deploy a compact CsI(Tl) + SiPM gamma-ray spectrometer in a 1U form
              factor
            </li>
            <li>
              Demonstrate reliable onboard processing with an STM32F411 flight
              computer
            </li>
            <li>
              Broadcast unencrypted public science telemetry on the UHF amateur
              space band
            </li>
            <li>
              Publish CAD, electronics, firmware, and documentation as an open
              repository
            </li>
          </ul>

          <h2 id="explore">Explore the project</h2>
          <p>Use the sections below to open each project area on its own page.</p>
        </article>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            {
              href: "/architecture",
              title: "Architecture",
              body: "Six-layer PCB stack and hardware registry.",
            },
            {
              href: "/repository",
              title: "Repository",
              body: "CAD, electrical, firmware, and research folders.",
            },
            {
              href: "/ground-station",
              title: "Ground Station",
              body: "RF downlink specs and SatNOGS reception notes.",
            },
            {
              href: "/collaborate",
              title: "Collaborate",
              body: "Department location and contact form for partners.",
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="block border border-line bg-white p-5 no-underline hover:border-accent"
            >
              <h3 className="font-display text-lg font-semibold text-ink">{card.title}</h3>
              <p className="mt-1 text-sm text-muted">{card.body}</p>
              <p className="mt-3 text-xs text-link">Open page →</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
