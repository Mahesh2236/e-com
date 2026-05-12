// frontend/js/utils.js

/**
 * Loads HTML components (navbar/footer) into placeholders
 */
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (response.ok) {
            const html = await response.text();
            document.getElementById(elementId).innerHTML = html;
            
            // Fix routing for navbar links based on current folder
            if (elementId === 'navbar-placeholder') {
                const isSubPage = window.location.pathname.includes('/pages/');
                const links = document.querySelectorAll('#navbar-placeholder a');
                links.forEach(link => {
                    let href = link.getAttribute('href');
                    if (href && href !== '#' && !href.startsWith('http')) {
                        if (isSubPage) {
                            // If we are in /pages/, remove 'pages/' prefix from internal links
                            link.setAttribute('href', href.replace('pages/', ''));
                            // If it's index.html, go up one level
                            if (href === 'index.html') link.setAttribute('href', '../index.html');
                        }
                    }
                });

                if (typeof updateNavbarAuth === 'function') {
                    updateNavbarAuth();
                }
            }
        }
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

/**
 * Show a floating toast notification
 */
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type} fade-in-up`;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        padding: 1rem 2rem;
        border-radius: 12px;
        background: ${type === 'success' ? '#4caf50' : '#f44336'};
        color: white;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    toast.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.5s ease';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    // Load common components
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    // Detect if we are in the pages directory
    const isSubPage = window.location.pathname.includes('/pages/');
    const pathPrefix = isSubPage ? '../' : '';

    if (navbarPlaceholder) {
        loadComponent('navbar-placeholder', `${pathPrefix}components/navbar.html`);
    }
    
    if (footerPlaceholder) {
        // Fallback to navbar if footer doesn't exist yet, or use footer.html
        loadComponent('footer-placeholder', `${pathPrefix}components/navbar.html`);
    }
});
