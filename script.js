document.addEventListener('DOMContentLoaded', () => {
    // 监听所有的跳转链接（包含了我们新加的 bottom-back-link）
    const links = document.querySelectorAll('.page-transition, .card, .back-link, .bottom-back-link');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#' || this.target === '_blank') return;
            
            e.preventDefault(); 
            const targetUrl = this.href;
            
            // 给网页加上变黑淡出的动画
            document.body.classList.add('fade-out');
            
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        });
    });
});

// ====== 新增：修复浏览器后退键黑屏问题 (BFCache 唤醒) ======
window.addEventListener('pageshow', (event) => {
    // event.persisted 表示页面是从浏览器的缓存中恢复的（比如按了后退键）
    if (event.persisted) {
        // 强行移除 fade-out 类，让页面重新亮起来！
        document.body.classList.remove('fade-out');
    }
});
