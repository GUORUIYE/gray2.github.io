/**
 * Gray2 Blog -- 自定义脚本
 * 参考：youyeyejie / qingshaner 等成熟方案
 */

document.addEventListener("DOMContentLoaded", function () {

  // ========== 1. 首页卡片滑入动效 ==========
  (function scrollCards() {
    var cards = document.querySelectorAll(".index-card");
    if (!cards.length) return;

    var row = document.querySelector(".row");
    if (row) row.setAttribute("style", "overflow:hidden;");

    var coefficient = document.documentElement.clientWidth > 768 ? 0.5 : 0.3;
    var origin =
      document.documentElement.clientHeight -
      cards[0].getBoundingClientRect().height * coefficient;

    function throttle(fn, wait) {
      var timer = null;
      return function () {
        if (!timer) {
          timer = setTimeout(function () {
            fn();
            timer = null;
          }, wait);
        }
      };
    }

    function handle() {
      cards.forEach(function (card) {
        var state = card.getBoundingClientRect().top - origin < 0 ? 1 : 0;
        card.setAttribute("style", "--state:" + state);
      });
    }

    handle(); // 初始执行
    document.addEventListener("scroll", throttle(handle, 100));
  })();

  // ========== 2. 代码语言显示 ==========
  (function codeLanguage() {
    var langMap = {
      js: "JavaScript",
      javascript: "JavaScript",
      ts: "TypeScript",
      typescript: "TypeScript",
      py: "Python",
      python: "Python",
      html: "HTML",
      css: "CSS",
      scss: "SCSS",
      json: "JSON",
      yaml: "YAML",
      yml: "YAML",
      md: "Markdown",
      sh: "Shell",
      bash: "Bash",
      xml: "HTML",
      sql: "SQL",
      go: "Go",
      rust: "Rust",
      java: "Java",
      cpp: "C++",
      c: "C",
    };

    document.querySelectorAll("figure.highlight").forEach(function (item) {
      var cls = item.getAttribute("class") || "";
      // 获取语言名（"highlight js" → "js"）
      var lang = cls.replace("highlight", "").trim();
      if (!lang) return;
      var label = langMap[lang] || lang.toUpperCase();
      item.setAttribute("data-type", label);
    });
  })();

  // ========== 3. 图片点击放大 ==========
  (function lightbox() {
    document.querySelectorAll(".markdown-body img").forEach(function (img) {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", function () {
        var overlay = document.createElement("div");
        overlay.style.cssText =
          "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.88);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:zoom-out;";
        overlay.addEventListener("click", function () {
          document.body.removeChild(overlay);
        });

        var clone = document.createElement("img");
        clone.src = this.src;
        clone.style.cssText =
          "max-width:90%;max-height:90%;border-radius:6px;box-shadow:0 8px 40px rgba(0,0,0,0.5);";
        overlay.appendChild(clone);
        document.body.appendChild(overlay);
      });
    });
  })();

  // ========== 4. 控制台欢迎 ==========
  console.log(
    "%c Gray2 \u6280\u672f\u7b14\u8bb0 %c \u5de5\u7a0b \u00b7 \u6280\u672f \u00b7 \u751f\u6d3b ",
    "background:#1a1a2e;color:#e8b84b;padding:6px 12px;border-radius:4px 0 0 4px;font-size:14px;",
    "background:#e8b84b;color:#1a1a2e;padding:6px 12px;border-radius:0 4px 4px 0;font-size:14px;"
  );
});
