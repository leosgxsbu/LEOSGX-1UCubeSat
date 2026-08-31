import type { Metadata } from "next";
import { Space_Grotesk, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SpaceBackdrop } from "@/components/SpaceBackdrop";
import { GITHUB_PAGES_URL, PROJECT_NAME } from "../../site.config";
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
    default: `${PROJECT_NAME} — Stony Brook Nanosatellite Division`,
    template: `%s · ${PROJECT_NAME}`,
  },
  description:
    `Official project site for ${PROJECT_NAME}, a 1U gamma-ray spectrometer CubeSat developed by the Stony Brook University Nanosatellite Division.`,
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
