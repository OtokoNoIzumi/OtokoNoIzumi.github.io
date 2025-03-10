document.addEventListener('DOMContentLoaded', function() {
    // Check if user already has access
    const hasAccess = localStorage.getItem('resumeAccess');
    if (hasAccess === 'granted') {
        showContent();
        return;
    }

    // Hide sensitive content initially
    hideContent();

    // Setup password form
    const passwordForm = document.getElementById('password-form');
    passwordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementById('password-input').value;

        // Simple password check - you should change this password!
        if (password === 'yourSecurePassword') {
            // Grant access
            localStorage.setItem('resumeAccess', 'granted');
            showContent();

            // Hide password screen
            document.getElementById('password-screen').style.display = 'none';
        } else {
            alert('密码错误，请重试！');
        }
    });

    // Log out function
    window.logOut = function() {
        localStorage.removeItem('resumeAccess');
        hideContent();
        document.getElementById('password-screen').style.display = 'flex';
    };
});

function hideContent() {
    // Hide sensitive elements
    document.querySelectorAll('.sensitive').forEach(function(el) {
        el.style.display = 'none';
    });

    // Replace content with placeholders
    document.querySelectorAll('[data-placeholder]').forEach(function(el) {
        el.textContent = el.getAttribute('data-placeholder');
    });
}

function showContent() {
    // Show all sensitive elements
    document.querySelectorAll('.sensitive').forEach(function(el) {
        el.style.display = '';
    });

    // Restore original content
    document.querySelectorAll('[data-original]').forEach(function(el) {
        el.textContent = el.getAttribute('data-original');
    });
}