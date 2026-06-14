export async function slide04(presentation, ctx) {
  const slide = presentation.slides.add();
  slide.background.fill = "#1A1F36";

  ctx.addText(slide, { left: 80, top: 40, width: 200, height: 22, text: "NMC / NCA CATHODE", fontSize: 13, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });
  ctx.addShape(slide, { left: 80, top: 64, width: 40, height: 2, fill: "#F59E0B", line: ctx.line("#F59E0B", 0) });
  ctx.addText(slide, { left: 80, top: 76, width: 900, height: 50, text: "\u80fd\u91cf\u5bc6\u5ea6\u9a71\u52a8\u7684\u6b63\u6781\u8def\u7ebf", fontSize: 34, color: "#FFFFFF", bold: true, typeface: ctx.fonts.title });

  // Left: Parameter bars
  const params = [
    { label: "\u80fd\u91cf\u5bc6\u5ea6", value: "180\u2013260 Wh/kg", pct: 0.80, color: "#F59E0B" },
    { label: "\u5faa\u73af\u5bff\u547d", value: "1,000\u20133,000 \u6b21", pct: 0.50, color: "#F59E0B" },
    { label: "\u70ed\u7a33\u5b9a\u6027", value: "200\u2013280\u00B0C", pct: 0.40, color: "#F87171" },
    { label: "\u6210\u672c", value: "\u8f83\u9ad8 (\u2248 0.75 \u5143/Wh)", pct: 0.60, color: "#F87171" },
    { label: "\u5bfc\u7535\u6027", value: "\u4f18\u5f02", pct: 0.90, color: "#14B8A6" },
  ];

  let by = 160;
  for (const p of params) {
    ctx.addText(slide, { left: 80, top: by, width: 140, height: 24, text: p.label, fontSize: 13, color: "#C8CDD5", typeface: ctx.fonts.body });
    ctx.addShape(slide, { left: 230, top: by + 2, width: 280, height: 18, fill: "#252B48", line: ctx.line("#333A5C", 1) });
    ctx.addShape(slide, { left: 230, top: by + 2, width: Math.round(280 * p.pct), height: 18, fill: p.color, line: ctx.line(p.color, 0) });
    ctx.addText(slide, { left: 520, top: by, width: 200, height: 24, text: p.value, fontSize: 13, color: "#FFFFFF", typeface: ctx.fonts.body });
    by += 36;
  }

  // Right: NMC vs NCA + model table
  ctx.addShape(slide, { left: 600, top: 160, width: 600, height: 478, fill: "#252B48", line: ctx.line("#333A5C", 1) });
  ctx.addText(slide, { left: 620, top: 175, width: 400, height: 30, text: "NMC vs NCA \u5bf9\u6bd4 + \u5178\u578b\u578b\u53f7", fontSize: 18, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });

  // NMC vs NCA
  ctx.addText(slide, { left: 620, top: 218, width: 560, height: 22, text: "NMC (Ni:Mn:Co): 811/622/532 \u7cfb\u5217\uff0c\u5e73\u8861\u80fd\u91cf\u5bc6\u5ea6\u4e0e\u6210\u672c", fontSize: 12, color: "#FFFFFF", bold: true, typeface: ctx.fonts.body });
  ctx.addText(slide, { left: 620, top: 240, width: 560, height: 22, text: "NCA (LiNi\u2080.\u2088Co\u2080.\u2081\u2085Al\u2080.\u2085O\u2082): Tesla \u4f18\u5148\u9009\u578b\uff0c\u80fd\u91cf\u5bc6\u5ea6\u9886\u5148", fontSize: 12, color: "#FFFFFF", bold: true, typeface: ctx.fonts.body });

  // Table
  const headers = ["\u5382\u5546/\u578b\u53f7", "\u5c01\u88c5", "\u5bb9\u91cf/\u80fd\u91cf\u5bc6\u5ea6", "\u5e94\u7528"];
  const headerX = [620, 780, 910, 1060];
  let hy = 275;
  for (let i = 0; i < headers.length; i++) {
    ctx.addText(slide, { left: headerX[i], top: hy, width: 130, height: 22, text: headers[i], fontSize: 12, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });
  }

  const rows = [
    ["\u5b81\u5fb7\u65f6\u4ee3 NMC 811", "\u65b9\u58f3", "255 Wh/kg", "\u9ad8\u7aef\u4e58\u7528\u8f66"],
    ["\u677e\u4e0b NCA 21700", "\u5706\u67f1", "260 Wh/kg", "Tesla Model 3"],
    ["LGES NCMA", "\u65b9\u58f3", "250 Wh/kg", "GM/\u73b0\u4ee3"],
    ["\u4e09\u661f SDI NMC", "\u65b9\u58f3", "240 Wh/kg", "BMW/\u5965\u8fea"],
    ["SK On NMC 811", "\u8f6f\u5305", "245 Wh/kg", "\u73b0\u4ee3/\u798f\u7279"],
  ];

  let ry = hy + 28;
  for (const row of rows) {
    for (let i = 0; i < row.length; i++) {
      ctx.addText(slide, { left: headerX[i], top: ry, width: 130, height: 22, text: row[i], fontSize: 11, color: "#C8CDD5", typeface: ctx.fonts.body });
    }
    ry += 26;
  }

  ctx.addText(slide, { left: 620, top: 435, width: 560, height: 24, text: "\u2713 \u4f18\u52bf\uff1a\u9ad8\u80fd\u91cf\u5bc6\u5ea6\u3001\u826f\u597d\u5bfc\u7535\u6027\u3001\u5feb\u5145\u6027\u80fd\u597d", fontSize: 13, color: "#14B8A6", typeface: ctx.fonts.body });
  ctx.addText(slide, { left: 620, top: 463, width: 560, height: 24, text: "\u2717 \u5c40\u9650\uff1a\u70ed\u7a33\u5b9a\u6027\u5dee\u3001\u94b4\u4f9d\u8d56\u3001\u6210\u672c\u8f83\u9ad8", fontSize: 13, color: "#F87171", typeface: ctx.fonts.body });

  return slide;
}
