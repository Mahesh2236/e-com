// frontend/js/orders.js

document.addEventListener("DOMContentLoaded", async () => {
    // Redirect if not logged in
    if (!isLoggedIn()) {
        window.location.href = 'login.html?redirect=orders.html';
        return;
    }
    await loadOrders();
});

async function loadOrders() {
    const container = document.getElementById('ordersContainer');
    try {
        const orders = await apiRequest('/orders/user');
        renderOrdersList(orders);
    } catch (error) {
        console.error('Failed to load orders:', error);
        container.innerHTML = `<div class="text-center py-5 text-danger">Failed to load orders. Please try again later.</div>`;
    }
}

function renderOrdersList(orders) {
    const container = document.getElementById('ordersContainer');

    if (!orders || orders.length === 0) {
        container.innerHTML = `
            <div class="glass-card bg-white p-5 text-center rounded-4 shadow-sm fade-in-up">
                <i class="fas fa-box-open fa-4x text-muted mb-3 opacity-25"></i>
                <h3>No orders found</h3>
                <p class="text-muted mb-4">Looks like you haven't placed any orders yet.</p>
                <a href="home.html" class="btn btn-premium rounded-pill px-5 py-2 shadow-sm fw-bold">Start Shopping</a>
            </div>
        `;
        return;
    }

    let ordersHtml = '';
    orders.forEach((order) => {
        let itemsHtml = '';
        order.orderItems.forEach(item => {
            itemsHtml += `
                <div class="d-flex gap-3 mb-3">
                    <img src="${item.productImageUrl || '../assets/images/placeholder.jpg'}" class="rounded-3 border" style="width: 70px; height: 70px; object-fit: cover;">
                    <div>
                        <h6 class="fw-bold mb-1">${item.productTitle || 'Product Unavailable'}</h6>
                        <div class="small text-muted">Qty: ${item.quantity} | Price: ₹${item.price.toLocaleString('en-IN')}</div>
                        <a href="product-details.html?id=${item.productId}" class="btn btn-sm btn-outline-secondary rounded-pill px-3 mt-2">Buy it again</a>
                    </div>
                </div>
            `;
        });

        // Tracking Status Mapping
        const steps = ['PENDING', 'PACKED', 'SHIPPED', 'OUT_FOR_DELIVERY', 'DELIVERED'];
        const currentStatus = order.orderStatus || 'PENDING';
        const currentStepIndex = steps.indexOf(currentStatus);
        
        const getStepClass = (stepName) => {
            const stepIndex = steps.indexOf(stepName);
            if (stepIndex < currentStepIndex) return 'completed';
            if (stepIndex === currentStepIndex) return 'active';
            return '';
        };

        const progressPercent = Math.max(10, (currentStepIndex + 1) * 20);

        ordersHtml += `
            <div class="glass-card bg-white rounded-4 shadow-sm mb-4 overflow-hidden fade-in-up" id="order-${order.orderId}">
                <!-- Order Header -->
                <div class="bg-light p-3 border-bottom d-flex flex-wrap justify-content-between align-items-center gap-3">
                    <div class="d-flex gap-4">
                        <div>
                            <div class="x-small text-muted text-uppercase fw-bold" style="font-size: 0.65rem;">Order Placed</div>
                            <div class="small text-dark fw-medium">${new Date(order.orderDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                        </div>
                        <div>
                            <div class="x-small text-muted text-uppercase fw-bold" style="font-size: 0.65rem;">Total</div>
                            <div class="small text-dark fw-medium">₹${order.totalAmount.toLocaleString('en-IN')}</div>
                        </div>
                        <div>
                            <div class="x-small text-muted text-uppercase fw-bold" style="font-size: 0.65rem;">Ship To</div>
                            <div class="small text-primary fw-medium cursor-pointer" title="${order.shippingAddress}">${order.shippingAddress.split(',')[0]}</div>
                        </div>
                    </div>
                    <div class="text-end">
                        <div class="x-small text-muted text-uppercase fw-bold" style="font-size: 0.65rem;">Order # ${order.orderId}</div>
                        <div class="d-flex gap-2 justify-content-end">
                            <a href="#" class="small text-primary text-decoration-none">Invoice</a>
                        </div>
                    </div>
                </div>

                <div class="p-4">
                    <div class="row g-4">
                        <div class="col-lg-8">
                            <h5 class="fw-bold mb-3 ${currentStatus === 'DELIVERED' ? 'text-success' : ''}">
                                Status: ${currentStatus.replace(/_/g, ' ')}
                            </h5>
                            
                            <!-- Items -->
                            <div class="mb-4">
                                ${itemsHtml}
                            </div>

                            <!-- Tracking Section -->
                            <div id="tracking-${order.orderId}" class="mt-4 pt-4 border-top d-none">
                                <div class="d-flex justify-content-between align-items-center mb-4">
                                    <h6 class="fw-bold mb-0">Live Tracking Status</h6>
                                    <span class="small text-muted">Tracking ID: <span class="fw-bold text-dark">${order.trackingId || 'N/A'}</span></span>
                                </div>

                                <div class="tracking-timeline mb-5">
                                    <div class="tracking-line">
                                        <div class="tracking-progress" style="width: ${progressPercent}%"></div>
                                    </div>
                                    <div class="tracking-steps">
                                        <div class="tracking-step ${getStepClass('PENDING')}">
                                            <div class="step-icon"><i class="fas fa-clipboard-list"></i></div>
                                            <div class="step-label">Ordered</div>
                                        </div>
                                        <div class="tracking-step ${getStepClass('PACKED')}">
                                            <div class="step-icon"><i class="fas fa-box"></i></div>
                                            <div class="step-label">Packed</div>
                                        </div>
                                        <div class="tracking-step ${getStepClass('SHIPPED')}">
                                            <div class="step-icon"><i class="fas fa-shipping-fast"></i></div>
                                            <div class="step-label">Shipped</div>
                                        </div>
                                        <div class="tracking-step ${getStepClass('OUT_FOR_DELIVERY')}">
                                            <div class="step-icon"><i class="fas fa-truck-loading"></i></div>
                                            <div class="step-label">On Way</div>
                                        </div>
                                        <div class="tracking-step ${getStepClass('DELIVERED')}">
                                            <div class="step-icon"><i class="fas fa-check-circle"></i></div>
                                            <div class="step-label">Delivered</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Side Actions -->
                        <div class="col-lg-4 border-start border-light ps-lg-4">
                            <button class="btn btn-premium w-100 rounded-pill py-2 shadow-sm fw-bold mb-2" onclick="toggleTracking('${order.orderId}')">
                                <i class="fas fa-map-marker-alt me-2"></i>Track Package
                            </button>
                            <button class="btn btn-outline-secondary w-100 rounded-pill py-2 mb-2">Return or replace items</button>
                            <button class="btn btn-outline-danger w-100 rounded-pill py-2 ${currentStatus === 'DELIVERED' ? 'd-none' : ''}">Cancel Order</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = ordersHtml;
}

function toggleTracking(orderId) {
    const el = document.getElementById(`tracking-${orderId}`);
    if (el.classList.contains('d-none')) {
        el.classList.remove('d-none');
        el.classList.add('fade-in-up');
    } else {
        el.classList.add('d-none');
    }
}
