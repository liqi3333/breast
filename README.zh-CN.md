<div align="center">
  <img src="assets/icon.png" alt="Breast TNM Tool 图标" width="128" height="128" />
  <h1>Breast TNM Tool</h1>
  <p><strong>乳腺癌 TNM 分期、分子分型与治疗计划桌面工具</strong></p>
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
    <a href="https://github.com/liqi3333/breast/releases/latest"><img alt="下载最新 EXE" src="https://img.shields.io/badge/下载-最新%20EXE-e91e63?style=for-the-badge" /></a>
    <a href="https://github.com/liqi3333/breast/releases"><img alt="查看 Releases" src="https://img.shields.io/badge/查看-Releases-6f42c1?style=for-the-badge" /></a>
    <a href="https://github.com/liqi3333/breast"><img alt="查看源码" src="https://img.shields.io/badge/查看-源码-24292f?style=for-the-badge" /></a>
  </p>
</div>

## 项目简介

Breast TNM Tool 是一个基于 Electron 的桌面应用，把单文件 HTML 临床界面封装成 Windows 可执行程序。它可以在同一个界面中查看乳腺癌 TNM 分期、分子分型、简化预后分期，以及个体化治疗和随访建议。

## 核心功能

- 集成 TNM 分期与分子分型选择
- 展示解剖学分期与简化预后分期
- 提供治疗计划与随访建议面板
- 可构建为 Windows 便携版 EXE
- 支持 GitHub Actions 自动构建与自动发布

## 界面截图

### 主界面

![Breast TNM Tool overview](assets/screenshots/overview.png)

### 治疗计划面板

![Breast TNM Tool treatment plan](assets/screenshots/treatment-plan.png)

## 快速开始

### 下载使用

打开最新 Release 页面，下载打包好的 Windows 可执行程序：

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

构建产物：

```text
dist/Breast-TNM-Tool-1.0.2.exe
```

## 自动发布流程

仓库已内置 GitHub Actions 自动构建与发布流程。

- 推送到 `main`：自动执行 Windows 构建检查，并上传 workflow artifact
- 推送形如 `v1.0.2` 的标签：自动构建 Windows x64 便携版 EXE、创建 GitHub Release，并上传 `dist/*.exe`

示例：

```bash
git tag v1.0.2
git push origin v1.0.2
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

- 仓库默认不提交 `node_modules/` 与 `dist/`
- Windows 首次运行时，可能因为 EXE 未签名而出现 SmartScreen 提示
- 医学内容仅供信息参考，不替代正式诊断、病理判断或临床决策
