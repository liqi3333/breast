# breast

乳腺癌 TNM + 分子分型桌面工具。

这是一个基于 Electron 的桌面应用，界面主体来自单文件 HTML 页面，封装后可构建为 Windows 可执行程序。

## 功能

- 乳腺癌 TNM 分期选择
- 分子分型与组织学分级整合
- 解剖学分期与简化预后分期展示
- 个体化治疗计划与随访建议面板

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

## 项目结构

```text
.
├── index.html      # 主界面与业务逻辑
├── main.js         # Electron 主进程入口
├── package.json    # 项目配置与构建脚本
└── .github/
    └── workflows/  # GitHub Actions 自动构建
```

## 说明

- 当前仓库默认不提交 `node_modules/` 与 `dist/`
- Windows 第一次运行未签名 EXE 时，可能会看到 SmartScreen 提示
- 医学分期与治疗建议仅供参考，实际临床决策需结合正式指南与医生判断
