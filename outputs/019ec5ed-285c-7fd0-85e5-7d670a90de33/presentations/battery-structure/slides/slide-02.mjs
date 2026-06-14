export async function slide02(presentation, ctx) {
  const slide = presentation.slides.add();
  slide.background.fill = "#1A1F36";

  // Kicker
  ctx.addText(slide, { left: 80, top: 40, width: 200, height: 22, text: "OVERVIEW", fontSize: 13, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });
  ctx.addShape(slide, { left: 80, top: 64, width: 40, height: 2, fill: "#F59E0B", line: ctx.line("#F59E0B", 0) });

  // Claim
  ctx.addText(slide, { left: 80, top: 76, width: 900, height: 50, text: "\u4e94\u5927\u6838\u5fc3\u7ec4\u4ef6\u6784\u6210\u4e00\u4e2a\u5b8c\u6574\u7535\u82af", fontSize: 34, color: "#FFFFFF", bold: true, typeface: ctx.fonts.title });

  // Left - 5 components
  const components = [
    { name: "\u6b63\u6781 (Cathode)", desc: "LiCoO\u2082 / LiFePO\u2084 / NMC", color: "#14B8A6" },
    { name: "\u8d1f\u6781 (Anode)", desc: "\u77f3\u58a8 / \u7845\u78b3\u590d\u5408\u6750\u6599", color: "#F59E0B" },
    { name: "\u7535\u89e3\u8d28 (Electrolyte)", desc: "LiPF\u2086 + \u6709\u673a\u6eb6\u5242", color: "#38BDF8" },
    { name: "\u9694\u819c (Separator)", desc: "PE/PP \u591a\u5c42\u590d\u5408\u819c", color: "#A78BFA" },
    { name: "\u58f3\u4f53 (Casing)", desc: "\u94a2\u58f3 / \u94dd\u58f3 / \u94dd\u5851\u819c", color: "#F87171" },
  ];

  let y = 160;
  for (const comp of components) {
    ctx.addShape(slide, { left: 96, top: y, width: 440, height: 78, fill: "#252B48", line: ctx.line("#333A5C", 1) });
    ctx.addShape(slide, { left: 80, top: y, width: 6, height: 78, fill: comp.color, line: ctx.line(comp.color, 0) });
    ctx.addText(slide, { left: 100, top: y + 10, width: 400, height: 28, text: comp.name, fontSize: 16, color: "#FFFFFF", bold: true, typeface: ctx.fonts.body });
    ctx.addText(slide, { left: 100, top: y + 40, width: 400, height: 26, text: comp.desc, fontSize: 14, color: "#C8CDD5", typeface: ctx.fonts.body });
    y += 96;
  }

  // Right - Working principles
  ctx.addShape(slide, { left: 600, top: 160, width: 600, height: 478, fill: "#252B48", line: ctx.line("#333A5C", 1) });
  ctx.addText(slide, { left: 620, top: 180, width: 560, height: 32, text: "\u7535\u82af\u5de5\u4f5c\u539f\u7406", fontSize: 20, color: "#14B8A6", bold: true, typeface: ctx.fonts.body });

  const concepts = [
    "\u5145\u7535\uff1aLi\u207A \u4ece\u6b63\u6781\u8131\u51fa\uff0c\u7ecf\u7531\u7535\u89e3\u8d28\u7a7f\u8fc7\u9694\u819c\u5d4c\u5165\u8d1f\u6781",
    "\u653e\u7535\uff1aLi\u207A \u4ece\u8d1f\u6781\u8131\u51fa\uff0c\u7ecf\u7531\u7535\u89e3\u8d28\u7a7f\u8fc7\u9694\u819c\u56de\u5230\u6b63\u6781",
    "\u9694\u819c\uff1a\u7269\u7406\u9694\u79bb\u6b63\u8d1f\u6781\uff0c\u9632\u6b62\u77ed\u8def\uff0c\u540c\u65f6\u5141\u8bb8 Li\u207A \u901a\u8fc7",
    "\u7535\u89e3\u8d28\uff1a\u63d0\u4f9b\u79bb\u5b50\u4f20\u5bfc\u901a\u9053\uff0c\u4e0d\u53c2\u4e0e\u7535\u5b50\u4f20\u5bfc",
    "\u58f3\u4f53\uff1a\u5c01\u88c5\u4e0e\u4fdd\u62a4\uff0c\u5f71\u54cd\u6563\u70ed\u4e0e\u673a\u68b0\u5b89\u5168",
  ];

  let cy = 228;
  for (const concept of concepts) {
    ctx.addText(slide, { left: 620, top: cy, width: 560, height: 50, text: concept, fontSize: 14, color: "#C8CDD5", typeface: ctx.fonts.body });
    cy += 60;
  }

  // Arrow indicator
  ctx.addText(slide, { left: 620, top: 530, width: 560, height: 28, text: "\u2192 \u5145\u7535\u65b9\u5411    \u2190 \u653e\u7535\u65b9\u5411", fontSize: 15, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });

  return slide;
}
