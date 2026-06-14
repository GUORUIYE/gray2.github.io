export async function slide01(presentation, ctx) {
  const slide = presentation.slides.add();
  slide.background.fill = "#1A1F36";

  // Kicker
  ctx.addText(slide, { left: 80, top: 200, width: 400, height: 28, text: "BATTERY TECHNOLOGY", fontSize: 14, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });

  // Accent line
  ctx.addShape(slide, { left: 80, top: 228, width: 60, height: 3, fill: "#F59E0B", line: ctx.line("#F59E0B", 0) });

  // Title line 1
  ctx.addText(slide, { left: 80, top: 250, width: 700, height: 60, text: "\u9502\u79bb\u5b50\u4e0e\u94a0\u79bb\u5b50\u7535\u6c60", fontSize: 48, color: "#FFFFFF", bold: true, typeface: ctx.fonts.title });
  // Title line 2
  ctx.addText(slide, { left: 80, top: 310, width: 700, height: 60, text: "\u7ed3\u6784\u7ec4\u6210", fontSize: 48, color: "#FFFFFF", bold: true, typeface: ctx.fonts.title });

  // Metric rail - right side
  const metrics = [
    { value: "LFP", label: "\u78f7\u9178\u94c1\u9502" },
    { value: "NMC/NCA", label: "\u4e09\u5143\u9502" },
    { value: "\u5706\u67f1", label: "18650/21700/4680" },
    { value: "\u65b9\u58f3", label: "VDA/\u5200\u7247" },
    { value: "\u94a0\u7535", label: "\u65b0\u5174\u8def\u7ebf" },
  ];

  let y = 220;
  for (const m of metrics) {
    ctx.addText(slide, { left: 820, top: y, width: 380, height: 30, text: m.value, fontSize: 22, color: "#14B8A6", bold: true, typeface: ctx.fonts.body });
    ctx.addText(slide, { left: 820, top: y + 28, width: 380, height: 22, text: m.label, fontSize: 13, color: "#C8CDD5", typeface: ctx.fonts.body });
    y += 68;
  }

  // Source footer
  ctx.addText(slide, { left: 80, top: 685, width: 900, height: 20, text: "\u6570\u636e\u622a\u81f3 2025 \u5e74\u4e3b\u6d41\u5546\u7528\u578b\u53f7  |  \u7ed3\u6784\u4e0e\u53c2\u6570\u4ec5\u4f9b\u53c2\u8003", fontSize: 10, color: "#6B7280", typeface: ctx.fonts.body });

  return slide;
}
