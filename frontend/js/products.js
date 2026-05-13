// frontend/js/products.js
console.log(">>> QUICKMART PRODUCTS.JS v10.0 SIDEBAR-RESTORE LOADED <<<");

// --- 1. THE FAIL-SAFE NAVIGATION FUNCTION ---
function goToProductDetails(productId) {
    console.log(">>> TRIGGERING FAIL-SAFE REDIRECT <<<");
    console.log("Product ID:", productId);

    if (!productId) return;

    // Save to localStorage as a backup in case the URL gets cleaned
    localStorage.setItem('lastSelectedProductId', productId);

    // Force absolute path with .html to prevent stripping
    const targetUrl = window.location.origin + "/pages/product-details.html?id=" + productId;
    console.log("Navigating to:", targetUrl);
    
    window.location.href = targetUrl;
}

document.addEventListener("DOMContentLoaded", async () => {
    const productGrid = document.getElementById('productGrid');
    const resultsCount = document.getElementById('resultsCount');
    const breadcrumb = document.getElementById('breadcrumbCategory');
    const sidebar = document.getElementById('sidebarFilters');

    // --- 2. CORE FETCH FUNCTION ---
    async function fetchAndRender(categoryName = null) {
        try {
            console.log("-----------------------------------------");
            console.log("Selected Category:", categoryName || "None (All Departments)");
            
            let productsUrl = '/products';
            if (categoryName) productsUrl += `?category=${encodeURIComponent(categoryName)}`;
            
            const products = await apiRequest(productsUrl);
            renderProducts(products);
            if (breadcrumb) breadcrumb.textContent = categoryName || "All Departments";
        } catch (e) { console.error(e); }
    }

    // --- 3. RENDER PRODUCTS ---
    function renderProducts(dataToRender) {
        if (!productGrid) return;
        productGrid.innerHTML = '';
        if (resultsCount) resultsCount.textContent = `Showing ${dataToRender.length} results`;

        if (dataToRender.length === 0) {
            productGrid.innerHTML = `<div class="col-12 text-center py-5"><h4>No products found.</h4></div>`;
            return;
        }

        dataToRender.forEach(product => {
            const card = document.createElement('div');
            card.className = 'col-xl-3 col-lg-4 col-sm-6 mb-4';
            card.innerHTML = `
                <div class="product-card glass-card bg-white p-3 h-100 d-flex flex-column rounded-4 shadow-sm border-0 position-relative cursor-pointer" 
                     onclick="goToProductDetails(${product.id})">
                    <div class="bg-light rounded text-center mb-3 overflow-hidden d-flex align-items-center justify-content-center" style="height: 220px;">
                        <img src="${product.imageUrl || '../assets/images/placeholder.jpg'}" class="img-fluid w-100 h-100" style="object-fit: cover;" onerror="this.src='../assets/images/placeholder.jpg'">
                    </div>
                    <div class="small text-muted fw-bold mb-1">${product.brand || 'QuickMart'}</div>
                    <h6 class="fw-bold mb-1 text-truncate-2">${product.title}</h6>
                    <div class="mt-auto">
                        <div class="fs-4 fw-bold mb-2" style="color: var(--clr-dark-purple);">₹${product.price.toLocaleString('en-IN')}</div>
                        <button class="btn btn-premium w-100 rounded-pill py-2" onclick="event.stopPropagation(); addToCart(${product.id}, event)">Add to Cart</button>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }

    // --- 4. SIDEBAR RESTORATION ---
    async function initSidebar() {
        try {
            console.log("Loading Categories into Sidebar...");
            const categories = await apiRequest('/categories');
            if(!sidebar) return;

            sidebar.innerHTML = `
                <div class="mb-4">
                    <h6 class="fw-bold mb-3 small">Shop by Category</h6>
                    <ul class="list-unstyled small mb-0">
                        <li class="mb-2">
                            <a href="#" class="category-link text-decoration-none text-muted d-flex justify-content-between align-items-center" data-category="">
                                <span>All Departments</span>
                            </a>
                        </li>
                        ${categories.map(cat => `
                            <li class="mb-2">
                                <a href="#" class="category-link text-decoration-none text-muted d-flex justify-content-between align-items-center" data-category="${cat.categoryName}">
                                    <span>${cat.categoryName}</span>
                                    <span class="badge rounded-pill bg-light text-muted border">${cat.productCount || 0}</span>
                                </a>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;

            document.querySelectorAll('.category-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const catName = link.getAttribute('data-category');
                    
                    // Update Active state UI
                    document.querySelectorAll('.category-link').forEach(l => l.classList.remove('fw-bold', 'text-primary'));
                    link.classList.add('fw-bold', 'text-primary');
                    
                    fetchAndRender(catName);
                });
            });
        } catch (e) { console.error("Sidebar init failed:", e); }
    }

    // --- INITIALIZE EVERYTHING ---
    await initSidebar();
    const urlParams = new URLSearchParams(window.location.search);
    await fetchAndRender(urlParams.get('category'));
});
