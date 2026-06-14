export async function slide10(presentation, ctx) {
  const slide = presentation.slides.add();
  slide.background.fill = "#1A1F36";

  ctx.addText(slide, { left: 80, top: 40, width: 200, height: 22, text: "SUMMARY", fontSize: 13, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });
  ctx.addShape(slide, { left: 80, top: 64, width: 40, height: 2, fill: "#F59E0B", line: ctx.line("#F59E0B", 0) });
  ctx.addText(slide, { left: 80, top: 76, width: 1100, height: 50, text: "\u591a\u6280\u672f\u8def\u7ebf\u5e76\u884c\u6f14\u8fdb\uff0c\u573a\u666f\u5339\u914d\u51b3\u5b9a\u9009\u578b", fontSize: 34, color: "#FFFFFF", bold: true, typeface: ctx.fonts.title });

  // Three route columns
  const routes = [
    { title: "\u9ad8\u80fd\u91cf\u5bc6\u5ea6\u8def\u7ebf", color: "#F59E0B", items: ["NMC/NCA \u4e09\u5143\u9502\u7535", "\u5706\u67f1/\u65b9\u58f3/\u8f6f\u5305\u591a\u5c01\u88c5", "\u5e94\u7528\uff1a\u9ad8\u7aef\u4e58\u7528\u8f66\u3001\u50a8\u80fd", "\u8d8b\u52bf\uff1a\u9ad8\u954d\u4f4e\u94b4\u3001\u7845\u78b3\u8d1f\u6781"] },
    { title: "\u5b89\u5168\u4e0e\u7ecf\u6d4e\u8def\u7ebf", color: "#14B8A6", items: ["LFP \u78f7\u9178\u94c1\u9502\u8def\u7ebf", "\u65b9\u58f3\uff08\u5200\u7247\uff09\u4e3a\u4e3b\u6d41\u5c01\u88c5", "\u5e94\u7528\uff1a\u5546\u7528\u8f66\u3001\u50a8\u80fd\u3001\u4e24\u8f6e\u8f66", "\u8d8b\u52bf\uff1aCTP/CTC \u7ed3\u6784\u521b\u65b0"] },
    { title: "\u65b0\u5174\u4f4e\u6210\u672c\u8def\u7ebf", color: "#38BDF8", items: ["\u94a0\u79bb\u5b50\u7535\u6c60", "\u65b9\u58f3/\u5706\u67f1\u5c01\u88c5\u5747\u53ef", "\u5e94\u7528\uff1a\u4f4e\u901f\u8f66\u3001\u50a8\u80fd\u3001\u4e24\u8f6e\u8f66", "\u8d8b\u52bf\uff1a\u80fd\u91cf\u5bc6\u5ea6\u6301\u7eed\u63d0\u5347"] },
  ];

  let x = 80;
  for (const route of routes) {
    ctx.addShape(slide, { left: x, top: 155, width: 370, height: 278, fill: "#252B48", line: ctx.line("#333A5C", 1) });
    ctx.addShape(slide, { left: x, top: 155, width: 370, height: 5, fill: route.color, line: ctx.line(route.color, 0) });

    ctx.addText(slide, { left: x + 20, top: 175, width: 330, height: 30, text: route.title, fontSize: 18, color: route.color, bold: true, typeface: ctx.fonts.body });

    let iy = 218;
    for (const item of route.items) {
      ctx.addText(slide, { left: x + 20, top: iy, width: 330, height: 26, text: "\u2022 " + item, fontSize: 14, color: "#C8CDD5", typeface: ctx.fonts.body });
      iy += 34;
    }
    x += 390;
  }

  // Key trends
  ctx.addText(slide, { left: 80, top: 465, width: 200, height: 30, text: "\u5173\u952e\u8d8b\u52bf", fontSize: 20, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });

  const trends = [
    "1. CTP/CTC/CTB \u7ed3\u6784\u521b\u65b0\uff1a\u53bb\u6a21\u7ec4\u5316\u3001\u7535\u6c60\u8f66\u8eab\u4e00\u4f53\u5316",
    "2. \u9ad8\u954d\u4f4e\u94b4\uff1aNMC 811 \u2192 NCMA/M4L \u5411\u65e0\u94b4\u8fc8\u8fdb",
    "3. \u56fa\u6001\u7535\u6c60\uff1a\u534a\u56fa\u6001\u9010\u6b65\u91cf\u4ea7\uff0c\u5168\u56fa\u6001\u4ecd\u6709\u6750\u6599\u6311\u6218",
    "4. \u94a0\u7535\u6c60\u52a0\u901f\uff1a\u4ece\u5b9e\u9a8c\u5ba4\u8d70\u5411\u767e\u5146\u74e6\u65f6\u7ea7\u50a8\u80fd\u9879\u76ee",
  ];

  let ty = 500;
  for (const t of trends) {
    ctx.addText(slide, { left: 80, top: ty, width: 1120, height: 26, text: t, fontSize: 14, color: "#C8CDD5", typeface: ctx.fonts.body });
    ty += 30;
  }

  // Footer
  ctx.addText(slide, { left: 80, top: 685, width: 900, height: 20, text: "\u6570\u636e\u622a\u81f3 2025 \u5e74\u4e3b\u6d41\u5546\u7528\u578b\u53f7  |  \u7ed3\u6784\u4e0e\u53c2\u6570\u4ec5\u4f9b\u53c2\u8003", fontSize: 10, color: "#6B7280", typeface: ctx.fonts.body });

  return slide;
}
