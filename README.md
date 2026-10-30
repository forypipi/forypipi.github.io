# 付欧瑞的个人主页

https://forypipi.github.io/

基于 [Minimal Light](https://github.com/yaoyao-liu/minimal-light) 的 HTML 版本适配，保留侧栏与学术项目布局，调整中文排版。主题源文件为 `html_source_file/assets/css/style-no-dark-mode.css`，以 CC0-1.0 发布；副本及许可证位于 `vendor/`。移除了外部字体请求、示例内容、统计脚本，使用本机字体。

## 编辑

- 在 `index.html` 修改正文。
- 在 `theme-custom.css` 修改中文排版和主题适配，然后运行 `python build.py`。
- 样式内联到 HTML，与内容一起发布，避免外部样式缓存造成新旧版错配。不依赖远程字体或样式 CDN。
- 本地预览：`python -m http.server 4173`。
- GitHub Pages 从 `main` 分支根目录发布，`.nojekyll` 直接提供静态文件。
