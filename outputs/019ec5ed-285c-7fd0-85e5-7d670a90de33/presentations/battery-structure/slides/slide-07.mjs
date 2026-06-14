export async function slide07(presentation, ctx) {
  const slide = presentation.slides.add();
  slide.background.fill = "#1A1F36";

  ctx.addText(slide, { left: 80, top: 40, width: 200, height: 22, text: "POUCH CELL", fontSize: 13, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });
  ctx.addShape(slide, { left: 80, top: 64, width: 40, height: 2, fill: "#F59E0B", line: ctx.line("#F59E0B", 0) });
  ctx.addText(slide, { left: 80, top: 76, width: 1000, height: 50, text: "\u94dd\u5851\u819c\u5c01\u88c5\uff0c\u66f4\u9ad8\u80fd\u91cf\u5bc6\u5ea6\u4e0e\u7075\u6d3b\u8bbe\u8ba1", fontSize: 34, color: "#FFFFFF", bold: true, typeface: ctx.fonts.title });

  // Left: Structure
  ctx.addShape(slide, { left: 80, top: 160, width: 500, height: 478, fill: "#252B48", line: ctx.line("#333A5C", 1) });
  ctx.addText(slide, { left: 100, top: 175, width: 450, height: 30, text: "\u8f6f\u5305\u7535\u82af\u7ed3\u6784\uff08\u53e0\u7247\u5f0f\u4e3a\u4e3b\uff09", fontSize: 18, color: "#14B8A6", bold: true, typeface: ctx.fonts.body });

  const layers = [
    { label: "\u6781\u7ec4\uff08\u53e0\u7247\u5f0f\uff09", desc: "\u6b63\u6781/\u9694\u819c/\u8d1f\u6781\u5355\u7247\u4ea4\u66ff\u5806\u53e0", color: "#14B8A6" },
    { label: "\u6781\u8033\uff08\u94dd/\u954d\uff09", desc: "\u4e24\u4fa7\u5f15\u51fa\uff0c\u8d85\u58f0\u6ce2\u710a\u63a5\u81f3\u94dd\u5851\u819c", color: "#F59E0B" },
    { label: "\u7535\u89e3\u6db2", desc: "\u771f\u7a7a\u6ce8\u6db2\u540e\u5c01\u53e3", color: "#38BDF8" },
    { label: "\u94dd\u5851\u819c\u5c01\u88c5", desc: "\u5916\u5c42\u5c3c\u9f99 + \u4e2d\u5c42\u94dd\u7b94 + \u5185\u5c42PP \u4e09\u5c42\u590d\u5408", color: "#A78BFA" },
    { label: "\u9876\u5c01/\u4fa7\u5c01", desc: "\u70ed\u5c01 + \u6298\u8fb9\u5de5\u827a\u4fdd\u8bc1\u5bc6\u5c01\u6027", color: "#F87171" },
  ];

  let ly = 220;
  for (const l of layers) {
    ctx.addShape(slide, { left: 100, top: ly, width: 8, height: 68, fill: l.color, line: ctx.line(l.color, 0) });
    ctx.addText(slide, { left: 120, top: ly + 8, width: 430, height: 22, text: l.label, fontSize: 15, color: "#FFFFFF", bold: true, typeface: ctx.fonts.body });
    ctx.addText(slide, { left: 120, top: ly + 32, width: 430, height: 28, text: l.desc, fontSize: 12, color: "#C8CDD5", typeface: ctx.fonts.body });
    ly += 80;
  }

  // Right: Specs
  ctx.addShape(slide, { left: 600, top: 160, width: 600, height: 478, fill: "#252B48", line: ctx.line("#333A5C", 1) });
  ctx.addText(slide, { left: 620, top: 175, width: 400, height: 30, text: "\u89c4\u683c\u5bf9\u6bd4\u4e0e\u5178\u578b\u578b\u53f7", fontSize: 18, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });

  const headers = ["\u5382\u5546/\u578b\u53f7", "\u6b63\u6781", "\u5bb9\u91cf/\u539a\u5ea6", "\u5e94\u7528"];
  const headerX = [620, 800, 940, 1080];
  for (let i = 0; i < headers.length; i++) {
    ctx.addText(slide, { left: headerX[i], top: 220, width: 130, height: 22, text: headers[i], fontSize: 12, color: "#F59E0B", bold: true, typeface: ctx.fonts.body });
  }

  const rows = [
    ["LGES NCMA \u8f6f\u5305", "NMC", "37 Ah", "GM Ultium"],
    ["SK On NMC \u8f6f\u5305", "NMC", "75 Ah", "\u73b0\u4ee3/\u798f\u7279"],
    ["\u8fdc\u666f AESC \u8f6f\u5305", "NMC", "52 Ah", "\u65e5\u4ea7 Leaf"],
    ["\u5b5a\u80fd\u79d1\u6280 \u8f6f\u5305", "NMC", "28\u201375 Ah", "\u6234\u59c6\u52d2/\u5e7f\u6c7d"],
  ];

  let ry = 252;
  for (const row of rows) {
    for (let i = 0; i < row.length; i++) {
      ctx.addText(slide, { left: headerX[i], top: ry, width: 130, height: 22, text: row[i], fontSize: 11, color: "#C8CDD5", typeface: ctx.fonts.body });
    }
    ry += 26;
  }

  // Advantages
  ctx.addText(slide, { left: 620, top: 370, width: 100, height: 24, text: "\u2713 \u4f18\u52bf", fontSize: 15, color: "#14B8A6", bold: true, typeface: ctx.fonts.body });
  const advs = [
    "\u80fd\u91cf\u5bc6\u5ea6\u6700\u9ad8\uff08\u65e0\u521a\u6027\u58f3\u4f53\u91cd\u91cf\uff09",
    "\u5f62\u72b6\u7075\u6d3b\uff0c\u53ef\u5b9a\u5236\u539a\u5ea6\u4e0e\u5c3a\u5bf8",
    "\u91cd\u91cf\u8f7b\uff0c\u6210\u7ec4\u6548\u7387\u9ad8",
  ];
  let ay = 398;
  for (const a of advs) {
    ctx.addText(slide, { left: 620, top: ay, width: 560, height: 22, text: "\u2022 " + a, fontSize: 12, color: "#C8CDD5", typeface: ctx.fonts.body });
    ay += 24;
  }

  // Limitations
  ctx.addText(slide, { left: 620, top: 470, width: 100, height: 24, text: "\u2717 \u5c40\u9650", fontSize: 15, color: "#F87171", bold: true, typeface: ctx.fonts.body });
  const lims = [
    "\u673a\u68b0\u5f3a\u5ea6\u4f4e\uff0c\u9700\u989d\u5916\u6a21\u7ec4/\u7535\u6c60\u5305\u4fdd\u62a4",
    "\u5bc6\u5c01\u6027\u4f9d\u8d56\u70ed\u5c01\u5de5\u827a\u4e00\u81f4\u6027",
    "\u80c0\u6c14\u98ce\u9669\u9700\u8bbe\u8ba1\u6cc4\u538b\u901a\u9053",
  ];
  let ly2 = 498;
  for (const l of lims) {
    ctx.addText(slide, { left: 620, top: ly2, width: 560, height: 22, text: "\u2022 " + l, fontSize: 12, color: "#C8CDD5", typeface: ctx.fonts.body });
    ly2 += 24;
  }

  return slide;
}
