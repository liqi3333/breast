<div align="center">
  <img src="assets/icon.png" alt="Breast TNM Tool 图标" width="128" height="128" />
  <h1>Breast TNM Tool</h1>
  <p><strong>乳腺癌 TNM 分期、分子分型与治疗计划桌面工具，同时提供可直接浏览器打开的 HTML 原始版</strong></p>
  <p>
    <strong>简体中文</strong> | <a href="README.md">English</a>
  </p>

  <p>
    <a href="https://github.com/liqi3333/breast/releases/latest"><img alt="最新版本" src="https://img.shields.io/github/v/release/liqi3333/breast?display_name=tag&label=release" /></a>
    <a href="https://github.com/liqi3333/breast/releases"><img alt="下载次数" src="https://img.shields.io/github/downloads/liqi3333/breast/total?label=downloads" /></a>
    <a href="https://github.com/liqi3333/breast/actions/workflows/build-windows.yml"><img alt="Windows 构建" src="https://github.com/liqi3333/breast/actions/workflows/build-windows.yml/badge.svg" /></a>
    <a href="https://github.com/liqi3333/breast/actions/workflows/release.yml"><img alt="Release 发布" src="https://github.com/liqi3333/breast/actions/workflows/release.yml/badge.svg" /></a>
  </p>

  <p>
    <a href="https://liqi3333.github.io/breast/"><img alt="在线打开 HTML" src="https://img.shields.io/badge/在线打开-HTML-0ea5e9?style=for-the-badge" /></a>
    <a href="https://github.com/liqi3333/breast/releases/latest"><img alt="下载最新 EXE" src="https://img.shields.io/badge/下载-最新%20EXE-e91e63?style=for-the-badge" /></a>
    <a href="https://github.com/liqi3333/breast/releases/latest"><img alt="下载最新 HTML" src="https://img.shields.io/badge/下载-最新%20HTML-10b981?style=for-the-badge" /></a>
  </p>
</div>

## 项目简介

Breast TNM Tool 是一个基于 Electron 的桌面应用，源于单文件 HTML 临床界面。现在仓库同时提供两种形态：

- Windows 便携版 EXE
- 可直接在浏览器中打开的独立 HTML 原始版本

它可以在同一个界面中查看乳腺癌 TNM 分期、分子分型、简化预后分期，以及个体化治疗和随访建议。

## 核心功能

- 集成 TNM 分期与分子分型选择
- 展示解剖学分期与简化预后分期
- 提供治疗计划与随访建议面板
- 可构建为 Windows 便携版 EXE
- 提供可直接浏览器打开的独立 HTML 文件
- 支持 GitHub Actions 自动构建与自动发布

## 在线 HTML 版本

你现在可以直接在线打开浏览器版：

- 在线页面：<https://liqi3333.github.io/breast/>

也可以在 Releases 页面下载独立 HTML 原始文件。

## 界面截图

### 主界面

![Breast TNM Tool overview](assets/screenshots/overview.png)

### 治疗计划面板

![Breast TNM Tool treatment plan](assets/screenshots/treatment-plan.png)

## 快速开始

### 下载使用

打开最新 Release 页面，下载打包好的 Windows 可执行程序，或者独立 HTML 文件：

- 最新版本：<https://github.com/liqi3333/breast/releases/latest>
- 全部 Releases：<https://github.com/liqi3333/breast/releases>

### 本地运行

```bash
npm install
npm start
```

### 构建 Windows 便携版 EXE

```bash
npm install
npm run build:win
```

### 构建独立 HTML 版本

```bash
npm run build:html
```

构建产物：

```text
dist/Breast-TNM-Tool-1.0.3.exe
dist-html/Breast-TNM-Tool-1.0.3.html
```

## 自动发布流程

仓库已内置 GitHub Actions 自动构建与发布流程。

- 推送到 `main`：自动执行 Windows 构建检查，并上传 EXE + HTML artifact
- 推送形如 `v1.0.3` 的标签：自动构建 Windows x64 便携版 EXE、生成独立 HTML 文件、创建 GitHub Release，并上传这两类文件

示例：

```bash
git tag v1.0.3
git push origin v1.0.3
```

## Release 说明模板

双语发布说明模板位于：

```text
docs/RELEASE_TEMPLATE.md
```

Release 工作流会把这个文件作为发布说明正文，再自动附加 GitHub 生成的更新说明。

## 项目结构

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

## 注意事项

- 仓库默认不提交 `node_modules/`、`dist/` 与 `dist-html/`
- Windows 首次运行时，可能因为 EXE 未签名而出现 SmartScreen 提示
- 医学内容仅供信息参考，不替代正式诊断、病理判断或临床决策
