/**
 * 背景图片设置 —— 手机端/桌面端自适应
 * 替换 desktopBg / mobileBg 为你的图片 URL
 */

// 桌面端背景（可替换为你的图片链接）
var desktopBg = "none";
// 手机端背景
var mobileBg = "none";

(function () {
  var bgEl = document.getElementById("web_bg");
  if (!bgEl) return;

  var isMobile = window.innerWidth < 768;
  var bg = isMobile ? mobileBg : desktopBg;

  // 使用 CSS 渐变兜底 —— 背景图或纯色渐变
  bgEl.setAttribute(
    "style",
    "position:fixed;width:100%;height:100%;z-index:-1;" +
    "background: linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f2b4a 70%, #1a3a5c 100%);" +
    (bg && bg !== "none" ? "background-image: url(" + bg + ");background-size:cover;background-position:center;" : "")
  );

  // 清空 Hero 区原有背景，让全局背景透出
  var banner = document.getElementById("banner");
  if (banner) {
    banner.setAttribute("style", "background-image:none;background-color:transparent;");
    var mask = banner.querySelector(".mask");
    if (mask) {
      mask.setAttribute("style", "background-color:rgba(0,0,0,0.15);");
    }
  }
})();
