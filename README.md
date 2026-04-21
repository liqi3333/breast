<div align="center">
  <img src="assets/icon.png" alt="Breast TNM Tool icon" width="128" height="128" />
  <h1>Breast TNM Tool</h1>
  <p><strong>Desktop app and standalone HTML tool for breast cancer TNM staging, molecular subtype stratification, and treatment planning.</strong></p>
  <p>
    <a href="README.zh-CN.md">简体中文</a> | <strong>English</strong>
  </p>

  <p>
    <a href="https://github.com/liqi3333/breast/releases/latest"><img alt="Latest Release" src="https://img.shields.io/github/v/release/liqi3333/breast?display_name=tag&label=release" /></a>
    <a href="https://github.com/liqi3333/breast/releases"><img alt="Downloads" src="https://img.shields.io/github/downloads/liqi3333/breast/total?label=downloads" /></a>
    <a href="https://github.com/liqi3333/breast/actions/workflows/build-windows.yml"><img alt="Build Windows EXE" src="https://github.com/liqi3333/breast/actions/workflows/build-windows.yml/badge.svg" /></a>
    <a href="https://github.com/liqi3333/breast/actions/workflows/release.yml"><img alt="Release Windows EXE" src="https://github.com/liqi3333/breast/actions/workflows/release.yml/badge.svg" /></a>
  </p>

  <p>
    <a href="https://liqi3333.github.io/breast/"><img alt="Open Online HTML" src="https://img.shields.io/badge/Open-Online%20HTML-0ea5e9?style=for-the-badge" /></a>
    <a href="https://github.com/liqi3333/breast/releases/latest"><img alt="Download Latest EXE" src="https://img.shields.io/badge/Download-Latest%20EXE-e91e63?style=for-the-badge" /></a>
    <a href="https://github.com/liqi3333/breast/releases/latest"><img alt="Download Latest HTML" src="https://img.shields.io/badge/Download-Latest%20HTML-10b981?style=for-the-badge" /></a>
  </p>
</div>

## Overview

Breast TNM Tool is an Electron desktop application built from a single-file HTML clinical interface. The repository now provides both:

- a Windows portable EXE
- a standalone HTML version that can be opened directly in a browser

The app helps users review breast cancer TNM stage, molecular subtype, simplified prognostic staging, and individualized treatment follow-up suggestions in one screen.

## Highlights

- Integrated TNM staging and molecular subtype selection
- Simplified anatomic stage and prognostic stage display
- Treatment planning and follow-up recommendation panel
- Windows portable EXE build output
- Standalone HTML file for direct browser use
- Automated GitHub Actions build and release pipeline

## Online HTML Version

You can use the standalone browser version here:

- Online page: <https://liqi3333.github.io/breast/>

You can also download the original standalone HTML file from Releases.

## Screenshots

### Main interface

![Breast TNM Tool overview](assets/screenshots/overview.png)

### Treatment plan panel

![Breast TNM Tool treatment plan](assets/screenshots/treatment-plan.png)

## Quick Start

### Download

Open the latest release page and download either the Windows executable or the standalone HTML file:

- Latest release: <https://github.com/liqi3333/breast/releases/latest>
- All releases: <https://github.com/liqi3333/breast/releases>

### Run locally

```bash
npm install
npm start
```

### Build Windows portable EXE

```bash
npm install
npm run build:win
```

### Build standalone HTML package

```bash
npm run build:html
```

Build outputs:

```text
dist/Breast-TNM-Tool-1.0.3.exe
dist-html/Breast-TNM-Tool-1.0.3.html
```

## Release Automation

This repository includes GitHub Actions workflows for build and release automation.

- Push to `main`: runs Windows build validation and uploads EXE + HTML workflow artifacts
- Push a tag like `v1.0.3`: automatically builds the Windows x64 portable EXE, generates a standalone HTML file, creates a GitHub Release, and uploads both assets

Example:

```bash
git tag v1.0.3
git push origin v1.0.3
```

## Release Notes Template

The bilingual release notes template is located at:

```text
docs/RELEASE_TEMPLATE.md
```

The release workflow uses this file as the main body of the release notes, then appends GitHub-generated notes automatically.

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
├── index.html
├── main.js
├── package.json
├── README.md
├── README.zh-CN.md
└── .github/workflows/
    ├── build-windows.yml
    └── release.yml
```

## Notes

- `node_modules/`, `dist/`, and `dist-html/` are not committed
- On first launch, Windows SmartScreen may show a warning because the EXE is not code signed
- Medical content is for informational use only and does not replace formal diagnosis or clinical decision-making
