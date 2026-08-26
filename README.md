<div align="center">

# 🛰️ 1U-CubeSat — SYSTEM-3

### Stony Brook University 

**Open-Source Gamma-Ray Spectrometer CubeSat &nbsp;|&nbsp; LEO Mission**

[![Mission Status](https://img.shields.io/badge/MISSION-IN%20DEVELOPMENT-orange?style=for-the-badge&logo=satellite&logoColor=white)](#)
[![License](https://img.shields.io/badge/LICENSE-MIT-green?style=for-the-badge)](#)
[![Deadline](https://img.shields.io/badge/DEADLINE-NOV%2019%202026-red?style=for-the-badge)](#)
[![Website](https://img.shields.io/badge/WEBSITE-LIVE-blue?style=for-the-badge)](https://leosgxsbu.github.io/LEOSGX-1UCubeSat/)

---

### 🚀 MISSION PROGRESS — DEADLINE: NOVEMBER 19, 2026

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=16&duration=3000&pause=1000&color=FF9900&center=true&vCenter=true&width=600&lines=%F0%9F%9B%B0%EF%B8%8F+SYSTEM-3+IN+DEVELOPMENT...;PAYLOAD+%E2%94%82+CsI(Tl)+Scintillator+%2B+SiPM+Array;COMMS+%E2%94%82+437.025+MHz+UHF+%7C+AX.25+%7C+9600+Baud;OBC+%E2%94%82+STM32F411+Flight+Computer;EPS+%E2%94%82+BQ25713+MPPT+Solar+Charger;TARGET+%E2%94%82+Low+Earth+Orbit+Deployment">
  <img alt="Typing SVG" src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=16&duration=3000&pause=1000&color=FF9900&center=true&vCenter=true&width=600&lines=%F0%9F%9B%B0%EF%B8%8F+SYSTEM-3+IN+DEVELOPMENT...;PAYLOAD+%E2%94%82+CsI(Tl)+Scintillator+%2B+SiPM+Array;COMMS+%E2%94%82+437.025+MHz+UHF+%7C+AX.25+%7C+9600+Baud;OBC+%E2%94%82+STM32F411+Flight+Computer;EPS+%E2%94%82+BQ25713+MPPT+Solar+Charger;TARGET+%E2%94%82+Low+Earth+Orbit+Deployment" />
</picture>

```
  LAUNCH WINDOW                                                    DEADLINE
  AUG 25 ──────────────────────────────────────────────── NOV 19, 2026
  ┃██████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░┃
  ┃              🛰️ ───▶                                          🏁┃
  ┃   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░┃
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
       PHASE: DESIGN & PROTOTYPING          ~85 DAYS REMAINING
```

**🌐 Project website:** [leosgxsbu.github.io/LEOSGX-1UCubeSat](https://leosgxsbu.github.io/LEOSGX-1UCubeSat/)

---

</div>

## 📡 Mission Overview

**SYSTEM-3** is a 1U CubeSat being developed by the Stony Brook University. The primary mission objective is to deploy a miniaturized gamma-ray spectrometer into Low Earth Orbit (LEO) to measure background cosmic radiation and map gamma-ray burst events in real-time.

The satellite uses a **CsI(Tl) scintillator crystal** coupled with a **Hamamatsu SiPM array** to detect incoming gamma photons. The analog signal chain feeds into a custom pico-spectrometer board, processed by an **STM32F411** flight computer, and downlinked via a **437.025 MHz UHF** amateur radio link using the AX.25 protocol.

All telemetry is broadcast unencrypted as public science data, integrating with the global **SatNOGS** ground station network.

---

## 🏗️ 6-Layer PCB Stack Architecture

| Layer | Dimensions | Subsystem |
|-------|-----------|-----------|
| **STAGE 1** | 95.0 × 95.0 mm | CsI(Tl) Scintillator Crystal Sheet (50×50×3mm) & Hamamatsu SiPM Array (C3015822) |
| **STAGE 2** | 95.0 × 95.0 mm | Analog Front-End Pico Spectrometer (LTC6227 Low-Noise Op-Amp / Noise Filtering) |
| **STAGE 3** | 95.0 × 95.0 mm | C&DH Flight Core (STM32F411RET6 / EXTI10 Hardware Interrupt Mode) |
| **STAGE 4** | 95.0 × 95.0 mm | EPS Solar Power Manager (TI BQ25713 Buck-Boost I2C MPPT Charger) |
| **STAGE 5** | 95.0 × 95.0 mm | Ballast Floor (Dual 18650 LiFePO4 2S1P & RFM95W UHF Transceiver) |
| **STAGE 6** | 95.0 × 95.0 mm | Antenna Deployment Deck (Tape-Measure Dipole & 10Ω 1W Actuator) |

---

## 📂 Repository Structure

```
LEOSGX-1UCubeSat/
├── CAD/                 # 3D models — Fusion 360 STEP assemblies, STL prints
├── EasyEDA Pro/         # PCB schematics & layout source files
├── Gerber Files/        # Manufacturing-ready Gerber & drill files
├── Proposal/            # Mission proposals, IARU applications, FCC forms
├── Research/            # Literature reviews, trade studies, references
├── Physics/             # Orbital mechanics, radiation models, link budgets
├── Code/                # Flight firmware, ground station scripts
├── Materials/           # BOM, vendor datasheets, procurement logs
├── docs/                # Next.js project website (GitHub Pages source)
├── .github/workflows/   # GitHub Pages deploy action
├── LICENSE              # MIT License
└── README.md            # ← You are here
```

---

## 📻 RF Downlink Specifications

| Parameter | Value |
|-----------|-------|
| **Channel Frequency** | 435.00 - 438.00 MHz UHF Frequency Channel (Pending) |
| **Communication Protocol** | Half-Duplex AX.25 (9600 Baud / GFSK -- Gaussian) |
| **Ground Network** | SatNOGS Platform --  |
| **Security** | Uplinks Encrypted, Downlinks OpenSourced -- Streame on SatNOGS |

---

## 🛠️ Getting Started

```bash
# Clone the repository
git clone https://github.com/leosgxsbu/LEOSGX-1UCubeSat.git
cd LEOSGX-1UCubeSat

# Browse the hardware designs
ls CAD/
ls "Gerber Files/"

# Run the project website locally
cd docs
npm install
npm run dev

# Flash firmware (STM32)
cd ../Code/
# Use STM32CubeIDE or PlatformIO to build & upload
```

---

## 🤝 Contributing

This is an open-source satellite project. Contributions are welcome across all subsystems — hardware design, firmware, ground station software, documentation, and testing.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Open a Pull Request

**Contact:** [muhammad.maalik@stonybrook.edu](mailto:muhammad.maalik@stonybrook.edu)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**STONY BROOK UNIVERSITY  //**

*Mission Code: LEO-GRM &nbsp;|&nbsp; Gamma-Ray Spectrometer CubeSat*

Department of Physics and Astronomy · Stony Brook University · Stony Brook, NY 11794-3800

</div>
