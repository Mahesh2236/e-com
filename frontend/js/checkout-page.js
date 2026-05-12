// frontend/js/checkout-page.js

let selectedAddress = null;
let selectedPayment = null;
let checkoutItems = [];

document.addEventListener("DOMContentLoaded", () => {
    // Redirect if not logged in
    if (!isLoggedIn()) {
        window.location.href = 'login.html?redirect=checkout.html';
        return;
    }
    initCheckout();
    setupEventListeners();
});

function initCheckout() {
    // 1. Get items to checkout (Buy Now vs Cart)
    const urlParams = new URLSearchParams(window.location.search);
    const isBuyNow = urlParams.get('mode') === 'buynow';
    
    if (isBuyNow) {
        const buyNowStr = localStorage.getItem('buyNowProduct');
        if (buyNowStr) {
            checkoutItems = [JSON.parse(buyNowStr)];
        }
    } else {
        checkoutItems = getCartItems();
    }
    
    if (checkoutItems.length === 0) {
        showToast("No product selected", "danger");
        setTimeout(() => window.location.href = "products.html", 1500);
        return;
    }

    // Fix image paths for checkout items
    checkoutItems = checkoutItems.map(item => ({
        ...item,
        image: fixImagePath(item.image || item.imageUrl, item.categoryName)
    }));

    // 2. Render initial state
    renderAddressList();
    updateOrderSummary();
    renderReviewItems();
}

function fixImagePath(path, category) {
    if (!path) return '../assets/images/products/placeholder.jpg';
    if (path.startsWith('http') || path.startsWith('assets') || path.startsWith('..')) return path;
    
    let subfolder = '';
    if (category) {
        const cat = category.toLowerCase();
        if (cat.includes('beauty')) subfolder = 'beauty/';
        else if (cat.includes('electronics')) subfolder = 'electronics/';
        else if (cat.includes('fashion')) subfolder = 'fashion/';
        else if (cat.includes('gaming')) subfolder = 'gaming/';
        else if (cat.includes('home-decor') || cat.includes('decor')) subfolder = 'home-decor/';
        else if (cat.includes('home')) subfolder = 'home/';
        else if (cat.includes('sneakers')) subfolder = 'sneakers/';
        else if (cat.includes('gadgets')) subfolder = 'gadgets/';
        else if (cat.includes('accessories')) subfolder = 'accessories/';
    }
    
    return `../assets/images/products/${subfolder}${path}`;
}

function setupEventListeners() {
    // Address Selection
    const useAddressBtn = document.getElementById('useAddressBtn');
    if (useAddressBtn) useAddressBtn.addEventListener('click', proceedToPayment);

    // New Address Form
    const addressForm = document.getElementById('addressForm');
    if (addressForm) {
        addressForm.addEventListener('submit', (e) => {
            e.preventDefault();
            saveNewAddress();
        });
    }

    // Payment Selection
    const paymentOptions = document.querySelectorAll('.payment-option');
    paymentOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            selectPaymentMethod(opt);
        });
    });

    // Use Payment Button
    const usePaymentBtn = document.getElementById('usePaymentBtn');
    if (usePaymentBtn) usePaymentBtn.addEventListener('click', proceedToReview);

    // Edit Step Buttons
    const edit1 = document.getElementById('editStep1');
    if (edit1) edit1.addEventListener('click', () => {
        toggleStep(1, true);
        toggleStep(2, false);
        toggleStep(3, false);
    });
    
    const edit2 = document.getElementById('editStep2');
    if (edit2) edit2.addEventListener('click', () => {
        toggleStep(2, true);
        toggleStep(3, false);
    });

    // Place Order Button
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    if (placeOrderBtn) placeOrderBtn.addEventListener('click', handlePlaceOrder);

    // Verify Buttons
    const vUpi = document.getElementById('verifyUpiBtn');
    if (vUpi) vUpi.addEventListener('click', simulatePaymentSuccess);
    const vCard = document.getElementById('verifyCardBtn');
    if (vCard) vCard.addEventListener('click', simulatePaymentSuccess);
}

// ADDRESS LOGIC
function renderAddressList() {
    const list = document.getElementById('addressList');
    if (!list) return;

    const addresses = JSON.parse(localStorage.getItem('quickmart_addresses')) || [
        { id: 1, name: "John Doe", phone: "9876543210", pincode: "110001", city: "New Delhi", state: "Delhi", line: "123 Premium Shopping Ave, Suite 400" }
    ];
    
    list.innerHTML = '';
    addresses.forEach(addr => {
        const isSelected = selectedAddress && selectedAddress.id === addr.id;
        const col = document.createElement('div');
        col.className = 'col-md-6 mb-3';
        col.innerHTML = `
            <div class="address-card glass-card p-3 rounded-4 shadow-sm border cursor-pointer ${isSelected ? 'selected border-primary' : ''}">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="address" ${isSelected ? 'checked' : ''}>
                    <label class="form-check-label fw-bold d-block">
                        ${addr.name}
                        <span class="fw-normal d-block small mt-1">${addr.line}</span>
                        <span class="fw-normal d-block small">${addr.city}, ${addr.state} - ${addr.pincode}</span>
                        <span class="fw-normal d-block small">Phone: ${addr.phone}</span>
                    </label>
                </div>
            </div>
        `;
        
        col.querySelector('.address-card').addEventListener('click', () => selectAddress(addr));
        list.appendChild(col);
    });
}

function selectAddress(addr) {
    selectedAddress = addr;
    renderAddressList();
    document.getElementById('useAddressBtn').disabled = false;
}

function saveNewAddress() {
    const addresses = JSON.parse(localStorage.getItem('quickmart_addresses')) || [];
    const newAddr = {
        id: Date.now(),
        name: document.getElementById('addrName').value,
        phone: document.getElementById('addrPhone').value,
        pincode: document.getElementById('addrPincode').value,
        city: document.getElementById('addrCity').value,
        state: document.getElementById('addrState').value,
        line: document.getElementById('addrLine').value
    };
    addresses.push(newAddr);
    localStorage.setItem('quickmart_addresses', JSON.stringify(addresses));
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('addressModal'));
    modal.hide();
    selectAddress(newAddr);
    showToast("Address added successfully!", "success");
}

function proceedToPayment() {
    if (!selectedAddress) return;
    toggleStep(1, false, true);
    toggleStep(2, true);
    document.getElementById('selectedAddressText').innerHTML = `<b>${selectedAddress.name}</b> - ${selectedAddress.line}, ${selectedAddress.city}`;
    document.getElementById('editStep1').classList.remove('d-none');
}

// PAYMENT LOGIC
function selectPaymentMethod(element) {
    const method = element.dataset.method;
    selectedPayment = method;
    document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('active'));
    element.classList.add('active');
    element.querySelector('input[type="radio"]').checked = true;
    
    document.getElementById('paymentSuccessAnim').classList.add('d-none');
    document.getElementById('usePaymentBtn').disabled = true;

    document.getElementById('cardDetails').classList.add('d-none');
    document.getElementById('upiDetails').classList.add('d-none');
    document.getElementById('codNotice').classList.add('d-none');

    if (method === 'card') document.getElementById('cardDetails').classList.remove('d-none');
    if (method === 'upi') document.getElementById('upiDetails').classList.remove('d-none');
    if (method === 'cod') {
        document.getElementById('codNotice').classList.remove('d-none');
        document.getElementById('usePaymentBtn').disabled = false;
    }
}

function simulatePaymentSuccess(e) {
    const btn = e.target;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = 'Verified ✔';
        btn.classList.replace('btn-primary', 'btn-success');
        document.getElementById('paymentSuccessAnim').classList.remove('d-none');
        document.getElementById('usePaymentBtn').disabled = false;
        showToast("Payment method verified!", "success");
    }, 1500);
}

function proceedToReview() {
    if (!selectedPayment) return;
    toggleStep(2, false, true);
    toggleStep(3, true);
    const paymentLabels = { upi: "UPI Payment", card: "Credit/Debit Card", cod: "Cash on Delivery" };
    document.getElementById('selectedPaymentText').textContent = paymentLabels[selectedPayment];
    document.getElementById('editStep2').classList.remove('d-none');
    
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    placeOrderBtn.classList.remove('disabled');
    placeOrderBtn.disabled = false;
}

function toggleStep(num, active, completed = false) {
    const step = document.getElementById(`step${num}`);
    const content = document.getElementById(`step${num}Content`);
    const summary = document.getElementById(`step${num}Summary`);
    const numCircle = document.getElementById(`step${num}Num`);
    if (!step) return;

    if (active) {
        step.classList.add('active');
        step.classList.remove('opacity-50', 'completed');
        if (content) content.classList.remove('d-none');
        if (summary) summary.classList.add('d-none');
        if (numCircle) numCircle.innerHTML = num;
    } else {
        step.classList.remove('active');
        if (content) content.classList.add('d-none');
        if (summary) summary.classList.remove('d-none');
        if (completed) {
            step.classList.add('completed');
            if (numCircle) numCircle.innerHTML = '<i class="fas fa-check"></i>';
        } else {
            step.classList.add('opacity-50');
        }
    }
}

function renderReviewItems() {
    const list = document.getElementById('reviewItemsList');
    if (!list) return;
    list.innerHTML = '';
    checkoutItems.forEach(item => {
        list.innerHTML += `
            <div class="d-flex gap-3 mb-3 pb-3 border-bottom border-light">
                <img src="${item.image}" class="rounded-3" style="width: 80px; height: 80px; object-fit: cover;">
                <div class="flex-grow-1">
                    <h6 class="fw-bold mb-1">${item.title}</h6>
                    <div class="d-flex justify-content-between">
                        <span class="small fw-bold">Qty: ${item.quantity}</span>
                        <span class="fw-bold text-danger">₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
                    </div>
                </div>
            </div>
        `;
    });
}

function updateOrderSummary() {
    let totalItems = 0;
    let subtotal = 0;
    let summaryHtml = '';

    checkoutItems.forEach(item => {
        totalItems += item.quantity;
        subtotal += (item.price * item.quantity);
        summaryHtml += `
            <div class="d-flex align-items-center justify-content-between mb-3">
                <div class="small text-muted text-truncate" style="max-width: 150px;">${item.title}</div>
                <div class="small fw-bold">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
            </div>
        `;
    });

    const tax = subtotal * 0.18;
    const finalTotal = subtotal + tax;

    document.getElementById('checkoutHeaderCount').textContent = `${totalItems} items`;
    document.getElementById('checkoutOrderItems').innerHTML = summaryHtml;
    document.getElementById('checkoutItemsCountLabel').textContent = `Items (${totalItems}):`;
    document.getElementById('checkoutSubtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    document.getElementById('checkoutBeforeTax').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    document.getElementById('checkoutTax').textContent = `₹${Math.floor(tax).toLocaleString('en-IN')}`;
    document.getElementById('checkoutTotal').textContent = `₹${Math.floor(finalTotal).toLocaleString('en-IN')}`;
}

async function handlePlaceOrder() {
    if (!selectedAddress || !selectedPayment) {
        showToast("Please complete all steps", "danger");
        return;
    }

    const btn = document.getElementById('placeOrderBtn');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Placing Order...';
    btn.disabled = true;

    try {
        const subtotal = checkoutItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        const tax = subtotal * 0.18;

        const orderData = {
            items: checkoutItems.map(item => ({
                productId: item.id,
                quantity: item.quantity,
                price: item.price
            })),
            paymentMethod: selectedPayment.toUpperCase(),
            shippingAddress: `${selectedAddress.name}, ${selectedAddress.line}, ${selectedAddress.city}, ${selectedAddress.state} - ${selectedAddress.pincode}, Phone: ${selectedAddress.phone}`,
            totalAmount: subtotal + tax,
            gstAmount: tax,
            deliveryFee: 0.0,
            discountAmount: 0.0
        };

        const response = await apiRequest('/orders', 'POST', orderData);
        
        // Success Logic
        createConfetti();
        document.getElementById('successOrderId').textContent = response.orderId;
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();

        // Clear Cart
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('mode') === 'buynow') localStorage.removeItem('buyNowProduct');
        else localStorage.setItem('quickmart_cart', '[]');

    } catch (error) {
        showToast(error.message, 'danger');
        btn.innerHTML = 'Place your order';
        btn.disabled = false;
    }
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s linear forwards`;
        confetti.style.backgroundColor = ['#f2d74e', '#95c3de', '#ff9a91', '#b2e2f2'][Math.floor(Math.random() * 4)];
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}
