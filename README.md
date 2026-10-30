# 付欧瑞的个人主页

https://forypipi.github.io/

基于 [Minimal Light](https://github.com/yaoyao-liu/minimal-light) 的 HTML 版本适配，保留侧栏与学术项目布局，调整中文排版。主题源文件为 `html_source_file/assets/css/style-no-dark-mode.css`，以 CC0-1.0 发布；副本及许可证位于 `vendor/`。移除了外部字体请求、示例内容、统计脚本，使用本机字体。

## 内容

正文按教育经历、科研经历、项目经历排列。科研正文自然呈现问题背景、方法与结果，不显示 STAR 标签。详细消融与扩展实验放在原生 HTML 展开区。研究方法图来自用户提供的 PPTX 与论文；不公开个人照片、手机号、原始简历或论文全文。论文均标注在审，保留评测范围和团队成果归属。

## 编辑

- 在 `index.html` 修改正文。
- 在 `theme-custom.css` 修改中文排版和主题适配，然后运行 `python build.py`。
- 样式内联到 HTML，与内容一起发布，避免外部样式缓存造成新旧版错配。不依赖远程字体或样式 CDN。
- 本地预览：`python -m http.server 4173`。
- GitHub Pages 从 `main` 分支根目录发布，`.nojekyll` 直接提供静态文件。

## 内容依据

2026-10-30 根据新版个人简历 PDF、研究介绍 PPTX、IIR 与 RTAdapter 的 Main Manuscript 核对更新。IIR 的诊断与消融对应正文表 1–3、6–7 及第 5 节；RTAdapter 的经验上界、三类语义约束、多模态实验及开销对应第 I、III 节与表 I、VI–VII、IX。RTAdapter 方法图取自最新手稿图 2。DeepEye 与项目经历依据本次简历及 PPTX，未提供 DeepEye 全文。

结果表述区分原始基线与复现基线、主表与等解码器消融、使用目标真值的诊断与不使用目标真值的适配、生成数量与去重后数量。更改正文不需要重新构建；更改样式后运行 `python build.py`。
