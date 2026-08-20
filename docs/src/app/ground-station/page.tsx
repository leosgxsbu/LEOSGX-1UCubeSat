import { ContentsBox } from "@/components/ContentsBox";
import { PageHero } from "@/components/PageHero";
import { MISSION } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ground Station",
};

export default function GroundStationPage() {
  return (
    <>
      <PageHero
        title="Ground Station & Open Data"
        subtitle="How operators can receive SYSTEM-3 UHF downlinks"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Ground Station" },
        ]}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-12">
        <ContentsBox
          items={[
            { id: "specs", label: "RF specifications" },
            { id: "receive", label: "How to receive" },
            { id: "satnogs", label: "SatNOGS integration" },
          ]}
        />

        <article className="prose-page">
          <h2 id="specs">RF specifications</h2>
          <div className="not-prose overflow-x-auto">
            <table className="w-full border-collapse border border-line bg-white text-left text-sm">
              <tbody>
                {[
                  ["Frequency", MISSION.frequency],
                  ["Modulation", MISSION.baud],
                  ["Protocol", `${MISSION.protocol} half-duplex`],
                  ["Encryption", "None — public science telemetry"],
                  ["Band", "UHF amateur space band"],
                  ["Ground network", "SatNOGS"],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-line">
                    <th className="w-48 bg-paper-soft px-3 py-2.5 font-medium text-ink">
                      {k}
                    </th>
                    <td className="px-3 py-2.5 text-muted">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="receive">How to receive</h2>
          <p>
            Licensed amateur radio operators may decode the unencrypted downlink
            with a software-defined radio. A typical workflow is:
          </p>
          <ol className="list-decimal space-y-1 pl-5 text-ink">
            <li>Tune to {MISSION.frequency}</li>
            <li>Demodulate GFSK at 9600 baud</li>
            <li>Decode AX.25 UI frames</li>
            <li>Forward observations to SatNOGS where applicable</li>
          </ol>

          <h2 id="satnogs">SatNOGS integration</h2>
          <p>
            SYSTEM-3 is designed so public science packets can enter the global
            SatNOGS observation architecture. Ground station partners interested
            in contributing reception coverage are welcome to contact the team
            through the Collaborate page.
          </p>
        </article>
      </div>
    </>
  );
}
