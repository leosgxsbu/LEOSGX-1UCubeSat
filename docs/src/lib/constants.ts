/** Shared mission & repository constants for SYSTEM-3 / LEO-GRM */

import {
  GITHUB_BASE,
  GITHUB_OWNER,
  GITHUB_REPO,
  PAGES_BASE_PATH,
} from "../../site.config";

export { GITHUB_BASE, GITHUB_OWNER, GITHUB_REPO, PAGES_BASE_PATH };

export const MISSION = {
  codename: "SYSTEM-3",
  callsign: "LEO-GRM",
  fullName: "1U Gamma-Ray Spectrometer CubeSat",
  org: "Stony Brook University Nanosatellite Division",
  department: "Stony Brook University Department of Physics and Astronomy",
  addressLines: [
    "Department of Physics and Astronomy",
    "Stony Brook University",
    "Stony Brook, NY 11794-3800",
  ],
  contactEmail: "muhammad.maalik@stonybrook.edu",
  frequency: "437.025 MHz",
  baud: "9600 Baud GFSK",
  protocol: "AX.25",
  chemistry: "LiFePO4",
  propulsion: "Passive PMAC",
  status: "In Development",
  deadlineLabel: "November 19, 2026",
} as const;

export const TIMELINE = {
  start: new Date("2026-08-19T00:00:00"),
  deadline: new Date("2026-11-19T23:59:59"),
  totalDays: 92,
} as const;

export const GITHUB_TREE = `${GITHUB_BASE}/tree/main`;

export const NAV_LINKS = [
  { href: "/", label: "Overview" },
  { href: "/architecture", label: "Architecture" },
  { href: "/repository", label: "Repository" },
  { href: "/ground-station", label: "Ground Station" },
  { href: "/collaborate", label: "Collaborate" },
] as const;

export type RepoFolder = {
  slug: string;
  title: string;
  summary: string;
  paths: string[];
  hrefs: string[];
};

export const REPO_FOLDERS: RepoFolder[] = [
  {
    slug: "cad",
    title: "CAD Models",
    summary: "STEP assemblies and STL structural prints for the 1U bus and payload enclosure.",
    paths: ["/CAD/"],
    hrefs: [`${GITHUB_TREE}/CAD`],
  },
  {
    slug: "electrical",
    title: "Electrical Design",
    summary: "PCB schematics, layout source files, and manufacturing Gerber packages.",
    paths: ["/EasyEDA Pro/", "/Gerber Files/"],
    hrefs: [`${GITHUB_TREE}/EasyEDA%20Pro`, `${GITHUB_TREE}/Gerber%20Files`],
  },
  {
    slug: "firmware",
    title: "Flight Firmware",
    summary: "STM32 flight software, system loops, and ground-support scripts.",
    paths: ["/Code/"],
    hrefs: [`${GITHUB_TREE}/Code`],
  },
  {
    slug: "compliance",
    title: "Compliance Documents",
    summary: "Mission proposals, IARU coordination materials, and FCC onboarding documents.",
    paths: ["/Proposal/", "/IARU Frequency/"],
    hrefs: [`${GITHUB_TREE}/Proposal`, `${GITHUB_TREE}/IARU%20Frequency`],
  },
  {
    slug: "physics",
    title: "Physics Analysis",
    summary: "Beer-Lambert attenuation models, orbital notes, and RF link budgets.",
    paths: ["/Physics/"],
    hrefs: [`${GITHUB_TREE}/Physics`],
  },
  {
    slug: "research",
    title: "Research Library",
    summary: "Trade studies, vendor datasheets, and supporting literature.",
    paths: ["/Research/"],
    hrefs: [`${GITHUB_TREE}/Research`],
  },
];

export const PCB_STAGES = [
  {
    id: 1,
    name: "Science Payload Deck",
    hardware: [
      "CsI(Tl) scintillator crystal (50×50×3 mm)",
      "Hamamatsu SiPM array (C3015822)",
    ],
    dims: "95.0 × 95.0 mm",
  },
  {
    id: 2,
    name: "Analog Front-End",
    hardware: [
      "LTC6227 low-noise op-amp",
      "CLC high-frequency pi noise filter",
    ],
    dims: "95.0 × 95.0 mm",
  },
  {
    id: 3,
    name: "Core Flight Computer",
    hardware: [
      "STM32F411RET6 100 MHz ARM core",
      "EXTI10 background interrupts",
    ],
    dims: "95.0 × 95.0 mm",
  },
  {
    id: 4,
    name: "EPS Power Manager",
    hardware: [
      "Texas Instruments BQ25713 buck-boost",
      "I2C MPPT solar charger",
    ],
    dims: "95.0 × 95.0 mm",
  },
  {
    id: 5,
    name: "Battery Ballast Floor",
    hardware: [
      "Dual 18650 LiFePO4 series cells",
      "RFM95W UHF transceiver",
    ],
    dims: "95.0 × 95.0 mm",
  },
  {
    id: 6,
    name: "Antenna Deployment Deck",
    hardware: [
      "16.3 cm spring-steel tape-measure dipole",
      "10 Ω 1 W thermal burn actuator",
    ],
    dims: "95.0 × 95.0 mm",
  },
] as const;
