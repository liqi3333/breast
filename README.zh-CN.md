<div align="center">
  <img src="assets/icon.png" alt="Breast TNM Tool 图标" width="128" height="128" />
  <h1>Breast TNM Tool</h1>
  <p><strong>乳腺癌 AJCC 第 8 版解剖/预后分期与治疗随访决策支持，同时提供桌面版、PC 网页版和手机版网页。</strong></p>
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
    <a href="https://liqi3333.github.io/breast/mobile.html"><img alt="打开手机版网页" src="https://img.shields.io/badge/打开-手机版网页-f59e0b?style=for-the-badge" /></a>
    <a href="https://github.com/liqi3333/breast/releases/latest"><img alt="下载最新 EXE" src="https://img.shields.io/badge/下载-最新%20EXE-e91e63?style=for-the-badge" /></a>
    <a href="https://github.com/liqi3333/breast/releases/latest"><img alt="下载最新 HTML" src="https://img.shields.io/badge/下载-最新%20HTML-10b981?style=for-the-badge" /></a>
  </p>
</div>

## 项目简介

这个仓库把单文件临床界面封装成三种交付形态：

- Windows 便携版 EXE
- PC 独立 HTML / GitHub Pages 在线网页版
- 手机版独立 HTML

本次最新更新聚焦 **桌面网页版 v1.4.0**，核心是更完整的 AJCC8 分期与治疗随访决策支持。

## 最新桌面网页版亮点

- AJCC 第 8 版 **解剖学分期** + **临床/病理预后分期**
- 支持 **cTNM / pTNM / ycTNM / ypTNM** 场景切换
- 结合 **ER / PR / HER2 / 分级 / Ki-67 / Luminal 分型** 做解释和判断
- 治疗与随访建议按 **NCCN / CSCO / ASCO** 核心原则整理
- 内置 **中英双语解释**、模块折叠、打印设置、**Word / Excel 导出**
- README、截图和 Release 文案同步刷新

## 在线 HTML 版本

- PC 在线页面：<https://liqi3333.github.io/breast/>
- 手机在线页面：<https://liqi3333.github.io/breast/mobile.html>
- 最新 Release：<https://github.com/liqi3333/breast/releases/latest>

## 界面截图

### 主界面

![Breast TNM Tool overview](assets/screenshots/overview.png)

### 决策支持面板

![Breast TNM Tool treatment plan](assets/screenshots/treatment-plan.png)

## 快速开始

### 下载使用

最新 Release 可下载：

- Windows EXE
- PC 独立 HTML
- 手机版独立 HTML

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
dist/Breast-TNM-Tool-1.4.0.exe
dist-html/Breast-TNM-Tool-1.4.0.html
dist-html/Breast-TNM-Tool-mobile-1.4.0.html
```

## 自动发布流程

- 推送到 `main`：自动执行构建检查，并上传 EXE + PC HTML + 手机版 HTML artifact
- 推送形如 `v1.4.0` 的标签：自动构建 Windows x64 便携版 EXE、生成独立 HTML 文件、创建 GitHub Release，并上传全部附件

示例：

```bash
git tag v1.4.0
git push origin v1.4.0
```

## Release 模板

```text
docs/RELEASE_TEMPLATE.md
```

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
├── mobile.html
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
