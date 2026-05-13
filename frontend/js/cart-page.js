// frontend/js/cart-page.js

document.addEventListener("DOMContentLoaded", () => {
    renderCart();
});

function renderCart() {
    const cart = getCartItems();
    const container = document.getElementById('cartItemsContainer');
    const cartSubContainer = document.getElementById('cartSubtotalContainer');
    
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-5 text-muted fade-in-up">
                <i class="fas fa-shopping-cart fa-3x mb-3" style="opacity: 0.2"></i>
                <h4>Your QuickMart Cart is empty.</h4>
                <p class="mb-4">Check your Saved for later items below or continue shopping.</p>
                <a href="products.html" class="btn btn-premium mt-3 rounded-pill px-4 shadow-sm hover-scale">Continue Shopping</a>
            </div>
        `;
        if (cartSubContainer) cartSubContainer.classList.add('d-none');
        
        const buyBoxSubText = document.getElementById('buyBoxSubtotalText');
        const buyBoxSubMain = document.getElementById('buyBoxSubtotalMain');
        const proceedBtn = document.getElementById('proceedCheckoutBtn');

        if (buyBoxSubText) buyBoxSubText.textContent = 'Subtotal (0 items):';
        if (buyBoxSubMain) buyBoxSubMain.textContent = '₹0';
        if (proceedBtn) proceedBtn.classList.add('disabled');
        return;
    }

    if (cartSubContainer) cartSubContainer.classList.remove('d-none');
    const proceedBtn = document.getElementById('proceedCheckoutBtn');
    if (proceedBtn) proceedBtn.classList.remove('disabled');

    let totalItems = 0;
    let totalPrice = 0;
    let html = '';

    cart.forEach(item => {
        const qty = parseInt(item.quantity) || 1;
        totalItems += qty;
        totalPrice += (item.price * qty);

        html += `
            <div class="row g-3 pb-4 mb-4 border-bottom border-light position-relative fade-in-up">
                <div class="col-md-2 col-4">
                    <a href="product-details.html?id=${item.id}">
                        <div class="bg-light rounded p-0 d-flex align-items-center justify-content-center border overflow-hidden hover-scale" style="height: 120px;">
                            <img src="${item.image}" class="w-100 h-100" style="object-fit: cover;" onerror="this.src='../assets/images/placeholder.jpg'; this.onerror=null;">
                        </div>
                    </a>
                </div>
                <div class="col-md-8 col-8">
                    <h5 class="fw-bold text-dark mb-1" style="display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">
                        <a href="product-details.html?id=${item.id}" class="text-dark text-decoration-none hover-scale d-inline-block">${item.title}</a>
                    </h5>
                    <div class="small text-success fw-bold mb-1">In Stock</div>
                    <div class="small text-muted mb-2">Eligible for FREE Shipping & <span class="fw-bold text-dark">FREE Returns</span></div>
                    
                    <div class="d-flex align-items-center gap-3 mt-3">
                        <div class="input-group input-group-sm rounded-pill shadow-sm overflow-hidden" style="width: 110px; border: 1px solid #D5D9D9;">
                            <button class="btn btn-light border-0" type="button" onclick="updateQty('${item.id}', -1)"><i class="fas fa-minus small"></i></button>
                            <input type="text" class="form-control text-center border-0 bg-light fw-bold" value="${qty}" readonly>
                            <button class="btn btn-light border-0" type="button" onclick="updateQty('${item.id}', 1)"><i class="fas fa-plus small"></i></button>
                        </div>
                        <div class="vr bg-light"></div>
                        <a href="#" class="text-primary small text-decoration-none hover-scale" onclick="removeItem('${item.id}', event)">Delete</a>
                        <div class="vr bg-light"></div>
                        <a href="#" class="text-primary small text-decoration-none hover-scale" onclick="saveForLater('${item.id}', event)">Save</a>
                    </div>
                </div>
                <div class="col-md-2 col-12 text-md-end mt-3 mt-md-0">
                    <span class="fw-bold fs-5 text-dark">₹${(item.price * qty).toLocaleString('en-IN')}</span>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    const subText = `Subtotal (${totalItems} item${totalItems !== 1 ? 's' : ''}):`;
    const priceText = `₹${totalPrice.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;

    const cartSubText = document.getElementById('cartSubtotalText');
    const cartSubMain = document.getElementById('cartSubtotalMain');
    const buyBoxSubText = document.getElementById('buyBoxSubtotalText');
    const buyBoxSubMain = document.getElementById('buyBoxSubtotalMain');

    if (cartSubText) cartSubText.textContent = subText + ' ';
    if (cartSubMain) cartSubMain.textContent = priceText;
    if (buyBoxSubText) buyBoxSubText.textContent = subText;
    if (buyBoxSubMain) buyBoxSubMain.textContent = priceText;
}

function updateQty(id, change) {
    let cart = getCartItems();
    // Convert IDs to string for safe comparison
    const item = cart.find(i => String(i.id) === String(id));
    if (item) {
        item.quantity = (parseInt(item.quantity) || 0) + change;
        if (item.quantity <= 0) {
            removeItem(id, { preventDefault: () => {} });
        } else {
            saveCart(cart);
            renderCart();
        }
    }
}

function removeItem(id, e) {
    if (e && e.preventDefault) e.preventDefault();
    let cart = getCartItems();
    const item = cart.find(i => String(i.id) === String(id));
    if (item) {
        cart = cart.filter(i => String(i.id) !== String(id));
        saveCart(cart);
        renderCart();
        showToast(`${item.title} removed from cart`, 'success');
    }
}

function saveForLater(id, e) {
    if (e && e.preventDefault) e.preventDefault();
    // For now, we'll just treat it like remove but with a different message
    // In a real app, this would move to a 'saved' list in DB/LocalStorage
    let cart = getCartItems();
    const item = cart.find(i => String(i.id) === String(id));
    if (item) {
        cart = cart.filter(i => String(i.id) !== String(id));
        saveCart(cart);
        renderCart();
        showToast(`${item.title} saved for later`, 'success');
    }
}
