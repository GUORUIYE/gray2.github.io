// ========== 自定义脚本 ==========

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 控制台欢迎信息
  console.log('%c Gray2 的技术笔记 %c 工程 · 技术 · 生活 ', 'background:#1e90ff;color:#fff;padding:4px 8px;border-radius:3px 0 0 3px;font-size:14px;', 'background:#333;color:#fff;padding:4px 8px;border-radius:0 3px 3px 0;font-size:14px;');

  // 文章图片点击放大（lightbox）
  const postImages = document.querySelectorAll('.markdown-body img');
  postImages.forEach(function(img) {
    // 跳过已经是 Lightbox 元素的图片
    if (img.closest('.fancybox') || img.closest('.lightbox')) return;

    img.style.cursor = 'pointer';
    img.addEventListener('click', function(e) {
      // 如果 Fluid 已有内置 lightbox，优先使用
      if (typeof fluid_lightbox !== 'undefined') return;

      const overlay = document.createElement('div');
      overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:zoom-out;';
      const clone = document.createElement('img');
      clone.src = this.src;
      clone.style.cssText = 'max-width:90%;max-height:90%;border-radius:4px;box-shadow:0 8px 32px rgba(0,0,0,0.3);';
      overlay.appendChild(clone);
      overlay.addEventListener('click', function() {
        document.body.removeChild(overlay);
      });
      document.body.appendChild(overlay);
    });
  });
});
