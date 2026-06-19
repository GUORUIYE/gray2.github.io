---
title: 专栏
date: 2026-06-19 15:00:00
layout: page
menu_id: categories
---

<style>
.cat-hero {
  text-align: center;
  padding: 40px 0 20px;
}
.cat-hero h1 {
  font-size: 2.2em;
  margin-bottom: 8px;
}
.cat-hero p {
  color: var(--color-muted);
  font-size: 1.05em;
}
.cat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin: 32px 0;
}
.cat-card {
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 28px 24px;
  transition: all 0.25s ease;
  background: var(--color-card);
  position: relative;
  overflow: hidden;
}
.cat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
}
.cat-card.materials::before { background: linear-gradient(90deg, #2d6cdf, #7C3AED); }
.cat-card.recycling::before { background: linear-gradient(90deg, #FA6400, #F59E0B); }
.cat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}
.cat-card .icon {
  font-size: 2.4em;
  margin-bottom: 12px;
  line-height: 1;
}
.cat-card h2 {
  font-size: 1.3em;
  margin: 4px 0 10px;
  font-weight: 600;
}
.cat-card .desc {
  color: var(--color-muted);
  font-size: 0.93em;
  line-height: 1.65;
  margin-bottom: 16px;
}
.cat-card .meta {
  display: flex;
  gap: 16px;
  font-size: 0.85em;
  color: var(--color-muted);
  margin-bottom: 16px;
}
.cat-card .meta span {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.cat-card .btn {
  display: inline-block;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 0.9em;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
}
.cat-card .btn-materials {
  background: #2d6cdf;
  color: #fff;
}
.cat-card .btn-materials:hover {
  background: #1a4fa8;
}
.cat-card .btn-recycling {
  background: #FA6400;
  color: #fff;
}
.cat-card .btn-recycling:hover {
  background: #d45400;
}
.cat-articles {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 24px 0;
}
.article-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  transition: all 0.2s;
  text-decoration: none;
  color: var(--color-text);
}
.article-item:hover {
  background: var(--color-block);
  border-color: var(--color-theme);
  transform: translateX(3px);
}
.article-item .num {
  font-size: 1.5em;
  font-weight: 700;
  color: var(--color-theme);
  min-width: 28px;
  line-height: 1.2;
  opacity: 0.5;
}
.article-item .content {
  flex: 1;
  min-width: 0;
}
.article-item .content h4 {
  font-size: 0.95em;
  margin: 0 0 4px;
  font-weight: 600;
}
.article-item .content .excerpt {
  font-size: 0.85em;
  color: var(--color-muted);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.article-item .arrow {
  color: var(--color-muted);
  font-size: 1.1em;
  opacity: 0;
  transition: opacity 0.2s;
}
.article-item:hover .arrow {
  opacity: 1;
  color: var(--color-theme);
}
</style>

<div class="cat-hero">
<h1>📚 专栏</h1>
<p>文章按主题归类，方便系统性阅读</p>
</div>

<div class="cat-grid">
  <a href="/gray2.github.io/categories/电池技术材料体系/" class="cat-card materials" style="text-decoration:none;color:inherit;">
    <div class="icon">🔬</div>
    <h2>电池技术材料体系</h2>
    <div class="desc">
      从正极材料全景图谱到下一代电池技术前沿，涵盖 LFP、NCM、钠离子、4680 大圆柱、电芯微观配方与选型实战，11 篇深度技术解读。
    </div>
    <div class="meta">
      <span>📄 11 篇文章</span>
      <span>🏷️ LFP · NCM · 钠离子 · 4680</span>
    </div>
    <span class="btn btn-materials">浏览全部 →</span>
  </a>

  <a href="/gray2.github.io/categories/电池回收工艺/" class="cat-card recycling" style="text-decoration:none;color:inherit;">
    <div class="icon">♻️</div>
    <h2>电池回收工艺</h2>
    <div class="desc">
      从回收工艺技术路线到经济账本，火法、湿法、直接回收三大路线详解，黑粉有价金属分布与毛利率深度分析。
    </div>
    <div class="meta">
      <span>📄 3 篇文章</span>
      <span>🏷️ 回收 · 湿法冶金 · 经济性</span>
    </div>
    <span class="btn btn-recycling">浏览全部 →</span>
  </a>
</div>

## 🔬 全部文章 · 电池技术材料体系

<div class="cat-articles">

<a href="/gray2.github.io/2026/battery-tech-1-cathode-panorama/" class="article-item">
  <span class="num">01</span>
  <div class="content">
    <h4>正极材料全景图谱：从 LFP 到 NCM 到钠电的六大家族</h4>
    <div class="excerpt">一文纵览六大正极体系的核心参数、晶体结构、应用场景与实战案例，帮你建立正极材料的全局视野。</div>
  </div>
  <span class="arrow">→</span>
</a>

<a href="/gray2.github.io/2026/battery-tech-2-ncm-high-nickel/" class="article-item">
  <span class="num">02</span>
  <div class="content">
    <h4>NCM 三元材料的镍钴博弈：高镍化进程中的技术挑战</h4>
    <div class="excerpt">从 NCM111 到 NCM811 的演进脉络，定量分析镍含量与循环/热稳定性的 trade-off。</div>
  </div>
  <span class="arrow">→</span>
</a>

<a href="/gray2.github.io/2026/battery-tech-3-lfp-renaissance/" class="article-item">
  <span class="num">03</span>
  <div class="content">
    <h4>磷酸铁锂：从低电导率到刀片电池的逆袭之路</h4>
    <div class="excerpt">LFP 如何从电导率仅 10⁻⁹ S/cm 的"劣等生"，逆袭成为全球装机量最大的正极材料。</div>
  </div>
  <span class="arrow">→</span>
</a>

<a href="/gray2.github.io/2026/battery-tech-4-4680-teardown/" class="article-item">
  <span class="num">04</span>
  <div class="content">
    <h4>4680 大圆柱电池深度拆解：特斯拉 NCA vs 比亚迪 LFP</h4>
    <div class="excerpt">基于公开拆解报告，全面对比特斯拉与比亚迪 4680 电芯的正极、负极、结构设计与制造工艺差异。</div>
  </div>
  <span class="arrow">→</span>
</a>

<a href="/gray2.github.io/2026/battery-tech-5-sodium-ion/" class="article-item">
  <span class="num">05</span>
  <div class="content">
    <h4>钠离子电池：锂资源的破局者还是补充者？</h4>
    <div class="excerpt">全面评估钠离子电池的技术演进、三大正极路线之争、硬碳负极瓶颈，以及钠电 vs LFP 的全维度对比。</div>
  </div>
  <span class="arrow">→</span>
</a>

<a href="/gray2.github.io/2026/battery-tech-8-cell-micro-world/" class="article-item">
  <span class="num">06</span>
  <div class="content">
    <h4>电芯内部的微观世界：正极、负极、电解液、隔膜的配方密码</h4>
    <div class="excerpt">从正极活性物质 90% 到电解液添加剂 3%，拆解电芯内部各组分的神秘配方。</div>
  </div>
  <span class="arrow">→</span>
</a>

<a href="/gray2.github.io/2026/battery-tech-9-selection-guide/" class="article-item">
  <span class="num">07</span>
  <div class="content">
    <h4>电池选型实战指南：不同应用场景下的技术路线选择</h4>
    <div class="excerpt">从乘用车、商用车、储能、消费电子、两轮车五大场景出发，提供完整的电池选型决策框架。</div>
  </div>
  <span class="arrow">→</span>
</a>

<a href="/gray2.github.io/2026/battery-tech-10-next-gen/" class="article-item">
  <span class="num">08</span>
  <div class="content">
    <h4>下一代电池技术前瞻：固态、锂硫与锂空气的工程之路</h4>
    <div class="excerpt">从全固态电池三大电解质路线到锂硫、锂空气电池的核心难题，一张下一代电池的技术全景图。</div>
  </div>
  <span class="arrow">→</span>
</a>

<a href="/gray2.github.io/2026/电池正极材料全景介绍/" class="article-item">
  <span class="num">09</span>
  <div class="content">
    <h4>电池正极材料全景介绍</h4>
    <div class="excerpt">系统介绍六大电池正极材料体系（LFP、NCM、NCA、钠离子、LCO/LMO、LMFP）的晶体结构、性能参数、量产动态。</div>
  </div>
  <span class="arrow">→</span>
</a>

<a href="/gray2.github.io/2026/锂电池各组分占比详解-三元vs磷铁锂/" class="article-item">
  <span class="num">10</span>
  <div class="content">
    <h4>锂电池各组分占比详解：三元（NCM）vs 磷酸铁锂（LFP）</h4>
    <div class="excerpt">系统梳理三元锂电池与磷酸铁锂电池在电芯层面的各组分重量占比，延伸至子成分拆解与成本结构对比。</div>
  </div>
  <span class="arrow">→</span>
</a>

<a href="/gray2.github.io/2026/主流电池体系性能与拆解组成数据全编/" class="article-item">
  <span class="num">11</span>
  <div class="content">
    <h4>主流电池体系性能与拆解组成数据全编</h4>
    <div class="excerpt">系统整理方壳、圆柱、LFP、三元及钠离子五大体系的性能参数与拆解组成数据。</div>
  </div>
  <span class="arrow">→</span>
</a>

</div>

## ♻️ 全部文章 · 电池回收工艺

<div class="cat-articles">

<a href="/gray2.github.io/2026/battery-tech-6-recycling-process/" class="article-item">
  <span class="num">01</span>
  <div class="content">
    <h4>锂电池回收工艺三国演义：火法、湿法、直接回收的较量</h4>
    <div class="excerpt">三大回收路线的工艺详解与对比——邦普湿法六步、Umicore 火法、前沿直接回收六种方法，谁将主导千亿回收市场。</div>
  </div>
  <span class="arrow">→</span>
</a>

<a href="/gray2.github.io/2026/battery-tech-7-recycling-economics/" class="article-item">
  <span class="num">02</span>
  <div class="content">
    <h4>电池回收的经济账：黑粉中的有价金属分布与毛利分析</h4>
    <div class="excerpt">从黑粉中的有价金属品位出发，拆解三元 23.95% 与 LFP 17.89% 毛利率的驱动因素，以及核心工艺挑战。</div>
  </div>
  <span class="arrow">→</span>
</a>

<a href="/gray2.github.io/2026/电池回收工艺整理-原料与工艺分类/" class="article-item">
  <span class="num">03</span>
  <div class="content">
    <h4>电池回收工艺整理——按原料与工艺分类</h4>
    <div class="excerpt">按回收原料与工艺路线分类整理电池回收工艺，涵盖三元、LFP、LCO、LMO 正极回收，石墨负极回收，电解液回收等全链路线。</div>
  </div>
  <span class="arrow">→</span>
</a>

</div>
