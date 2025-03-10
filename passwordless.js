document.addEventListener('DOMContentLoaded', function() {
    // 获取URL参数
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get('key');

    // 检查是否有正确的访问密钥
    const hasAccess = (key === 'yourSecretKey');

    // 检查localStorage中是否有存储的访问权限
    const storedAccess = localStorage.getItem('resumeAccess') === 'granted';

    if (hasAccess) {
        // 如果URL中有正确密钥，则保存到localStorage
        localStorage.setItem('resumeAccess', 'granted');
        loadSensitiveContent();
    } else if (storedAccess) {
        // 如果localStorage中有权限，直接加载
        loadSensitiveContent();
    } else {
        // 没有权限，显示公开版本
        showPublicVersion();
    }

    // 设置退出按钮
    if (hasAccess || storedAccess) {
        const logoutBtn = document.getElementById('logout-button');
        if (logoutBtn) {
            logoutBtn.style.display = 'block';
        }
    }
});

function loadSensitiveContent() {
    // 加载敏感内容 - 通过AJAX请求获取
    fetch('sensitive_data.json')
        .then(response => response.json())
        .then(data => {
            // 填充电话号码
            if (data.phone) {
                document.querySelectorAll('[data-sensitive="phone"]').forEach(el => {
                    el.textContent = data.phone;
                });
            }

            // 填充邮箱
            if (data.email) {
                document.querySelectorAll('[data-sensitive="email"]').forEach(el => {
                    el.textContent = data.email;
                });
            }

            // 显示敏感区域
            document.querySelectorAll('.sensitive-section').forEach(el => {
                el.style.display = 'block';
            });

            // 隐藏公开提示
            document.querySelectorAll('.public-notice').forEach(el => {
                el.style.display = 'none';
            });
        })
        .catch(error => {
            console.error('无法加载敏感数据:', error);
        });
}

function showPublicVersion() {
    // 显示公开内容的提示
    document.querySelectorAll('.public-notice').forEach(el => {
        el.style.display = 'block';
    });

    // 隐藏敏感区域
    document.querySelectorAll('.sensitive-section').forEach(el => {
        el.style.display = 'none';
    });
}

// 登出功能
window.logOut = function() {
    localStorage.removeItem('resumeAccess');
    location.reload();
};