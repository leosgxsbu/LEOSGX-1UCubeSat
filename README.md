# LEO-GRM — 1U Cosmic Gamma-Ray Burst Nanosatellite Observatory

**Low-Earth Orbit Gamma-Ray Mapping (LEO-GRM)** · Stony Brook University

Jackson Boyle, Christian Tumanda, Muhammad Maalik · Project proposal draft (July 31, 2026)

[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![Website](https://img.shields.io/badge/website-GitHub_Pages-blue?style=flat-square)](https://leosgxsbu.github.io/Psi_Sat-1U-CubeSat-/)
[![Status](https://img.shields.io/badge/status-pre--flight_design-orange?style=flat-square)](#regulatory-pipeline)

<!-- deadline:begin -->
**NASA CSLI proposal deadline:** November 19, 2026 · **81 days until NASA CSLI proposal deadline** · development window ~13% elapsed

[![CSLI deadline](https://img.shields.io/badge/81_DAYS_LEFT-November%2019%2C%202026/blue?style=for-the-badge)](https://www.nasa.gov/directorates/stmd/launch-services/cubesat-launch-initiative/)
<!-- deadline:end -->

**Website:** https://leosgxsbu.github.io/Psi_Sat-1U-CubeSat-/

---

## Overview

LEO-GRM is a student-led 1U CubeSat project to build a compact observatory for soft gamma rays and hard X-rays in low Earth orbit. The payload uses a **50 × 50 × 3 mm CsI(Tl)** scintillator read out by a **Hamamatsu S13360-6050PE SiPM array**, with pulse timing logged on an **STM32F411RET6** flight computer. Science telemetry is intended for public release through **SatNOGS**.

Primary engineering envelope:

| Parameter | Value |
|-----------|-------|
| Form factor | 1U CubeSat |
| External envelope | 100.0 × 100.0 × 113.5 mm |
| Mass limit (CSLI) | 1.33 kg |
| Chassis material | Aluminum 6061-T6 |
| Nominal orbit | LEO, ~420 km altitude |
| Attitude | Passive magnetic attitude control (PMAC) |

The scintillator faces away from Earth using a permanent magnet aligned with the geomagnetic field, with mu-metal hysteresis rods for damping.

---

## Detection performance (proposal targets)

| Item | Value |
|------|-------|
| Energy band | 30 keV – 300 keV (soft gamma / hard X-ray) |
| Crystal thickness | 3 mm CsI(Tl) |
| Beer–Lambert absorption (100 keV, μ = 6.21 cm⁻¹) | α ≈ 84.5% |
| Photons per keV (crystal yield) | ~54 photons/keV (~550 nm) |
| Energy conversion efficiency (green photons) | η ≈ 12.15% |
| Fluence detection threshold | 10⁻⁶ erg/cm² (event duration) |
| Software trigger | 5σ over rolling background: `Trigger = Mean + 5σ` |
| Projected detections | ~10–20 soft GRBs/year in LEO |

**Beer–Lambert absorption:**

```
α = 1 - I/I₀ = 1 - e^(-μx)
α = 1 - e^(-6.21 cm⁻¹ × 0.3 cm) ≈ 84.5%
```

**Energy efficiency (green photons):**

```
η = (54 photons/keV) × [(6.63×10⁻³⁴ J·s)(3×10⁸ m/s) / ((550×10⁻⁹ m)(1.6×10⁻¹⁶ J/keV)] ≈ 12.15%
```

Burst duration is inferred from pulse timing on Stage 2 → EXTI10 interrupts on Stage 3 (short bursts ~1–5 s; longer events up to ~40–60 s in proposal examples).

---

## Six-stage PCB stack (95.0 × 95.0 mm decks)

| Stage | Subsystem | Key hardware |
|-------|-----------|--------------|
| **1** | Science payload deck | 50×50×3 mm CsI(Tl), ESR wrap, Hamamatsu S13360-6050PE SiPM (JLC C42451657), PMAC magnet + mu-metal rods |
| **2** | Front-end digitization | Pico gamma spectrometer: LTC6227HMS8 (LCSC C2924151), C-L-C π-filter on +53 V bias, 2–10 mV → 3.3 V logic pulse |
| **3** | C&DH flight computer | STM32F411RET6 @ 100 MHz (LCSC C61314), EXTI10 on PA10, 1 µs timestamps, 45 min post-deploy silence |
| **4** | EPS power manager | TI BQ25713 MPPT, GaAs cells on exterior PCBs, +3.3 V / +5.0 V rails |
| **5** | Battery & UHF ballast | 2×18650 LiFePO₄ 2S1P (6.4 V nom), Keystone 1042 clips, Adafruit RFM95W (433 MHz, AX.25 @ 9600 baud GFSK) |
| **6** | Antenna deployment | 16.3 cm tape-measure dipole (437 MHz), 10 Ω / 1 W burn resistor (LCSC C26074), IRLML2502 MOSFET release |

Inter-board bus: dual 40-pin 2.54 mm stacking headers on left and right edges. Stage 1 analog uses a shielded 3-pin jumper off the main bus.

**Current build status (Aug 11, 2026 proposal):** integrated mechanical stack of Stages 3–6; Stages 1–2 payload front-end pending integration.

---

## Communications

| Parameter | Value |
|-----------|-------|
| IARU coordination band (requested) | 435 – 438 MHz |
| Transceiver | Adafruit RFM95W (433 MHz module) |
| Antenna | Deployable 16.3 cm quarter-wave dipole (~437 MHz target) |
| Modulation / framing | GFSK, 9600 baud, AX.25 UI frames |
| Downlink | Open science telemetry (SatNOGS) |
| Uplink | Encrypted telecommand (rolling-code signature per proposal) |

---

## Regulatory pipeline

| Step | Document / action | Notes |
|------|-------------------|-------|
| IARU | Amateur satellite frequency coordination | 435–438 MHz; faculty advisor signature; ~6–12 month lead time |
| NASA CSLI | Technical flight proposal | Submit by **November 2026**; selection around March; ~1–2 years to build if selected |
| FCC | Part 5 experimental license (Form 442 via CORES) | Faculty trustee submission |
| Debris | NASA DAS → ODAR | Demonstrate atmospheric burn-up within 5 years of decommission |

Launch safety items from the proposal: **45-minute** mandatory post-deploy RF silence, deployment kill switches on rails, Al 6061-T6 structure.

---

## Repository layout

```
Psi_Sat-1U-CubeSat-/
├── CAD/                 # Fusion 360 assemblies, mechanical envelope
├── EasyEDA Pro/         # PCB schematics and layouts (Stages 1–6)
├── Gerber Files/        # Manufacturing outputs
├── Proposal/            # Mission proposals and reports
├── IARU Frequency/      # IARU coordination request
├── Research/            # References and trade studies
├── Physics/             # Detection models, link budgets
├── Code/                # STM32 firmware (C++)
├── Materials/           # BOM and procurement
├── docs/                # Project website (Next.js → GitHub Pages)
└── .github/workflows/   # Pages deploy + README deadline refresh
```

---

## Run locally

```bash
git clone https://github.com/leosgxsbu/Psi_Sat-1U-CubeSat-.git
cd Psi_Sat-1U-CubeSat-

cd docs && npm install && npm run dev
```

Open http://localhost:3000

---

## Contributing

Open issues or pull requests for hardware, firmware, documentation, or ground-station support.

**Contact:** [muhammad.maalik@stonybrook.edu](mailto:muhammad.maalik@stonybrook.edu)

---

## License

MIT License — see [LICENSE](LICENSE).

---

Stony Brook University · Department of Physics and Astronomy · Stony Brook, NY 11794-3800
