# Breast-TNM-Tool 1.4.1-reviewed 更新日志

更新日期：2026-06-01

对应文件：`Breast-TNM-Tool-1.4.1-reviewed.html`

## 更新摘要

本版本基于 `Breast-TNM-Tool-1.4.0.html` 审查后另存，保留原 AJCC8 解剖分期和预后分期核心逻辑，重点补充事实审查说明、指南适用边界和 2024-2026 年乳腺癌治疗相关新适应证提示。

## 主要改动

1. 版本与审查标识
   - 页面标题和版本标签更新为 `v1.4.1 审查更新·双语解释版`。
   - 新增事实审查日期：`2026-06-01`。
   - 新增页面内“代码/事实审查摘要”，提示临床使用前需核对机构可访问的 NCCN/CSCO/ASCO 最新原文。

2. HER2-low / HER2-ultralow 边界修订
   - 明确 HER2-low / ultralow 是治疗选择标志物，不是 AJCC 分期变量。
   - 明确其不能替代 ASCO/CAP HER2 阳性/阴性判读。
   - 当 HER2 阳性同时选择 HER2-low / ultralow / 0 时，新增不一致警告。
   - 对转移性 HER2 阴性病例，提示记录 HER2-low / ultralow / 0 状态以辅助 ADC 选择。

3. 治疗事实更新
   - HR+/HER2-：保留 CDK4/6 抑制剂基础路径，补充 ribociclib 辅助强化相关提示。
   - ESR1 突变：补充 vepdegestrant 等新型 ER 降解剂方向。
   - HER2+：补充 T-DXd 在部分一线转移性、新辅助或残余病灶场景中的新版适应证提示，并强调 ILD/肺炎监测。
   - HER2-low / ultralow：补充 T-DXd 在 HR+/HER2-low 或 ultralow 经治晚期场景的提示。
   - HR+/HER2- 经治晚期：补充 dato-DXd 作为新 ADC 选择方向。
   - TNBC：补充 dato-DXd 在不适合/不符合 PD-1 或 PD-L1 治疗的转移性 TNBC 场景提示；PD-L1 未知时改为提示先补检测，而不是直接等同为免疫治疗不适用。

4. 药物池更新
   - 中文和英文药物池均新增 `datopotamab deruxtecan (dato-DXd)`。
   - 内分泌/ER 通路药物池新增 `vepdegestrant`。
   - 保留原有 T-DM1、T-DXd、sacituzumab govitecan、CDK4/6、PARP、PI3K/AKT 等药物提示。

5. 双语同步
   - 中文治疗建议和英文治疗建议同步更新关键新适应证提示。
   - 英文脚注同步更新事实审查日期和临床边界说明。

## 代码审查意见

1. 结构
   - 当前仍是单文件 HTML，CSS、分期核心、治疗规则、双语文案和导出逻辑集中在一个文件中。
   - 后续建议拆分为：`staging core`、`treatment rules`、`i18n text`、`export/print` 四个模块，降低维护成本。

2. 重复度
   - 中文和英文治疗推荐目前是两套相似逻辑，存在未来更新遗漏风险。
   - 后续建议用同一份结构化规则数据生成中英文输出。

3. 医学数据维护
   - AJCC 分期表逻辑较稳定，但治疗建议变化快，应持续记录“事实审查日期”。
   - NCCN、CSCO、ASCO、FDA 适应证更新应作为定期维护项。

4. 临床安全边界
   - 工具仍应定位为决策支持，不应输出剂量级处方。
   - 所有治疗建议需结合当地获批适应证、医保/可及性、患者合并症、器官功能、ECOG 和 MDT 讨论。

## 验证记录

已完成：

- 新文件已保存到原 HTML 同目录。
- HTML 内 JavaScript 语法检查通过。
- 抽测核心分期逻辑：
  - `T1a cN0 M0` 返回解剖分期 `IA`。
  - 同组合 HR+/HER2-/G1 返回 AJCC 临床预后分期 `IA`。
  - `M1` 返回 `IV`。

未完成：

- 未进行完整浏览器 UI 自动化截图回归。
- 未逐项人工核对 AJCC Table 8/9/10 全量组合。
- NCCN/CSCO 原文因访问权限限制，仍需由临床用户用机构账号复核最新版。

## 文件

- 原文件：`Breast-TNM-Tool-1.4.0.html`
- 新文件：`Breast-TNM-Tool-1.4.1-reviewed.html`
- 更新日志：`Breast-TNM-Tool-1.4.1-reviewed-CHANGELOG.md`
