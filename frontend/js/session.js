// frontend/js/session.js

document.addEventListener('DOMContentLoaded', () => {
    updateNavbarState();
    protectProtectedPages();
});

/**
 * Update the navbar to show either Login/Register or Account/Logout
 */
function updateNavbarState() {
    const user = getCurrentUser();
    const navRight = document.querySelector('.navbar-nav.ms-auto') || document.querySelector('.nav-right');
    if (!navRight) return;

    if (user) {
        // User is logged in - Replace Login/Register with Account dropdown
        const authLinks = navRight.querySelectorAll('.nav-link[href="login.html"], .nav-link[href="register.html"]');
        authLinks.forEach(link => link.parentElement.remove());

        const accountHtml = `
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle fw-bold text-dark d-flex align-items-center gap-2" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown">
                    <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style="width: 32px; height: 32px; font-size: 0.8rem;">
                        ${user.fullName.charAt(0)}
                    </div>
                    <span>Hello, ${user.fullName.split(' ')[0]}</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end shadow-lg border-0 rounded-4 p-2 mt-2">
                    <li><a class="dropdown-item rounded-3 mb-1" href="profile.html"><i class="fas fa-user-circle me-2"></i>My Profile</a></li>
                    <li><a class="dropdown-item rounded-3 mb-1" href="orders.html"><i class="fas fa-box me-2"></i>My Orders</a></li>
                    ${user.role === 'ADMIN' ? '<li><a class="dropdown-item rounded-3 mb-1 text-primary fw-bold" href="admin/dashboard.html"><i class="fas fa-user-shield me-2"></i>Admin Panel</a></li>' : ''}
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item rounded-3 text-danger" href="#" onclick="logoutUser()"><i class="fas fa-sign-out-alt me-2"></i>Logout</a></li>
                </ul>
            </li>
        `;
        navRight.insertAdjacentHTML('beforeend', accountHtml);
    }
}

/**
 * Redirect to login if trying to access protected pages without token
 */
function protectProtectedPages() {
    const protectedPages = ['profile.html', 'orders.html', 'checkout.html'];
    const currentPage = window.location.pathname.split('/').pop();

    if (protectedPages.includes(currentPage) && !isLoggedIn()) {
        window.location.href = 'login.html?redirect=' + currentPage;
    }
}
