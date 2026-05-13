// frontend/js/product-details.js

document.addEventListener("DOMContentLoaded", async () => {
    console.log(">>> QUICKMART PRODUCT DETAILS FAIL-SAFE ACTIVE <<<");

    const params = new URLSearchParams(window.location.search);
    let productId = params.get("id");

    // FAIL-SAFE: If URL parameter is missing, try to recover from localStorage
    if (!productId || productId === "null") {
        console.warn("Product ID missing from URL. Attempting recovery from localStorage...");
        productId = localStorage.getItem('lastSelectedProductId');
    }

    console.log("Final Product ID used:", productId);

    if (!productId || productId === "null") {
        showError("Invalid product ID");
        return;
    }

    try {
        const product = await apiRequest(`/products/${productId}`);
        if (!product) {
            showError("Product detail not found");
            return;
        }
        renderProductDetails(product);
        setupButtonListeners(product); // CONNECT THE BUTTONS
        fetchRelatedProducts(product.category ? product.category.categoryName : null);
    } catch (error) {
        console.error("Failed to render product details:", error);
        showError("Product detail not found");
    }
});

function setupButtonListeners(product) {
    const atcBtn = document.getElementById('mainAddToCartBtn');
    const buyBtn = document.getElementById('mainBuyNowBtn');
    const qtySelect = document.querySelector('select.form-select');

    if (atcBtn) {
        atcBtn.onclick = (e) => {
            const qty = parseInt(qtySelect ? qtySelect.value : 1);
            console.log(`Adding to cart: ${product.id} (Qty: ${qty})`);
            // Call the global addToCart function
            for(let i=0; i<qty; i++) {
                addToCart(product.id, e);
            }
        };
    }

    if (buyBtn) {
        buyBtn.onclick = (e) => {
            const qty = parseInt(qtySelect ? qtySelect.value : 1);
            console.log(`Buy Now: ${product.id} (Qty: ${qty})`);
            // Add to cart and redirect
            for(let i=0; i<qty; i++) {
                addToCart(product.id, e);
            }
            window.location.href = 'cart.html';
        };
    }
}

function renderProductDetails(product) {
    const setSafeContent = (id, content) => {
        const el = document.getElementById(id);
        if (el) el.textContent = content;
    };

    setSafeContent('productTitle', product.title);
    setSafeContent('productBrand', product.brand || 'QuickMart');
    setSafeContent('productDescription', product.description || 'No description available.');
    setSafeContent('breadcrumbTitle', product.title);

    // --- PRICE SYNC ---
    const formattedPrice = product.price.toLocaleString('en-IN');
    
    const priceContainer = document.getElementById('productPrice');
    if (priceContainer) {
        priceContainer.innerHTML = `
            <div class="d-flex align-items-start gap-1">
                <span class="fs-6 mt-2 fw-bold">₹</span>
                <span class="display-5 fw-bold lh-1 text-dark">${formattedPrice}</span>
            </div>
        `;
    }

    const buyBoxPriceEl = document.getElementById('buyBoxPrice');
    if (buyBoxPriceEl) buyBoxPriceEl.textContent = formattedPrice;

    // --- IMAGE SYNC ---
    const mainImg = document.getElementById('mainImage');
    if (mainImg) {
        let finalImgPath = product.imageUrl || '../assets/images/placeholder.jpg';
        if (!finalImgPath.startsWith('http') && !finalImgPath.startsWith('..')) {
            finalImgPath = `../${finalImgPath}`;
        }
        mainImg.src = finalImgPath;
        mainImg.onerror = function() { this.src = '../assets/images/placeholder.jpg'; };
    }

    // --- CATEGORY BREADCRUMB ---
    const catBreadcrumb = document.getElementById('breadcrumbCategory');
    if (catBreadcrumb && product.category) {
        catBreadcrumb.textContent = product.category.categoryName;
        catBreadcrumb.href = `products.html?category=${encodeURIComponent(product.category.categoryName)}`;
    }
}

async function fetchRelatedProducts(categoryName) {
    if (!categoryName) return;
    try {
        const products = await apiRequest(`/products?category=${encodeURIComponent(categoryName)}`);
        const relatedGrid = document.getElementById('relatedProducts');
        if (!relatedGrid) return;
        
        relatedGrid.innerHTML = products.slice(0, 4).map(p => {
            const formattedPPrice = p.price.toLocaleString('en-IN');
            return `
                <div class="col-6 col-md-3">
                    <div class="glass-card bg-white p-3 h-100 rounded-4 shadow-sm border-0 cursor-pointer hover-scale" onclick="window.location.href='product-details.html?id=${p.id}'">
                        <div class="bg-light rounded text-center mb-3 overflow-hidden" style="height: 150px;">
                            <img src="${p.imageUrl}" class="w-100 h-100" style="object-fit: cover;" onerror="this.src='../assets/images/placeholder.jpg'">
                        </div>
                        <h6 class="small fw-bold text-truncate-2 mb-1">${p.title}</h6>
                        <div class="text-primary fw-bold">₹${formattedPPrice}</div>
                    </div>
                </div>
            `;
        }).join('');
    } catch (e) {}
}

function showError(msg) {
    const container = document.querySelector('main');
    if (container) {
        container.innerHTML = `
            <div class="container text-center py-5">
                <div class="display-1 text-danger mb-4"><i class="fas fa-exclamation-circle"></i></div>
                <h2 class="fw-bold mb-3">${msg}</h2>
                <a href="products.html" class="btn btn-premium rounded-pill px-5">Back to Products</a>
            </div>
        `;
    }
}
