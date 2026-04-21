<div align="center">
  <img src="assets/icon.png" alt="Breast TNM Tool icon" width="128" height="128" />
  <h1>Breast TNM Tool</h1>
  <p>乳腺癌 TNM + 分子分型桌面工具</p>
</div>

这是一个基于 Electron 的桌面应用，用单文件 HTML 页面封装为 Windows 可执行程序，提供乳腺癌 TNM 分期、分子分型、简化预后分期，以及个体化治疗计划与随访建议的可视化界面。

## 功能

- 乳腺癌 TNM 分期选择
- 分子分型与组织学分级整合
- 解剖学分期与简化预后分期展示
- 个体化治疗计划与随访建议面板
- 一键构建 Windows 便携版 EXE
- GitHub Actions 自动构建与 Release 发布

## 项目截图

### 主界面

![Breast TNM Tool overview](assets/screenshots/overview.png)

### 治疗计划面板

![Breast TNM Tool treatment plan](assets/screenshots/treatment-plan.png)

## 本地开发

```bash
npm install
npm start
```

## 构建 Windows 便携版 EXE

```bash
npm install
npm run build:win
```

构建完成后，产物默认位于：

```text
dist/Breast-TNM-Tool-1.0.0.exe
```

## 自动 Release 流程

仓库内已包含 GitHub Actions Release 工作流。

- 推送到 `main` 时，会自动执行 Windows 构建检查并上传 artifact
- 推送形如 `v1.0.0` 的 tag 时，会自动：
  - 构建 Windows x64 便携版 EXE
  - 创建 GitHub Release
  - 把 `dist/*.exe` 作为 Release 附件上传

示例：

```bash
git tag v1.0.0
git push origin v1.0.0
```

## 发布说明

发布说明模板位于：

```text
docs/RELEASE_TEMPLATE.md
```

你可以按需修改模板内容，Release 工作流会自动把它作为发布说明正文的一部分，同时附加 GitHub 自动生成的更新说明。

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
└── .github/workflows/
    ├── build-windows.yml
    └── release.yml
```

## 说明

- 当前仓库默认不提交 `node_modules/` 与 `dist/`
- Windows 第一次运行未签名 EXE 时，可能会看到 SmartScreen 提示
- 医学分期与治疗建议仅供医学信息参考，不替代临床诊断与正式治疗决策
