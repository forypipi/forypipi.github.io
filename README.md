# 付欧瑞 · Orfu

个人学术主页：https://forypipi.github.io/

基于原生 HTML、CSS 和 JavaScript 的静态网站，适用于 GitHub Pages，无需安装依赖或构建。

## 页面内容

- 个人介绍、研究方向与联系邮箱
- RTAdapter、DeepEye-400K、IIR 研究工作（明确标注在审）
- 多模态 Agent 实习经历、教育背景与技能
- 研究分类筛选、详情展开、研究图放大、邮箱复制
- 桌面和移动端布局、键盘访问、减少动态效果偏好及打印样式

## 更新方式

在 `index.html` 修改个人内容，在 `styles.css` 修改样式，在 `script.js` 修改交互。图片位于 `assets/`。论文状态或求职状态发生变化时，请同步更新页面与 `sitemap.xml` 日期。

## 本地预览

在此目录启动静态 HTTP 服务器，例如 `python -m http.server 4173`，随后访问 `http://localhost:4173`。

## GitHub Pages

使用仓库的 `main` 分支根目录发布。`.nojekyll` 使 GitHub Pages 直接提供静态文件。无需额外框架、数据库或 API 密钥。

## 内容来源

个人提供的简历 PDF 与研究介绍 PPTX（2026 年 10 月版本）。教育日期以 PDF 为准；研究图片来自 PPTX，首页使用姓名标识。保留研究评测设置、论文在审状态和团队成果归属。公开版仅保留邮箱，不附个人照片、原始简历、手机号或内部评测附件。研究图沿用作者提供材料，未添加虚构论文链接。
