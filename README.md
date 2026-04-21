<div align="center">
  <img src="assets/icon.png" alt="Breast TNM Tool icon" width="128" height="128" />
  <h1>Breast TNM Tool</h1>
  <p><strong>Desktop app for breast cancer TNM staging, molecular subtype stratification, and treatment planning.</strong></p>
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
    <a href="https://github.com/liqi3333/breast/releases/latest"><img alt="Download Latest EXE" src="https://img.shields.io/badge/Download-Latest%20EXE-e91e63?style=for-the-badge" /></a>
    <a href="https://github.com/liqi3333/breast/releases"><img alt="View Releases" src="https://img.shields.io/badge/View-Releases-6f42c1?style=for-the-badge" /></a>
    <a href="https://github.com/liqi3333/breast"><img alt="View Source" src="https://img.shields.io/badge/View-Source-24292f?style=for-the-badge" /></a>
  </p>
</div>

## Overview

Breast TNM Tool is an Electron desktop application that packages a single-file HTML clinical interface into a Windows executable. It helps users review breast cancer TNM stage, molecular subtype, simplified prognostic staging, and individualized treatment follow-up suggestions in one screen.

## Highlights

- Integrated TNM staging and molecular subtype selection
- Simplified anatomic stage and prognostic stage display
- Treatment planning and follow-up recommendation panel
- Windows portable EXE build output
- Automated GitHub Actions build and release pipeline

## Screenshots

### Main interface

![Breast TNM Tool overview](assets/screenshots/overview.png)

### Treatment plan panel

![Breast TNM Tool treatment plan](assets/screenshots/treatment-plan.png)

## Quick Start

### Download

Open the latest release page and download the packaged Windows executable:

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

Build output:

```text
dist/Breast-TNM-Tool-1.0.2.exe
```

## Release Automation

This repository includes GitHub Actions workflows for build and release automation.

- Push to `main`: runs Windows build validation and uploads workflow artifacts
- Push a tag like `v1.0.2`: automatically builds the Windows x64 portable EXE, creates a GitHub Release, and uploads `dist/*.exe`

Example:

```bash
git tag v1.0.2
git push origin v1.0.2
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

- `node_modules/` and `dist/` are not committed
- On first launch, Windows SmartScreen may show a warning because the EXE is not code signed
- Medical content is for informational use only and does not replace formal diagnosis or clinical decision-making
