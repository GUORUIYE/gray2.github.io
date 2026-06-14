# Gray2's Blog — 项目全貌整理

> 整理日期：2026-06-07
> 本文档汇总项目的所有需求、决策、内容和当前状态

---

## 一、项目基本信息

| 项目 | 值 |
|------|------|
| 站点名 | Gray2's Blog |
| 副标题 | 工程 · 技术 · 生活 |
| 框架 | Hexo 8.1.2 |
| 主题 | Fluid 1.9.9（已本地化到 `themes/fluid`） |
| 部署 | Vercel（静态构建，自动部署） |
| 地址 | https://gray2-blog.vercel.app |
| GitHub | Gray2/gray2-blog |
| 作者 | Gray2 |
| Email | gray2blog@outlook.com |

---

## 二、所有需求及完成状态

### P0 — 必须修复（已完成 ✅）

| # | 需求 | 状态 | 说明 |
|---|------|------|------|
| 1 | 添加 robots.txt | ✅ 已完成 | 允许全站爬取，指向 sitemap.xml |
| 2 | 优化 Vercel 缓存 | ✅ 已完成 | CSS/JS 1年 immutable，图片 30天，HTML 不缓存 |
| 3 | Permalink 优化 | ✅ 已完成 | `:year/:month/:day/:title/` → `posts/:title/` |
| 4 | Fluid 主题本地化 | ✅ 已完成 | 从 npm 依赖迁至 `themes/fluid`，支持模板自定义 |

### P1 — 强烈建议（已完成 ✅）

| # | 需求 | 状态 | 说明 |
|---|------|------|------|
| 5 | Front Matter 统一 | ✅ 已完成 | 6 篇文章全部添加 `description`，日期格式统一为完整时间戳 |
| 6 | 评论系统 (giscus) | ❌ 取消 | 用户明确不需要 |
| 7 | 专属 Banner SVG | ✅ 已完成 | 深蓝底+电路纹路+数据节点发光动画 |
| 8 | About 页面联系方式 | ✅ 已完成 | 补充 Email + 博客地址 |

### P2 — 建议优化

| # | 需求 | 状态 | 说明 |
|---|------|------|------|
| 9 | 友链页 | ✅ 已创建 | `source/friends/index.md`，导航入口后改为专题页 |
| 10 | Google Analytics | ❌ 取消 | 用户不需要 |
| 11 | 文章封面图 | ❌ 取消 | 用户不需要 |
| 12 | Front Matter 校验脚本 | ❌ 取消 | 用户不需要 |

### 页面全面重构（已完成 ✅）

| # | 需求 | 状态 | 说明 |
|---|------|------|------|
| 13 | 冷色调技术风切换 | ✅ 已完成 | 金棕 → 靛蓝/天蓝/冷白 |
| 14 | CSS 变量体系 | ✅ 已完成 | 8色+17色暗色+5级阴影+4级圆角+7级间距+4种缓动 |
| 15 | 暗色模式 | ✅ 已完成 | auto 自动切换，CSS 变量联动 |
| 16 | 导航栏毛玻璃 | ✅ 已完成 | `backdrop-filter: blur(12px)` + 半透明 |
| 17 | 阅读进度条 | ✅ 已完成 | 顶部 3px 渐变蓝条，rAF 更新 |
| 18 | 卡片悬浮效果 | ✅ 已完成 | translateY(-3px) + glow shadow + 左侧蓝线 |
| 19 | 卡片滚动揭示 | ✅ 已完成 | IntersectionObserver + 0.6s cubic-bezier |
| 20 | 代码块增强 | ✅ 已完成 | #1E293B 深色 + 冰蓝边框 + hover 发光 |
| 21 | 链接渐变下划线 | ✅ 已完成 | 半透明 → 实线 hover 动效 |
| 22 | 引用块样式 | ✅ 已完成 | 渐变背景 + 4px 蓝色左边框 |
| 23 | 表格风格 | ✅ 已完成 | 圆角 + hover 行高亮 |
| 24 | Tag 徽章 | ✅ 已完成 | 圆角药丸 + rgba 蓝底 |
| 25 | 分割线渐变 | ✅ 已完成 | 蓝色渐变 2px |
| 26 | 自定义滚动条 | ✅ 已完成 | 6px 蓝色半透明 |
| 27 | Banner 渐变遮罩 | ✅ 已完成 | 深蓝多层叠加 |
| 28 | Avatar SVG 重构 | ✅ 已完成 | 渐变蓝圆 + G 字母 |

### 部署与指南（已完成 ✅）

| # | 需求 | 状态 | 说明 |
|---|------|------|------|
| 29 | Git 仓库初始化 | ✅ 已完成 | main 分支，首次提交已完成 |
| 30 | DEPLOY.md | ✅ 已完成 | 完整部署和内容更新指南 |

---

## 三、功能决策记录

| 决策项 | 决策结果 | 决策原因 |
|--------|----------|----------|
| 评论系统 | 不启用 | 用户明确表示不需要 |
| Google Analytics | 不启用 | 用户明确表示不需要 |
| 文章封面图 | 不添加 | 用户明确表示不需要 |
| Front Matter 校验脚本 | 不创建 | 用户明确表示不需要 |
| 视觉风格 | 冷色调技术风 | 用户选择，靛蓝/天蓝/冷白 |
| 首页布局 | 精简大方 | 用户选择"保持当前但banner缩小" |
| 文章页 | 保持现状 | 用户满意当前排版 |
| 内容入口 | 增加专题/系列 | 用户选择，导航栏已加入"专题" |
| 友链页 | 导航入口改为专题 | 友链页文件保留，但导航优先专题 |
| Permalink | `posts/:title/` | SEO 友好，避免中文日期路径 |
| 主题管理 | 本地化 | 支持模板自定义，不依赖 npm |
| 暗色模式 | auto 自动切换 | 跟随系统偏好 |

---

## 四、全站内容清单

### 页面（非文章）

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | `/` | Banner + slogan + 文章卡片列表 |
| 归档 | `/archives/` | 按时间归档 |
| 分类 | `/categories/` | 按分类浏览 |
| 标签 | `/tags/` | 按标签浏览 |
| 专题 | `/series/` | 三大专题入口 |
| 友链 | `/friends/` | 友情链接（待填充） |
| 关于 | `/about/` | 个人介绍 + 联系方式 |

### 文章（6 篇）

| # | 标题 | 日期 | 分类 | 标签 | description |
|---|------|------|------|------|-------------|
| 1 | Hello World | 2026-06-06 10:00 | 生活 | 随笔 | 欢迎来到 Gray2's Blog，用 Hexo + Fluid 搭建的个人博客 |
| 2 | 开始使用 Hexo 搭建个人博客 | 2026-06-06 14:00 | 技术 | Hexo, 教程 | 从零开始搭建 Hexo 博客的完整教程 |
| 3 | 新的一年，新的开始 | 2026-06-06 20:00 | 生活 | 随笔, 感悟 | 关于坚持、输入与输出的思考 |
| 4 | 选矿到新能源：一个化工工程师的跨界思考 | 2026-06-07 17:00 | 化工工程 | 选矿, 新能源, 行业观察 | 跨行业迁移中发现的共通逻辑 |
| 5 | 工程师的自我修养：从执行到思考 | 2026-06-07 18:00 | 思考与随笔 | 职场感悟, 成长 | 一个拆解复杂问题的简单框架 |
| 6 | 化工工程师的数字化工具箱 | 2026-06-07 19:00 | 资源推荐 | 工具推荐, Python, 数据可视化 | 从 Python 到 DWSIM 的实用工具推荐 |

### 专题页对应关系

| 专题 | 包含分类 | 对应文章 |
|------|----------|----------|
| 🔬 化工工程 | 化工工程 | 跨界思考 |
| 📐 工程师成长 | 思考与随笔 / 职场感悟 | 自我修养 |
| 🧰 数字化工具 | 资源推荐 / 工具推荐 | 数字化工具箱 |

---

## 五、设计系统

### 色彩方案

| 用途 | 亮色值 | 暗色值 |
|------|--------|--------|
| 主色 | #3B82F6 | #60A5FA |
| 强调色 | #38BDF8 | #38BDF8 |
| 高亮色 | #06B6D4 | — |
| 背景 | #F8FAFC | #0F172A |
| 表面 | #FFFFFF | #1E293B |
| 正文 | #1E293B | #E2E8F0 |
| 次级文字 | #64748B | #94A3B8 |
| 边框 | #E2E8F0 | #334155 |
| 导航栏 | #1E293B (0.85α) | #0F172A (0.88α) |

### 字体

| 用途 | 字体 |
|------|------|
| 正文 | Inter, Noto Sans SC, system-ui |
| 代码 | JetBrains Mono, Fira Code, Consolas |

### 关键视觉效果

- 导航栏毛玻璃 (`backdrop-filter: blur(12px)`)
- Banner 渐变遮罩 (深蓝 0.75/0.55/0.45 alpha)
- 卡片悬浮 (translateY -3px + glow shadow + 左侧 3px 蓝线)
- 阅读进度条 (顶部 3px 渐变蓝条)
- 代码块深色 (#1E293B) + hover 冰蓝边框发光
- 暗色模式 auto 切换

---

## 六、文件结构

```
个人博客/
├── _config.yml              # Hexo 主配置
├── _config.fluid.yml        # Fluid 主题配置（核心文件）
├── vercel.json              # Vercel 构建和缓存配置
├── package.json             # 依赖管理
├── DEPLOY.md                # 部署与更新指南
├── source/
│   ├── _posts/              # 6 篇文章
│   │   ├── hello-world.md
│   │   ├── hexo-guide.md
│   │   ├── new-beginning.md
│   │   ├── cross-boundary-thinking.md
│   │   ├── engineer-self-cultivation.md
│   │   └── digital-toolbox-for-chemical-engineers.md
│   ├── about/index.md       # 关于页
│   ├── categories/index.md  # 分类页
│   ├── tags/index.md        # 标签页
│   ├── series/index.md       # 专题页
│   ├── friends/index.md     # 友链页
│   ├── css/custom.css        # 500+ 行冷色调技术风样式
│   ├── js/custom.js          # 阅读进度条 + 滚动揭示 + 导航栏效果
│   ├── img/
│   │   ├── banner-home.svg  # 首页 banner（深蓝+电路节点）
│   │   ├── banner-post.svg  # 文章页 banner
│   │   └── avatar.svg        # 头像（蓝色 G 字母）
│   └── robots.txt            # SEO 爬取规则
└── themes/fluid/             # 本地化主题（可修改模板）
```

---

## 七、导航栏

| 名称 | 路径 | 图标 |
|------|------|------|
| 首页 | `/` | icon-home-fill |
| 归档 | `/archives/` | icon-archive-fill |
| 分类 | `/categories/` | icon-category-fill |
| 标签 | `/tags/` | icon-tags-fill |
| 专题 | `/series/` | icon-articles |
| 关于 | `/about/` | icon-user-fill |

---

## 八、Front Matter 标准模板

每篇新文章必须包含：

```yaml
---
title: 文章标题
date: YYYY-MM-DD HH:MM:SS    # 完整时间戳
description: 一句话摘要       # 15-50字，SEO + 首页展示
tags:
  - 标签1
  - 标签2
categories:
  - 分类名
---
```

---

## 九、部署流程

```
本地修改 → git push → GitHub 仓库 → Vercel 自动构建 → 30-60秒上线
```

常用命令：

| 操作 | 命令 |
|------|------|
| 创建新文章 | `npx hexo new "标题"` |
| 本地预览 | `npx hexo server -p 4000` |
| 重建静态文件 | `npx hexo clean && npx hexo generate` |
| 提交并部署 | `git add -A && git commit -m "msg" && git push` |

---

## 十、已取消的需求（不再推进）

- ~~评论系统 (giscus)~~
- ~~Google Analytics~~
- ~~文章封面图~~
- ~~Front matter 校验脚本~~