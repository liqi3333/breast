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

The latest desktop web update is **v1.4.0**, focused on AJCC 8th edition staging and comprehensive treatment follow-up decision support.

## What's new in v1.4.0

### Staging & Prognostic Classification
- **AJCC 8th anatomic staging** (Table 8): T1-4, N0-3, M0-1 combinations with proper handling of T1mi, N1mi, N3 and M0(i+)
- **Clinical & Pathologic prognostic staging** (Tables 9-10): automatic lookup based on T/N/M group, grade, HER2, ER, PR
- **Post-neoadjuvant support**: cTNM/pTNM/ycTNM/ypTNM with proper pCR notation (ypT0/is ypN0 does not assign stage group)
- **HER2 equivocal handling**: automatically treats as negative per AJCC, with alert for formal reassessment

### Biomarkers & Receptor Subtypes
- Auto-infer Luminal subtype (A/B HER2-, B HER2+, HER2-enriched, TNBC) from ER/PR/HER2/Ki-67/Grade
- Ki-67 intermediate zone (10-19%) explicitly flagged for MDT discussion
- HER2-low/ultralow, PD-L1 CPS, genotypic testing (BRCA, PIK3CA, ESR1) for advanced therapy hints

### Treatment & Management
- **Direct recommendations**: color-coded decision cards (yes/maybe/no) for surgery, chemotherapy, endocrine, targeted, immunotherapy, PARP
- **Regimen tables**: HR+/HER2-, HER2+, TNBC-specific chemotherapy, CDK4/6, anti-HER2, immunotherapy, post-neoadjuvant escalation/de-escalation options
- **Drug pools**: organized by category (chemo, endocrine, anti-HER2/ADC, targeted, immunotherapy, bone support)
- **Early vs. metastatic branching**: M1 triggers IV-stage pathway with stage-specific systemic therapy guidance
- **Genomic intelligence**: Oncotype DX RS interpretation, MammaPrint risk stratification, PARP/CDK4/6 eligibility assessment

### Multilingual & Export
- **Bilingual**: Full English/Chinese interface with context-sensitive explanations
- **Print/Export settings**: checkbox-based module selection for PDF, Word, Excel output
- **Collapsible UI**: section collapse, help text toggle, settings modal for customization

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
# Output: dist/Breast-TNM-Tool-1.4.0.exe
```

### Build standalone HTML

```bash
npm run build:html
# Output:
# dist-html/Breast-TNM-Tool-1.4.0.html
# dist-html/Breast-TNM-Tool-mobile-1.4.0.html
```

## Release Automation

- **Push to `main`**: GitHub Actions validates build and uploads workflow artifacts
- **Push a tag** like `v1.4.0`: automatically builds EXE, generates standalone HTML, creates GitHub Release, uploads all assets

Example:

```bash
git tag v1.4.0
git push origin v1.4.0
```

## Project Structure

```text
.
├── assets/
│   ├── icon.ico
│   ├── icon.png
│   └── screenshots/
├── docs/
│   └── RELEASE_TEMPLATE.md
├── scripts/
│   ├── build-html-release.js
│   └── capture-screenshots.js
├── index.html                  # Desktop web version
├── mobile.html                 # Mobile web version
├── main.js                     # Electron entry point (if using desktop app)
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
