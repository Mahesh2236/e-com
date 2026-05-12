// frontend/js/cart.js

document.addEventListener("DOMContentLoaded", () => {
    // Inject Toast Container
    if (!document.getElementById('toastContainer')) {
        const toastContainer = document.createElement('div');
        toastContainer.id = 'toastContainer';
        toastContainer.className = 'position-fixed bottom-0 end-0 p-3';
        toastContainer.style.zIndex = '1055';
        document.body.appendChild(toastContainer);
    }
    updateCartCount();
});

function getCartItems() {
    const cart = localStorage.getItem('quickmart_cart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('quickmart_cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = getCartItems();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    
    // Find all cart badges
    const badges = document.querySelectorAll('.fa-shopping-cart + .badge, .cart-badge, #cartCountBadge');
    badges.forEach(badge => {
        badge.textContent = count;
        badge.classList.remove('bounce');
        void badge.offsetWidth; 
        badge.classList.add('bounce');
    });
}

/**
 * Universal add to cart function
 */
async function addToCart(productId, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
        
        const btn = event.currentTarget;
        if (btn) {
            const originalHtml = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> Added';
                setTimeout(() => {
                    btn.innerHTML = originalHtml;
                    btn.disabled = false;
                }, 1500);
            }, 400);
        }
    }

    try {
        // Fetch product from API to ensure we have fresh data
        const product = await apiRequest(`/products/${productId}`);
        
        if (!product) {
            showToast('Error: Product not found', 'danger');
            return;
        }

        const cart = getCartItems();
        // Handle ID mismatch by converting both to String
        const existingItem = cart.find(item => String(item.id) === String(productId));

        if (existingItem) {
            existingItem.quantity += 1;
            showToast(`Increased quantity of ${product.title}`, 'success');
        } else {
            // Get category name for image path
            const catName = product.category ? product.category.categoryName : 'Uncategorized';
            
            cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.imageUrl,
                quantity: 1,
                categoryName: catName,
                brand: product.brand
            });
            showToast(`${product.title} added to cart!`, 'success');
        }

        saveCart(cart);
    } catch (error) {
        console.error('Add to cart failed:', error);
        showToast('Failed to add product to cart.', 'danger');
    }
}

/**
 * Buy Now flow
 */
async function buyNow(productId) {
    const btn = document.getElementById('mainBuyNowBtn');
    let originalHtml = '';
    if (btn) {
        originalHtml = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        btn.disabled = true;
    }

    try {
        const product = await apiRequest(`/products/${productId}`);

        if (!product) {
            showToast('Error: Product not found', 'danger');
            if (btn) { btn.innerHTML = originalHtml; btn.disabled = false; }
            return;
        }

        const buyNowItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.imageUrl,
            quantity: 1,
            categoryName: product.category ? product.category.categoryName : 'Uncategorized',
            brand: product.brand
        };
        
        localStorage.setItem('buyNowProduct', JSON.stringify(buyNowItem));
        window.location.href = 'checkout.html?mode=buynow';
    } catch (error) {
        console.error('Buy now failed:', error);
        showToast('Checkout failed. Please try again.', 'danger');
        if (btn) { btn.innerHTML = originalHtml; btn.disabled = false; }
    }
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toastId = 'toast_' + Date.now();
    const icon = type === 'success' ? 'fa-check-circle text-success' : 'fa-exclamation-circle text-danger';
    
    const toastHtml = `
        <div id="${toastId}" class="toast align-items-center border-0 shadow-lg rounded-4 glass-card mb-3 fade-in-up" role="alert" aria-live="assertive" aria-atomic="true" style="background: rgba(255,255,255,0.9);">
            <div class="d-flex p-2">
                <div class="toast-body fw-bold d-flex align-items-center gap-2">
                    <i class="fas ${icon} fs-5"></i>
                    <span class="small text-dark">${message}</span>
                </div>
                <button type="button" class="btn-close ms-auto me-2" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `;
    
    container.insertAdjacentHTML('beforeend', toastHtml);
    
    const toastElement = document.getElementById(toastId);
    if (typeof bootstrap !== 'undefined') {
        const toast = new bootstrap.Toast(toastElement, { delay: 3000 });
        toast.show();
        toastElement.addEventListener('hidden.bs.toast', () => toastElement.remove());
    } else {
        setTimeout(() => toastElement.remove(), 3500);
    }
}
