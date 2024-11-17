// 创建并插入菜单
function createMenu() {
    const menuHtml = `
        <div class="nav-menu">
            <a href="index.html" ${isCurrentPage('index.html') ? 'class="active"' : ''}>首页</a>
            <a href="calculator.html" ${isCurrentPage('calculator.html') ? 'class="active"' : ''}>计算器</a>
            <a href="algebra.html" ${isCurrentPage('algebra.html') ? 'class="active"' : ''}>代数式</a>
            <a href="pattern.html" ${isCurrentPage('pattern.html') ? 'class="active"' : ''}>找规律</a>
            <a href="poems.html" ${isCurrentPage('poems.html') ? 'class="active"' : ''}>诗词</a>
            <a href="personality.html" ${isCurrentPage('personality.html') ? 'class="active"' : ''}>气质测试</a>
            <a href="iphone.html" ${isCurrentPage('iphone.html') ? 'class="active"' : ''}>iPhone</a>
        </div>
    `;

    // 创建样式
    const style = document.createElement('style');
    style.textContent = `
        .nav-menu {
            position: fixed;
            top: 20px;
            left: 20px;
            background: rgba(255, 255, 255, 0.1);
            padding: 10px 20px;
            border-radius: 5px;
            backdrop-filter: blur(5px);
            display: flex;
            gap: 1rem;
            z-index: 1000;
        }

        .nav-menu a {
            color: #fff;
            text-decoration: none;
            font-size: 1.2rem;
            transition: color 0.3s ease;
            opacity: 0.8;
        }

        .nav-menu a:hover {
            color: #fff;
            opacity: 1;
        }

        .nav-menu a.active {
            opacity: 1;
            font-weight: bold;
        }
    `;

    // 添加样式到头部
    document.head.appendChild(style);

    // 在body开始处插入菜单
    document.body.insertAdjacentHTML('afterbegin', menuHtml);
}

// 判断当前页面
function isCurrentPage(pageName) {
    return window.location.pathname.endsWith(pageName);
}

// 当 DOM 加载完成后创建菜单
document.addEventListener('DOMContentLoaded', createMenu);
