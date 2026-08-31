import type { Metadata } from "next";
import { Space_Grotesk, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SpaceBackdrop } from "@/components/SpaceBackdrop";
import { GITHUB_PAGES_URL, PROJECT_NAME, PROJECT_SUBTITLE } from "../../site.config";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(GITHUB_PAGES_URL),
  title: {
    default: `${PROJECT_NAME} — ${PROJECT_SUBTITLE}`,
    template: `%s · ${PROJECT_NAME}`,
  },
  description:
    "LEO-GRM: Stony Brook University 1U CubeSat proposal for a cosmic gamma-ray burst observatory with open SatNOGS telemetry.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col">
        <SpaceBackdrop />
        <SiteHeader />
        <main className="relative z-10 flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
