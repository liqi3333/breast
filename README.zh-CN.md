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

本次最新更新为 **v1.4.1（审查更新版）**，核心是 AJCC8 分期与治疗随访决策支持的事实审查与治疗适应证更新。

## v1.4.1 审查更新亮点

**审查日期：** 2026-06-01

### 临床审查与安全
- 对照 NCCN/CSCO/ASCO 2024-2026 指南进行事实审查
- 页面内新增审查摘要与临床安全声明
- HER2-low/ultralow 明确定位为治疗选择标志物（非 AJCC 分期变量）
- HER2 阳性同时选择 HER2-low/ultralow/0 时新增不一致警告

### 治疗适应证更新
- HR+/HER2-：保留 CDK4/6 抑制剂路径，补充 ribociclib 辅助强化提示
- ESR1 突变：补充 vepdegestrant 等新型 ER 降解剂方向
- HER2+：T-DXd 在一线转移性、新辅助/残余病灶场景的适应证提示，强调 ILD/肺炎监测
- HER2-low/ultralow：T-DXd 在 HR+/HER2-low 或 ultralow 经治晚期场景的提示
- HR+/HER2- 经治晚期：补充 dato-DXd 作为新 ADC 选择
- TNBC：dato-DXd 在不适合 PD-1/PD-L1 治疗的转移性 TNBC 场景提示；PD-L1 未知时提示先补检测

### 药物池更新
- 新增 **datopotamab deruxtecan (dato-DXd)** 入中英文药物池
- 新增 **vepdegestrant** 入内分泌/ER 通路药物池
- 保留原有 T-DM1、T-DXd、sacituzumab govitecan、CDK4/6、PARP、PI3K/AKT 药物

### 核心功能（自 v1.4.0）

#### 分期与预后
- AJCC 第 8 版解剖学分期（Table 8），正确处理 T1mi、N1mi、N3、M0(i+)
- 临床/病理预后分期（Tables 9-10），基于 T/N/M、分级、HER2、ER、PR 自动查表
- 新辅助后 cTNM/pTNM/ycTNM/ypTNM，pCR 标注
- HER2 不确定按 AJCC 视为阴性，提醒正式复核

#### 生物标志物与分子分型
- 自动推断 Luminal 分型（A/B HER2-、B HER2+、HER2-enriched、TNBC）
- Ki-67 中间区域（10-19%）明确标记需 MDT 讨论
- HER2-low/ultralow、PD-L1 CPS、BRCA、PIK3CA、ESR1 检测提示

#### 治疗与管理
- 彩色决策卡片（是/可能/否）：手术、化疗、内分泌、靶向、免疫、PARP
- 方案表格：HR+/HER2-、HER2+、TNBC 各场景
- 药物池按分类组织，M1 触发 IV 期专属路径
- Oncotype DX RS 解读、MammaPrint 风险分层

#### 多语言与导出
- 中英双语界面，上下文敏感解释
- 打印/导出：模块勾选，支持 PDF、Word、Excel 输出
- 可折叠 UI、帮助文本切换、设置面板

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
npm run build:win
```

### 构建独立 HTML 版本

```bash
npm run build:html
```

构建产物：

```text
dist/Breast-TNM-Tool-1.4.1.exe
dist-html/Breast-TNM-Tool-1.4.1.html
dist-html/Breast-TNM-Tool-mobile-1.4.1.html
```

## 自动发布流程

- 推送到 `main`：自动执行构建检查并上传 EXE + PC HTML + 手机版 HTML artifact
- 推送形如 `v1.4.1` 的标签：自动构建 Windows x64 便携版 EXE、生成独立 HTML 文件、创建 GitHub Release 并上传全部附件

示例：

```bash
git tag v1.4.1
git push origin v1.4.1
```

## 项目结构

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
