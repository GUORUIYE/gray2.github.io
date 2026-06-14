export async function slide09(presentation, ctx) {
  const slide = presentation.slides.add();
  slide.background.fill = "#1A1F36";

  ctx.addText(slide, { left: 80, top: 40, width: 200, height: 22, text: "COMPARISON", fontSize: 13, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });
  ctx.addShape(slide, { left: 80, top: 64, width: 40, height: 2, fill: "#F59E0B", line: ctx.line("#F59E0B", 0) });
  ctx.addText(slide, { left: 80, top: 76, width: 1100, height: 50, text: "\u9502\u7535 vs \u94a0\u7535\uff1a\u6750\u6599\u4f53\u7cfb\u4e0e\u6027\u80fd\u8fb9\u754c\u663e\u8457\u4e0d\u540c", fontSize: 34, color: "#FFFFFF", bold: true, typeface: ctx.fonts.title });

  // Full-width comparison table
  const colX = [80, 280, 660, 1040];
  const colWidths = [200, 380, 380, 200];

  // Header row
  ctx.addShape(slide, { left: 80, top: 155, width: 1120, height: 36, fill: "#333A5C", line: ctx.line("#333A5C", 0) });

  const headers = ["\u5bf9\u6bd4\u9879", "\u9502\u79bb\u5b50\u7535\u6c60", "\u94a0\u79bb\u5b50\u7535\u6c60", "\u4f18\u52bf\u65b9"];
  for (let i = 0; i < headers.length; i++) {
    ctx.addText(slide, { left: colX[i], top: 160, width: colWidths[i], height: 28, text: headers[i], fontSize: 13, color: "#FFFFFF", bold: true, typeface: ctx.fonts.body });
  }

  const rows = [
    { item: "\u6b63\u6781", li: "LFP/NMC/NCA\uff0c\u6210\u719f\u591a\u4f59\u5e74\u4ea7\u4e1a\u94fe", na: "NaCrO\u2082/\u5c42\u72b6\u6c27\u5316\u7269/\u805a\u9634\u79bb\u5b50\uff0c\u4ea7\u4e1a\u5316\u65e9\u671f", adv: "\u5404\u6709\u4f18\u52bf", advColor: "#C8CDD5" },
    { item: "\u8d1f\u6781", li: "\u77f3\u58a8/\u7845\u78b3\uff0c\u9700\u94dc\u7b94\u96c6\u6d41\u5668", na: "\u786c\u78b3/\u65e0\u5b9a\u5f62\u78b3\uff0c\u53ef\u7528\u94dd\u7b94\u66ff\u4ee3\u94dc\u7b94", adv: "\u94a0\u7535", advColor: "#14B8A6" },
    { item: "\u80fd\u91cf\u5bc6\u5ea6", li: "140\u2013260 Wh/kg\uff0c\u542b LFP\u2013NCA", na: "120\u2013160 Wh/kg\uff0c\u521d\u6b65\u4ea7\u4e1a\u5316", adv: "\u9502\u7535", advColor: "#F59E0B" },
    { item: "\u5faa\u73af\u5bff\u547d", li: "1,000\u201310,000+ \u6b21\uff0cLFP\u5bff\u547d\u7a81\u51fa", na: "2,000\u20135,000 \u6b21\uff0c\u6301\u7eed\u6539\u8fdb\u4e2d", adv: "\u9502\u7535", advColor: "#F59E0B" },
    { item: "\u4f4e\u6e29\u6027\u80fd", li: "-20\u00B0C \u663e\u8457\u8870\u51cf\uff0cLFP\u5c24\u5176", na: "-40\u00B0C \u4f9d\u7136\u5de5\u4f5c\uff0c\u4f4e\u6e29\u4f18\u52bf\u660e\u663e", adv: "\u94a0\u7535", advColor: "#14B8A6" },
    { item: "\u6210\u672c", li: "\u2248 0.50\u20130.75 \u5143/Wh\uff0c\u94b4\u8d44\u6e90\u4f9d\u8d56", na: "\u2248 0.30\u20130.45 \u5143/Wh\uff0c\u94a0\u8d44\u6e90\u4e30\u5bcc", adv: "\u94a0\u7535", advColor: "#14B8A6" },
    { item: "\u5b89\u5168\u6027", li: "\u70ed\u5931\u63a7\u98ce\u9669\u5b58\u5728\uff0c\u9700\u4e25\u683cBMS", na: "\u70ed\u7a33\u5b9a\u6027\u66f4\u4f18\uff0c\u7a7a\u6c14\u4e2d\u4e0d\u71c3", adv: "\u94a0\u7535", advColor: "#14B8A6" },
  ];

  let ry = 197;
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r];
    if (r % 2 === 0) {
      ctx.addShape(slide, { left: 80, top: ry - 2, width: 1120, height: 56, fill: "#1E2440", line: ctx.line("#1E2440", 0) });
    }

    ctx.addText(slide, { left: colX[0], top: ry + 8, width: colWidths[0], height: 38, text: row.item, fontSize: 13, color: "#FFFFFF", bold: true, typeface: ctx.fonts.body });
    ctx.addText(slide, { left: colX[1], top: ry + 6, width: colWidths[1], height: 42, text: row.li, fontSize: 12, color: "#6B7280", typeface: ctx.fonts.body });
    ctx.addText(slide, { left: colX[2], top: ry + 6, width: colWidths[2], height: 42, text: row.na, fontSize: 12, color: "#14B8A6", typeface: ctx.fonts.body });
    ctx.addText(slide, { left: colX[3], top: ry + 8, width: colWidths[3], height: 38, text: row.adv, fontSize: 12, color: row.advColor, typeface: ctx.fonts.body });

    ry += 62;
  }

  return slide;
}
