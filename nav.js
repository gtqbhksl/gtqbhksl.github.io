document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    let isMouseInNav = false;

    // 处理滚动事件
    window.addEventListener('scroll', () => {
        if (window.scrollY < 100) {
            nav.classList.add('visible');
        } else if (!isMouseInNav) {
            nav.classList.remove('visible');
        }
    });

    // 处理鼠标进入顶部区域
    document.addEventListener('mousemove', (e) => {
        if (e.clientY < 100) {
            nav.classList.add('visible');
        } else if (!isMouseInNav && window.scrollY >= 100) {
            nav.classList.remove('visible');
        }
    });

    // 处理导航栏自身鼠标事件
    nav.addEventListener('mouseenter', () => {
        isMouseInNav = true;
        nav.classList.add('visible');
    });

    nav.addEventListener('mouseleave', () => {
        isMouseInNav = false;
        if (window.scrollY >= 100) {
            nav.classList.remove('visible');
        }
    });
});