export async function slide03(presentation, ctx) {
  const slide = presentation.slides.add();
  slide.background.fill = "#1A1F36";

  ctx.addText(slide, { left: 80, top: 40, width: 200, height: 22, text: "LFP CATHODE", fontSize: 13, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });
  ctx.addShape(slide, { left: 80, top: 64, width: 40, height: 2, fill: "#F59E0B", line: ctx.line("#F59E0B", 0) });
  ctx.addText(slide, { left: 80, top: 76, width: 900, height: 50, text: "\u5b89\u5168\u4e0e\u5bff\u547d\u4f18\u5148\u7684\u6b63\u6781\u8def\u7ebf", fontSize: 34, color: "#FFFFFF", bold: true, typeface: ctx.fonts.title });

  // Left: Parameter bars
  const params = [
    { label: "\u80fd\u91cf\u5bc6\u5ea6", value: "140\u2013180 Wh/kg", pct: 0.45 },
    { label: "\u5faa\u73af\u5bff\u547d", value: "3,000\u201310,000+ \u6b21", pct: 0.90 },
    { label: "\u70ed\u7a33\u5b9a\u6027", value: "\u2265 500\u00B0C", pct: 0.95 },
    { label: "\u6210\u672c", value: "\u4f4e (\u2248 0.50 \u5143/Wh)", pct: 0.20 },
    { label: "\u5bfc\u7535\u6027", value: "\u4f4e (\u9700\u78b3\u5305\u8986)", pct: 0.35 },
  ];

  let by = 160;
  for (const p of params) {
    ctx.addText(slide, { left: 80, top: by, width: 140, height: 24, text: p.label, fontSize: 13, color: "#C8CDD5", typeface: ctx.fonts.body });
    ctx.addShape(slide, { left: 230, top: by + 2, width: 280, height: 18, fill: "#252B48", line: ctx.line("#333A5C", 1) });
    ctx.addShape(slide, { left: 230, top: by + 2, width: Math.round(280 * p.pct), height: 18, fill: "#14B8A6", line: ctx.line("#14B8A6", 0) });
    ctx.addText(slide, { left: 520, top: by, width: 200, height: 24, text: p.value, fontSize: 13, color: "#FFFFFF", typeface: ctx.fonts.body });
    by += 36;
  }

  // Right: Model table
  ctx.addShape(slide, { left: 600, top: 160, width: 600, height: 478, fill: "#252B48", line: ctx.line("#333A5C", 1) });
  ctx.addText(slide, { left: 620, top: 175, width: 400, height: 30, text: "\u5178\u578b\u578b\u53f7\u53c2\u8003", fontSize: 18, color: "#14B8A6", bold: true, typeface: ctx.fonts.body });

  const headers = ["\u5382\u5546/\u578b\u53f7", "\u5c01\u88c5", "\u5bb9\u91cf", "\u5e94\u7528"];
  const headerX = [620, 780, 910, 1060];
  for (let i = 0; i < headers.length; i++) {
    ctx.addText(slide, { left: headerX[i], top: 220, width: 130, height: 22, text: headers[i], fontSize: 12, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });
  }

  const rows = [
    ["\u5b81\u5fb7\u65f6\u4ee3 LFP", "\u65b9\u58f3", "280 Ah", "\u50a8\u80fd/\u5546\u7528\u8f66"],
    ["\u6bd4\u4e9a\u8fea \u5200\u7247\u7535\u6c60", "\u65b9\u58f3\u5200\u7247", "138 Ah", "\u4e58\u7528\u8f66"],
    ["\u56fd\u8f6f\u9ad8\u79d1 LFP", "\u65b9\u58f3", "75 Ah", "\u4e58\u7528\u8f66/\u50a8\u80fd"],
    ["\u4ebf\u7eac\u9502\u80fd LFP", "\u5706\u67f1", "50 Ah", "\u4e24\u8f6e\u8f66/\u50a8\u80fd"],
    ["\u8fdc\u4e1c\u7535\u6c60 4680 LFP", "\u5706\u67f1", "26 Ah", "\u7535\u52a8\u5de5\u5177"],
  ];

  let ry = 252;
  for (const row of rows) {
    for (let i = 0; i < row.length; i++) {
      ctx.addText(slide, { left: headerX[i], top: ry, width: 130, height: 22, text: row[i], fontSize: 11, color: "#C8CDD5", typeface: ctx.fonts.body });
    }
    ry += 26;
  }

  // Advantages & limitations
  ctx.addText(slide, { left: 620, top: 420, width: 560, height: 24, text: "\u2713 \u4f18\u52bf\uff1a\u5b89\u5168\u6027\u9ad8\u3001\u5bff\u547d\u957f\u3001\u6210\u672c\u4f4e\u3001\u65e0\u6bd2\u73af\u4fdd", fontSize: 13, color: "#14B8A6", typeface: ctx.fonts.body });
  ctx.addText(slide, { left: 620, top: 448, width: 560, height: 24, text: "\u2717 \u5c40\u9650\uff1a\u80fd\u91cf\u5bc6\u5ea6\u504f\u4f4e\u3001\u4f4e\u6e29\u6027\u80fd\u5dee\u3001\u5bfc\u7535\u6027\u9700\u63d0\u5347", fontSize: 13, color: "#F87171", typeface: ctx.fonts.body });

  return slide;
}
