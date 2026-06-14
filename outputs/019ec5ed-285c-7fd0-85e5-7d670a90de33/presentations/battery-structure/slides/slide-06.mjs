export async function slide06(presentation, ctx) {
  const slide = presentation.slides.add();
  slide.background.fill = "#1A1F36";

  ctx.addText(slide, { left: 80, top: 40, width: 200, height: 22, text: "PRISMATIC CELL", fontSize: 13, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });
  ctx.addShape(slide, { left: 80, top: 64, width: 40, height: 2, fill: "#F59E0B", line: ctx.line("#F59E0B", 0) });
  ctx.addText(slide, { left: 80, top: 76, width: 1000, height: 50, text: "\u7a7a\u95f4\u5229\u7528\u7387\u6700\u9ad8\u7684\u4e3b\u6d41\u5c01\u88c5\u5f62\u6001", fontSize: 34, color: "#FFFFFF", bold: true, typeface: ctx.fonts.title });

  // Left: Structure
  ctx.addShape(slide, { left: 80, top: 160, width: 500, height: 478, fill: "#252B48", line: ctx.line("#333A5C", 1) });
  ctx.addText(slide, { left: 100, top: 175, width: 450, height: 30, text: "\u65b9\u58f3\u7535\u82af\u7ed3\u6784\uff08\u53e0\u7247/\u5377\u7ed5\u5747\u53ef\uff09", fontSize: 18, color: "#14B8A6", bold: true, typeface: ctx.fonts.body });

  const layers = [
    { label: "\u6781\u7ec4\uff08\u53e0\u7247/\u5377\u7ed5\uff09", desc: "\u6b63\u6781\u7247 + \u9694\u819c + \u8d1f\u6781\u7247\u4ea4\u66ff\u5806\u53e0\u6216\u5377\u7ed5", color: "#14B8A6" },
    { label: "\u6781\u8033\uff08\u94dd/\u954d\u5e26\uff09", desc: "\u4ece\u6781\u7ec4\u5f15\u51fa\uff0c\u710a\u63a5\u81f3\u76d6\u677f\u7aef\u5b50", color: "#F59E0B" },
    { label: "\u7535\u89e3\u6db2\u704c\u6ce8", desc: "\u771f\u7a7a\u6ce8\u6db2\u786e\u4fdd\u6da6\u6e7f\u6027", color: "#38BDF8" },
    { label: "\u94dd\u58f3/\u94a2\u58f3\u4f53", desc: "\u94dd\u5408\u91d1\u6216\u4e0d\u9508\u94a2\u58f3\u4f53 + \u76d6\u677f\u6fc0\u5149\u710a\u63a5", color: "#6B7280" },
    { label: "\u9632\u7206\u9600 / \u6ce8\u6db2\u5b54", desc: "\u5b89\u5168\u6cc4\u538b + \u7535\u89e3\u6db2\u6ce8\u5165\u53e3", color: "#F87171" },
  ];

  let ly = 220;
  for (const l of layers) {
    ctx.addShape(slide, { left: 100, top: ly, width: 8, height: 68, fill: l.color, line: ctx.line(l.color, 0) });
    ctx.addText(slide, { left: 120, top: ly + 8, width: 430, height: 22, text: l.label, fontSize: 15, color: "#FFFFFF", bold: true, typeface: ctx.fonts.body });
    ctx.addText(slide, { left: 120, top: ly + 32, width: 430, height: 28, text: l.desc, fontSize: 12, color: "#C8CDD5", typeface: ctx.fonts.body });
    ly += 80;
  }

  // Right: Model table
  ctx.addShape(slide, { left: 600, top: 160, width: 600, height: 478, fill: "#252B48", line: ctx.line("#333A5C", 1) });
  ctx.addText(slide, { left: 620, top: 175, width: 400, height: 30, text: "\u5178\u578b\u578b\u53f7\u4e0e\u89c4\u683c", fontSize: 18, color: "#14B8A6", bold: true, typeface: ctx.fonts.body });

  const headers = ["\u5382\u5546/\u578b\u53f7", "\u6b63\u6781", "\u5bb9\u91cf", "\u5e94\u7528"];
  const headerX = [620, 790, 940, 1060];
  for (let i = 0; i < headers.length; i++) {
    ctx.addText(slide, { left: headerX[i], top: 220, width: 140, height: 22, text: headers[i], fontSize: 12, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });
  }

  const rows = [
    ["\u5b81\u5fb7\u65f6\u4ee3 LFP 280Ah", "LFP", "280 Ah", "\u50a8\u80fd/\u5546\u7528\u8f66"],
    ["\u5b81\u5fb7\u65f6\u4ee3 NMC 75Ah", "NMC", "75 Ah", "\u4e58\u7528\u8f66"],
    ["\u6bd4\u4e9a\u8fea \u5200\u7247\u7535\u6c60", "LFP", "138 Ah", "\u4e58\u7528\u8f66(CTP)"],
    ["\u4e2d\u521b\u65b0\u822a NMC 86Ah", "NMC", "86 Ah", "\u4e58\u7528\u8f66"],
    ["\u56fd\u8f6f\u9ad8\u79d1 LFP 75Ah", "LFP", "75 Ah", "\u4e58\u7528\u8f66/\u50a8\u80fd"],
  ];

  let ry = 252;
  for (const row of rows) {
    for (let i = 0; i < row.length; i++) {
      ctx.addText(slide, { left: headerX[i], top: ry, width: 140, height: 22, text: row[i], fontSize: 11, color: "#C8CDD5", typeface: ctx.fonts.body });
    }
    ry += 26;
  }

  // Blade battery highlight
  ctx.addText(slide, { left: 620, top: 400, width: 400, height: 26, text: "\u5200\u7247\u7535\u6c60 (Blade Battery)", fontSize: 16, color: "#14B8A6", bold: true, typeface: ctx.fonts.body });
  ctx.addText(slide, { left: 620, top: 430, width: 560, height: 44, text: "\u957f\u6761\u5f62\u65b9\u58f3\uff0c\u539a\u5ea6\u4ec5 13.5mm\uff0c\u76f4\u63a5\u4f5c\u4e3a\u7ed3\u6784\u4ef6\uff0c\u7701\u53bb\u6a21\u7ec4\u5c42\u7ea7\uff0c\u7a7a\u95f4\u5229\u7528\u7387\u63d0\u5347 \u2265 50%\uff0c\u9488\u523a\u5b89\u5168\u8fc7\u5173", fontSize: 13, color: "#C8CDD5", typeface: ctx.fonts.body });

  return slide;
}
