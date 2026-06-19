/**
 * 背景注入脚本 —— Hexo 构建时自动执行
 * 在 body 开头插入全屏背景层 + 加载背景切换 JS
 */
const { root: siteRoot = "/" } = hexo.config;

hexo.extend.injector.register(
  "body_begin",
  `<div id="web_bg"></div>`
);

hexo.extend.injector.register(
  "body_end",
  `<script src="${siteRoot}js/background.js"></script>`
);
