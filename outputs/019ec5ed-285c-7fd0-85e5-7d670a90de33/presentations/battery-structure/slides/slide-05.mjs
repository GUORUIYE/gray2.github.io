export async function slide05(presentation, ctx) {
  const slide = presentation.slides.add();
  slide.background.fill = "#1A1F36";

  ctx.addText(slide, { left: 80, top: 40, width: 200, height: 22, text: "CYLINDRICAL CELL", fontSize: 13, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });
  ctx.addShape(slide, { left: 80, top: 64, width: 40, height: 2, fill: "#F59E0B", line: ctx.line("#F59E0B", 0) });
  ctx.addText(slide, { left: 80, top: 76, width: 1000, height: 50, text: "\u6807\u51c6\u5316\u5377\u7ed5\u5f62\u6001\uff0c\u517c\u987e\u6563\u70ed\u4e0e\u4e00\u81f4\u6027", fontSize: 34, color: "#FFFFFF", bold: true, typeface: ctx.fonts.title });

  // Left: Structure
  ctx.addShape(slide, { left: 80, top: 160, width: 500, height: 478, fill: "#252B48", line: ctx.line("#333A5C", 1) });
  ctx.addText(slide, { left: 100, top: 175, width: 450, height: 30, text: "\u5706\u67f1\u7535\u82af\u7ed3\u6784\uff08\u5377\u7ed5\u5f0f\uff09", fontSize: 18, color: "#14B8A6", bold: true, typeface: ctx.fonts.body });

  const layers = [
    { label: "\u6781\u82af\uff08\u5377\u7ed5\u4f53\uff09", desc: "\u6b63\u6781 + \u9694\u819c + \u8d1f\u6781", color: "#14B8A6" },
    { label: "\u7535\u89e3\u6db2\u6d78\u6da6", desc: "LiPF\u2086 \u6eb6\u6db2\u586b\u5145", color: "#38BDF8" },
    { label: "\u5b89\u5168\u9600 / CID", desc: "\u8fc7\u70ed/\u8fc7\u538b\u4fdd\u62a4", color: "#F59E0B" },
    { label: "\u94a2\u58f3\u5916\u58f3", desc: "\u9540\u954d\u94a2\u58f3 + \u5bc6\u5c01", color: "#6B7280" },
    { label: "\u7edd\u7f18\u73af / \u76d6\u677f", desc: "\u6b63\u8d1f\u6781\u5f15\u51fa\u7aef\u5b50", color: "#A78BFA" },
  ];

  let ly = 220;
  for (const l of layers) {
    ctx.addShape(slide, { left: 100, top: ly, width: 8, height: 70, fill: l.color, line: ctx.line(l.color, 0) });
    ctx.addText(slide, { left: 120, top: ly + 8, width: 400, height: 22, text: l.label, fontSize: 15, color: "#FFFFFF", bold: true, typeface: ctx.fonts.body });
    ctx.addText(slide, { left: 120, top: ly + 32, width: 420, height: 28, text: l.desc, fontSize: 12, color: "#C8CDD5", typeface: ctx.fonts.body });
    ly += 80;
  }

  // Right: Model table
  ctx.addShape(slide, { left: 600, top: 160, width: 600, height: 478, fill: "#252B48", line: ctx.line("#333A5C", 1) });
  ctx.addText(slide, { left: 620, top: 175, width: 400, height: 30, text: "\u5178\u578b\u578b\u53f7\u4e0e\u89c4\u683c", fontSize: 18, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });

  const headers = ["\u578b\u53f7", "\u5c3a\u5bf8(\u00D7H mm)", "\u5bb9\u91cf", "\u4ee3\u8868\u5e94\u7528"];
  const headerX = [620, 760, 940, 1060];
  for (let i = 0; i < headers.length; i++) {
    ctx.addText(slide, { left: headerX[i], top: 220, width: 130, height: 22, text: headers[i], fontSize: 12, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });
  }

  const rows = [
    ["18650", "18 \u00D7 65", "2.5\u20133.5 Ah", "\u7b14\u8bb0\u672c/\u7535\u52a8\u5de5\u5177"],
    ["21700", "21 \u00D7 70", "4.0\u20135.0 Ah", "Tesla Model 3"],
    ["4680", "46 \u00D7 80", "22\u201326 Ah", "Tesla Model Y"],
    ["26650", "26 \u00D7 65", "3.2\u20133.8 Ah", "\u7535\u52a8\u5de5\u5177/\u50a8\u80fd"],
    ["32700", "32 \u00D7 70", "5.0\u20136.0 Ah", "\u4e24\u8f6e\u8f66/\u50a8\u80fd"],
  ];

  let ry = 252;
  for (const row of rows) {
    for (let i = 0; i < row.length; i++) {
      ctx.addText(slide, { left: headerX[i], top: ry, width: 130, height: 22, text: row[i], fontSize: 11, color: "#C8CDD5", typeface: ctx.fonts.body });
    }
    ry += 26;
  }

  // 4680 feature highlight
  ctx.addText(slide, { left: 620, top: 400, width: 560, height: 26, text: "4680 \u65e0\u6781\u8033\u8bbe\u8ba1 (Tabless)", fontSize: 16, color: "#14B8A6", bold: true, typeface: ctx.fonts.body });
  ctx.addText(slide, { left: 620, top: 432, width: 560, height: 44, text: "\u6781\u8033\u5bbd\u5ea6\u7b49\u4e8e\u7535\u82af\u9ad8\u5ea6\uff0c\u7535\u5b50\u4f20\u8f93\u8def\u5f84\u7f29\u77ed\uff0c\u5185\u963b\u964d\u4f4e 5\u00D7\uff0c\u4ea7\u70ed\u5927\u5e45\u51cf\u5c11\uff0c\u652f\u6301 4C+ \u5feb\u5145", fontSize: 13, color: "#C8CDD5", typeface: ctx.fonts.body });

  return slide;
}
