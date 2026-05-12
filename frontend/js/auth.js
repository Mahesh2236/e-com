// frontend/js/auth.js

/**
 * Handle User Registration
 */
async function registerUser(fullName, email, phone, password, otp) {
    try {
        const data = await apiRequest('/auth/register', 'POST', {
            fullName,
            email,
            phone,
            password,
            otp
        });
        return data;
    } catch (error) {
        throw error;
    }
}

/**
 * Handle User Login
 */
async function loginUser(email, password, otp) {
    try {
        const data = await apiRequest('/auth/login', 'POST', {
            email,
            password,
            otp
        });
        
        localStorage.setItem('quickmart_token', data.token);
        localStorage.setItem('quickmart_user', JSON.stringify({
            id: data.userId,
            fullName: data.fullName,
            email: data.email,
            role: data.role
        }));
        
        return data;
    } catch (error) {
        throw error;
    }
}

/**
 * Handle Logout
 */
function logoutUser() {
    localStorage.removeItem('quickmart_token');
    localStorage.removeItem('quickmart_user');
    const isSubPage = window.location.pathname.includes('/pages/');
    window.location.href = isSubPage ? '../index.html' : 'index.html';
}

function isLoggedIn() {
    return localStorage.getItem('quickmart_token') !== null;
}

function getCurrentUser() {
    const user = localStorage.getItem('quickmart_user');
    return user ? JSON.parse(user) : null;
}

/**
 * Update the navbar UI based on authentication state
 */
function updateNavbarAuth() {
    const authContainers = [
        document.getElementById('navAuthContainer'),
        document.getElementById('mobileAuthContainer')
    ];

    const isSubPage = window.location.pathname.includes('/pages/');
    const profileLink = isSubPage ? 'profile.html' : 'pages/profile.html';
    const ordersLink = isSubPage ? 'orders.html' : 'pages/orders.html';
    const loginPath = isSubPage ? 'login.html' : 'pages/login.html';

    authContainers.forEach(container => {
        if (!container) return;

        if (isLoggedIn()) {
            const user = getCurrentUser();
            container.innerHTML = `
                <div class="dropdown">
                    <a class="nav-link dropdown-toggle d-flex align-items-center gap-2" href="#" data-bs-toggle="dropdown">
                        <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center fw-bold" style="width: 32px; height: 32px; color: white;">
                            ${user.fullName.charAt(0).toUpperCase()}
                        </div>
                        <div class="d-none d-lg-block">
                            <span class="small text-muted d-block" style="line-height: 1;">Hello,</span>
                            <span class="fw-bold text-dark">${user.fullName.split(' ')[0]}</span>
                        </div>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end glass-card border-0 shadow-lg p-2 mt-2">
                        <li><a class="dropdown-item rounded-3 py-2" href="${profileLink}"><i class="fas fa-user-circle me-2"></i>Account Info</a></li>
                        <li><a class="dropdown-item rounded-3 py-2" href="${ordersLink}"><i class="fas fa-box me-2"></i>My Orders</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item rounded-3 py-2 text-danger" href="#" onclick="logoutUser()"><i class="fas fa-sign-out-alt me-2"></i>Sign Out</a></li>
                    </ul>
                </div>
            `;
        } else {
            container.innerHTML = `
                <a href="${loginPath}" class="nav-link d-flex align-items-center gap-2">
                    <div class="bg-light rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">
                        <i class="fas fa-user text-muted"></i>
                    </div>
                    <div class="d-none d-lg-block">
                        <span class="small text-muted d-block" style="line-height: 1;">Hello, Sign in</span>
                        <span class="fw-bold text-dark">Account & Lists</span>
                    </div>
                </a>
            `;
        }
    });
}
