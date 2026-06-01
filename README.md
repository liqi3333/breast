<div align="center">
  <img src="assets/icon.png" alt="Breast TNM Tool icon" width="128" height="128" />
  <h1>Breast TNM Tool</h1>
  <p><strong>AJCC 8th breast cancer anatomic/prognostic staging and treatment follow-up decision support, with desktop, desktop web, and mobile web delivery.</strong></p>
  <p>
    <a href="README.zh-CN.md">简体中文</a> | <strong>English</strong>
  </p>

  <p>
    <a href="https://github.com/liqi3333/breast/releases/latest"><img alt="Latest Release" src="https://img.shields.io/github/v/release/liqi3333/breast?display_name=tag&label=release" /></a>
    <a href="https://github.com/liqi3333/breast/releases"><img alt="Downloads" src="https://img.shields.io/github/downloads/liqi3333/breast/total?label=downloads" /></a>
  </p>

  <p>
    <a href="https://liqi3333.github.io/breast/"><img alt="Open Online HTML" src="https://img.shields.io/badge/Open-Online%20HTML-0ea5e9?style=for-the-badge" /></a>
    <a href="https://liqi3333.github.io/breast/mobile.html"><img alt="Open Mobile Web" src="https://img.shields.io/badge/Open-Mobile%20Web-f59e0b?style=for-the-badge" /></a>
    <a href="https://github.com/liqi3333/breast/releases/latest"><img alt="Download Latest EXE" src="https://img.shields.io/badge/Download-Latest%20EXE-e91e63?style=for-the-badge" /></a>
    <a href="https://github.com/liqi3333/breast/releases/latest"><img alt="Download Latest HTML" src="https://img.shields.io/badge/Download-Latest%20HTML-10b981?style=for-the-badge" /></a>
  </p>
</div>

## Overview

This repository packages a single-file clinical interface for breast cancer staging and treatment support into three delivery forms:

- Windows portable EXE
- desktop standalone HTML / GitHub Pages web app
- mobile standalone HTML

The latest desktop web update is **v1.4.1 (reviewed)**, focused on AJCC 8th edition staging and comprehensive treatment follow-up decision support.

## What's new in v1.4.1 (reviewed update)

**Review date:** 2026-06-01

### Clinical Review & Safety
- Content reviewed against NCCN/CSCO/ASCO 2024-2026 guidelines
- In-UI audit note with clinical safety disclaimer and review date
- HER2-low/ultralow correctly framed as treatment-selection markers (not AJCC staging variables)
- Inconsistency warning when HER2-positive is selected alongside HER2-low/ultralow/0

### Treatment Updates
- HR+/HER2-: added ribociclib adjuvant intensification note alongside CDK4/6 inhibitor pathways
- ESR1 mutation: vepdegestrant and novel ER degraders direction added
- HER2+: T-DXd expanded indications for select first-line metastatic, neoadjuvant, and residual disease settings with ILD/pneumonitis monitoring
- HER2-low/ultralow: T-DXd in HR+/HER2-low/ultralow pretreated advanced settings
- HR+/HER2- pretreated advanced: dato-DXd as new ADC option
- TNBC: dato-DXd in PD-1/PD-L1-ineligible metastatic TNBC; PD-L1 unknown now prompts testing rather than defaulting to immunotherapy ineligible

### Drug Pool Expansions
- Added **datopotamab deruxtecan (dato-DXd)** to Chinese and English drug pools
- Added **vepdegestrant** to endocrine/ER pathway drug pool
- Retained all prior agents: T-DM1, T-DXd, sacituzumab govitecan, CDK4/6, PARP, PI3K/AKT

### Core Features (from v1.4.0)

#### Staging & Prognostic Classification
- AJCC 8th anatomic staging (Table 8) with proper handling of T1mi, N1mi, N3, M0(i+)
- Clinical & Pathologic prognostic staging (Tables 9-10) based on T/N/M group, grade, HER2, ER, PR
- Post-neoadjuvant cTNM/pTNM/ycTNM/ypTNM with pCR notation
- HER2 equivocal handling per AJCC

#### Biomarkers & Receptor Subtypes
- Auto-infer Luminal subtype (A/B HER2-, B HER2+, HER2-enriched, TNBC)
- Ki-67 intermediate zone (10-19%) flagged for MDT discussion
- HER2-low/ultralow, PD-L1 CPS, BRCA, PIK3CA, ESR1 testing for advanced therapy

#### Treatment & Management
- Color-coded decision cards (yes/maybe/no) for surgery, chemo, endocrine, targeted, immunotherapy, PARP
- Regimen tables for HR+/HER2-, HER2+, TNBC, CDK4/6, anti-HER2, immunotherapy
- Drug pools organized by category with stage-specific systemic therapy guidance
- Oncotype DX RS interpretation, MammaPrint risk stratification

#### Multilingual & Export
- Full bilingual English/Chinese interface with context-sensitive explanations
- Print/Export: checkbox-based module selection for PDF, Word, Excel output
- Collapsible UI sections, help text toggle, settings modal

## Online HTML Version

- **Desktop web**: <https://liqi3333.github.io/breast/>
- **Mobile web**: <https://liqi3333.github.io/breast/mobile.html>
- **Latest release**: <https://github.com/liqi3333/breast/releases/latest>

## Screenshots

### Main Interface

![Breast TNM Tool overview](assets/screenshots/overview.png)

### Decision Support Panel

![Breast TNM Tool treatment plan](assets/screenshots/treatment-plan.png)

## Quick Start

### Download

From the latest release you can download:

- Windows portable EXE (electron-based)
- Desktop standalone HTML (single-file, no build required)
- Mobile standalone HTML (responsive, touch-friendly)

### Run locally

```bash
git clone https://github.com/liqi3333/breast.git
cd breast
npm install
npm start
```

Opens at `http://localhost:3000`.

### Build Windows portable EXE

```bash
npm run build:win
# Output: dist/Breast-TNM-Tool-1.4.1.exe
```

### Build standalone HTML

```bash
npm run build:html
# Output:
# dist-html/Breast-TNM-Tool-1.4.1.html
# dist-html/Breast-TNM-Tool-mobile-1.4.1.html
```

## Release Automation

- **Push to `main`**: GitHub Actions validates build and uploads workflow artifacts
- **Push a tag** like `v1.4.1`: automatically builds EXE, generates standalone HTML, creates GitHub Release, uploads all assets

Example:

```bash
git tag v1.4.1
git push origin v1.4.1
```

## Project Structure

```text
.
├── assets/
│   ├── icon.ico
│   ├── icon.png
│   └── screenshots/
├── docs/
│   ├── CHANGELOG.md
│   └── RELEASE_TEMPLATE.md
├── scripts/
│   ├── build-html-release.js
│   └── capture-screenshots.js
├── index.html                  # Desktop web version
├── mobile.html                 # Mobile web version
├── main.js                     # Electron entry point
├── package.json
├── README.md
├── README.zh-CN.md
└── .github/workflows/
    ├── build-windows.yml
    └── release.yml
```

## Notes

- `node_modules/`, `dist/`, and `dist-html/` are not committed
- Windows SmartScreen may appear because the EXE is not code signed
- **Disclaimer**: Medical content is for informational/educational use only and does not replace formal pathology review, MDT discussion, or clinical decision-making by qualified healthcare professionals
- All treatment regimens are schematic; actual dosing, scheduling, and drug selection require professional oncology judgment
