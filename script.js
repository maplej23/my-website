document.addEventListener('DOMContentLoaded', () => {
    // 找到所有带有 page-transition 类名的链接，以及所有的返回按钮
    const links = document.querySelectorAll('.page-transition, .card, .back-link');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // 如果链接是空的（比如 #），就不执行跳转动画
            if (this.getAttribute('href') === '#' || this.target === '_blank') return;
            
            // 阻止浏览器默认的瞬间跳转
            e.preventDefault(); 
            const targetUrl = this.href;
            
            // 给整个网页加上淡出的 CSS 类
            document.body.classList.add('fade-out');
            
            // 等待 500 毫秒（淡出动画播完）后，再真正跳转到下一页
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        });
    });
});
