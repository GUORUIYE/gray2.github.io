// ==========================================
// Gray2 技术笔记 - 自定义脚本
// ==========================================

document.addEventListener('DOMContentLoaded', function() {

  // ========== 1. 控制台欢迎信息 ==========
  console.log('%c Gray2 的技术笔记 %c 工程 · 技术 · 生活 ',
    'background:#1a1a2e;color:#e8b84b;padding:6px 12px;border-radius:4px 0 0 4px;font-size:15px;font-weight:bold;',
    'background:#e8b84b;color:#1a1a2e;padding:6px 12px;border-radius:0 4px 4px 0;font-size:15px;'
  );
  console.log('%c✦ 知行合一，格物致知 ✦', 'color:#4a90d9;font-size:13px;font-style:italic;');
  console.log('%c🔗 https://blog-orpin-omega-53.vercel.app', 'color:#8e9aaf;font-size:12px;');

  // ========== 2. 文章图片点击放大（Lightbox） ==========
  (function setupLightbox() {
    // 检查 Fluid 是否已有内置 lightbox
    if (typeof fluid_lightbox !== 'undefined' || typeof fancybox !== 'undefined') return;

    const postImages = document.querySelectorAll('.markdown-body img');
    postImages.forEach(function(img) {
      if (img.closest('.fancybox') || img.closest('.lightbox')) return;

      img.style.cursor = 'pointer';
      img.addEventListener('click', function(e) {
        const overlay = document.createElement('div');
        overlay.style.cssText =
          'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.88);' +
          'z-index:9999;display:flex;align-items:center;justify-content:center;' +
          'cursor:zoom-out;animation:fadeIn 0.25s ease;';

        // 添加关闭按钮
        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cssText =
          'position:absolute;top:20px;right:30px;font-size:36px;color:#fff;' +
          'cursor:pointer;opacity:0.7;transition:opacity 0.2s;';
        closeBtn.onmouseenter = function() { this.style.opacity = '1'; };
        closeBtn.onmouseleave = function() { this.style.opacity = '0.7'; };
        closeBtn.onclick = function() { document.body.removeChild(overlay); };

        const clone = document.createElement('img');
        clone.src = this.src;
        clone.alt = this.alt || '';
        clone.style.cssText =
          'max-width:90%;max-height:90%;border-radius:8px;' +
          'box-shadow:0 12px 48px rgba(0,0,0,0.4);animation:zoomIn 0.3s ease;';

        overlay.appendChild(closeBtn);
        overlay.appendChild(clone);
        overlay.addEventListener('click', function(e) {
          if (e.target === overlay) document.body.removeChild(overlay);
        });
        document.body.appendChild(overlay);
      });
    });

    // 注入动画关键帧
    const styleSheet = document.createElement('style');
    styleSheet.textContent =
      '@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }' +
      '@keyframes zoomIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }';
    document.head.appendChild(styleSheet);
  })();

  // ========== 3. 滚动触发的渐入动画 ==========
  (function setupScrollAnimation() {
    const animateElements = document.querySelectorAll('.board, .widget, .tag-cloud a');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      animateElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
      });
    }
  })();

  // ========== 4. 复制代码按钮增强反馈 ==========
  (function enhanceCopyButton() {
    document.addEventListener('click', function(e) {
      const copyBtn = e.target.closest('.copy-btn');
      if (!copyBtn) return;

      // 创建浮动提示
      const toast = document.createElement('span');
      toast.textContent = '✅ 已复制';
      toast.style.cssText =
        'position:fixed;top:20px;left:50%;transform:translateX(-50%);' +
        'background:#1a1a2e;color:#e8b84b;padding:8px 20px;border-radius:20px;' +
        'font-size:14px;z-index:9998;box-shadow:0 4px 20px rgba(0,0,0,0.2);' +
        'animation:toastIn 0.3s ease;';
      document.body.appendChild(toast);

      setTimeout(function() {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(-10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(function() { document.body.removeChild(toast); }, 300);
      }, 1500);
    });

    // 注入 toast 动画
    const styleSheet = document.createElement('style');
    if (!document.querySelector('#copy-toast-style')) {
      styleSheet.id = 'copy-toast-style';
      styleSheet.textContent =
        '@keyframes toastIn { from { opacity:0; transform:translateX(-50%) translateY(-20px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }';
      document.head.appendChild(styleSheet);
    }
  })();

  // ========== 5. 平滑滚动 ==========
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ========== 6. 页面加载动效 ==========
  // 页面加载完成后给 body 添加类
  document.body.classList.add('page-loaded');

  // 卡片延迟入场
  const cards = document.querySelectorAll('.board');
  cards.forEach(function(card, index) {
    card.style.animationDelay = (index * 0.08) + 's';
  });

  // ========== 7. 搜索框增强 ==========
  const searchInput = document.querySelector('#local-search-input input');
  if (searchInput) {
    searchInput.addEventListener('focus', function() {
      this.parentElement.style.boxShadow = '0 0 0 3px rgba(74, 144, 217, 0.2)';
    });
    searchInput.addEventListener('blur', function() {
      this.parentElement.style.boxShadow = 'none';
    });
  }

});
