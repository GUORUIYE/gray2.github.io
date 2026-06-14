export async function slide08(presentation, ctx) {
  const slide = presentation.slides.add();
  slide.background.fill = "#1A1F36";

  ctx.addText(slide, { left: 80, top: 40, width: 200, height: 22, text: "SODIUM-ION", fontSize: 13, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });
  ctx.addShape(slide, { left: 80, top: 64, width: 40, height: 2, fill: "#F59E0B", line: ctx.line("#F59E0B", 0) });
  ctx.addText(slide, { left: 80, top: 76, width: 1100, height: 50, text: "\u94a0\u7535\u4ee5\u6210\u672c\u4e0e\u8d44\u6e90\u4f18\u52bf\u5728\u50a8\u80fd\u4e0e\u4f4e\u901f\u573a\u666f\u7a81\u7834", fontSize: 34, color: "#FFFFFF", bold: true, typeface: ctx.fonts.title });

  // Left: Component comparison table
  ctx.addShape(slide, { left: 80, top: 160, width: 500, height: 478, fill: "#252B48", line: ctx.line("#333A5C", 1) });
  ctx.addText(slide, { left: 100, top: 175, width: 450, height: 30, text: "\u94a0\u7535\u5173\u952e\u7ec4\u4ef6 vs \u9502\u7535", fontSize: 18, color: "#14B8A6", bold: true, typeface: ctx.fonts.body });

  // Column headers
  ctx.addText(slide, { left: 100, top: 215, width: 100, height: 22, text: "\u7ec4\u4ef6", fontSize: 12, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });
  ctx.addText(slide, { left: 210, top: 215, width: 160, height: 22, text: "\u9502\u7535\u5178\u578b\u65b9\u6848", fontSize: 12, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });
  ctx.addText(slide, { left: 380, top: 215, width: 180, height: 22, text: "\u94a0\u7535\u5178\u578b\u65b9\u6848", fontSize: 12, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });

  const comps = [
    { comp: "\u6b63\u6781", li: "LFP/NMC/NCA", na: "NaCrO\u2082/\u5c42\u72b6\u6c27\u5316\u7269/Na\u2083V\u2082(PO\u2084)\u2083" },
    { comp: "\u8d1f\u6781", li: "\u77f3\u58a8/\u7845\u78b3", na: "\u786c\u78b3/\u8f6f\u78b3/\u65e0\u5b9a\u5f62\u78b3" },
    { comp: "\u7535\u89e3\u8d28", li: "LiPF\u2086 + \u78f7\u9178\u916f\u6eb6\u5242", na: "NaPF\u2086/NaClO\u2084 + \u78f7\u9178\u916f/\u9192\u6eb6\u5242" },
    { comp: "\u9694\u819c", li: "PE/PP \u591a\u5c42\u819c", na: "\u7eb3\u7c73\u7ea4\u7ef4\u6d82\u8986 PP \u819c" },
    { comp: "\u96c6\u6d41\u5668", li: "Cu \u7b94 (\u8d1f\u6781\u96c6\u6d41)", na: "Al \u7b94 (\u8d1f\u6781\u53ef\u7528\u94dd\u7b94)" },
  ];

  let cy = 245;
  for (const c of comps) {
    ctx.addShape(slide, { left: 96, top: cy - 4, width: 476, height: 44, fill: "#1E2440", line: ctx.line("#1E2440", 0) });
    ctx.addText(slide, { left: 100, top: cy, width: 100, height: 20, text: c.comp, fontSize: 12, color: "#FFFFFF", bold: true, typeface: ctx.fonts.body });
    ctx.addText(slide, { left: 210, top: cy, width: 160, height: 20, text: c.li, fontSize: 11, color: "#6B7280", typeface: ctx.fonts.body });
    ctx.addText(slide, { left: 380, top: cy, width: 180, height: 20, text: c.na, fontSize: 11, color: "#14B8A6", typeface: ctx.fonts.body });
    cy += 52;
  }

  // Right: Model table
  ctx.addShape(slide, { left: 600, top: 160, width: 600, height: 478, fill: "#252B48", line: ctx.line("#333A5C", 1) });
  ctx.addText(slide, { left: 620, top: 175, width: 400, height: 30, text: "\u94a0\u7535\u5178\u578b\u4ea7\u54c1", fontSize: 18, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });

  const headers = ["\u5382\u5546/\u578b\u53f7", "\u6b63\u6781\u8def\u7ebf", "\u80fd\u91cf\u5bc6\u5ea6", "\u5e94\u7528"];
  const headerX = [620, 790, 940, 1080];
  for (let i = 0; i < headers.length; i++) {
    ctx.addText(slide, { left: headerX[i], top: 215, width: 130, height: 22, text: headers[i], fontSize: 12, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });
  }

  const rows = [
    ["\u5b81\u5fb7\u65f6\u4ee3 \u94a0\u7535", "\u5c42\u72b6\u6c27\u5316\u7269", "160 Wh/kg", "\u4e24\u8f6e\u8f66/\u50a8\u80fd"],
    ["\u4e2d\u79d1\u6d77\u94a0", "\u5c42\u72b6\u6c27\u5316\u7269", "145 Wh/kg", "\u4f4e\u901f\u8f66/\u50a8\u80fd"],
    ["\u5b5a\u80fd\u79d1\u6280 \u94a0\u7535", "Na\u2083V\u2082(PO\u2084)\u2083", "120 Wh/kg", "\u50a8\u80fd"],
    ["\u8702\u5de2\u80fd\u6e90 \u94a0\u7535", "\u5c42\u72b6\u6c27\u5316\u7269", "155 Wh/kg", "\u4e58\u7528\u8f66"],
    ["\u7ef4\u79d1\u6280\u672f \u94a0\u7535", "\u5c42\u72b6/\u805a\u9634\u79bb\u5b50", "130 Wh/kg", "\u4e24\u8f6e\u8f66"],
  ];

  let ry = 245;
  for (const row of rows) {
    for (let i = 0; i < row.length; i++) {
      ctx.addText(slide, { left: headerX[i], top: ry, width: 130, height: 22, text: row[i], fontSize: 11, color: "#C8CDD5", typeface: ctx.fonts.body });
    }
    ry += 26;
  }

  // Key advantage & limitation
  ctx.addText(slide, { left: 620, top: 390, width: 540, height: 24, text: "\u2713 \u94a0\u8d44\u6e90\u4e30\u5bcc\u3001\u6210\u672c\u4f4e\u3001\u4f4e\u6e29\u6027\u80fd\u4f18", fontSize: 14, color: "#14B8A6", typeface: ctx.fonts.body });
  ctx.addText(slide, { left: 620, top: 420, width: 540, height: 24, text: "\u2717 \u80fd\u91cf\u5bc6\u5ea6\u504f\u4f4e\uff08120\u2013160 Wh/kg\uff09\u3001\u5faa\u73af\u5bff\u547d\u5f85\u63d0\u5347", fontSize: 14, color: "#F87171", typeface: ctx.fonts.body });

  return slide;
}
