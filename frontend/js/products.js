// frontend/js/products.js

document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryQuery = urlParams.get('category');
    const searchQuery = urlParams.get('search');
    
    const productGrid = document.getElementById('productGrid');
    const resultsCount = document.getElementById('resultsCount');
    const sortDropdown = document.getElementById('sortDropdown');

    let currentData = []; 
    let displayedData = []; 
    let categoriesList = [];
    
    try {
        const [products, categories] = await Promise.all([
            apiRequest('/products'),
            apiRequest('/categories')
        ]);
        
        categoriesList = categories;
        
        currentData = products.map(p => {
            const catName = p.category ? p.category.categoryName : 'Uncategorized';
            let subfolder = '';
            const catLower = catName.toLowerCase();
            
            if (catLower.includes('beauty')) subfolder = 'beauty/';
            else if (catLower.includes('electronics')) subfolder = 'electronics/';
            else if (catLower.includes('fashion')) subfolder = 'fashion/';
            else if (catLower.includes('gaming')) subfolder = 'gaming/';
            else if (catLower.includes('home-decor') || catLower.includes('decor')) subfolder = 'home-decor/';
            else if (catLower.includes('home')) subfolder = 'home/';
            else if (catLower.includes('sneakers')) subfolder = 'sneakers/';
            else if (catLower.includes('gadgets')) subfolder = 'gadgets/';
            else if (catLower.includes('accessories')) subfolder = 'accessories/';

            let rawPath = p.imageUrl || 'placeholder.jpg';
            let finalImage = '';

            // AGGRESSIVE FIX: Always ensure we look in assets/images/products/subfolder
            if (rawPath.startsWith('http')) {
                finalImage = rawPath;
            } else {
                // Strip out any existing 'assets/' or '../' from the DB to start fresh
                let filename = rawPath.split('/').pop();
                finalImage = `../assets/images/products/${subfolder}${filename}`;
            }
            
            return {
                ...p,
                image: finalImage,
                categoryName: catName,
                reviews: p.totalReviews || 0
            };
        });

        applyInitialFilter();
        renderSidebar();
        renderProducts();

    } catch (error) {
        console.error('Failed to load products:', error);
        if (productGrid) productGrid.innerHTML = `<div class="col-12 text-center py-5 text-danger">Failed to connect to backend.</div>`;
    }

    function applyInitialFilter() {
        if (categoryQuery) {
            displayedData = currentData.filter(p => p.categoryName.toLowerCase() === categoryQuery.toLowerCase());
            document.getElementById('breadcrumbCategory').textContent = categoryQuery;
        } else if (searchQuery) {
            const lowerSearch = searchQuery.toLowerCase();
            displayedData = currentData.filter(p => 
                p.title.toLowerCase().includes(lowerSearch) || 
                p.categoryName.toLowerCase().includes(lowerSearch) ||
                (p.brand && p.brand.toLowerCase().includes(lowerSearch))
            );
            document.getElementById('breadcrumbCategory').textContent = `Search: "${searchQuery}"`;
        } else {
            displayedData = [...currentData];
            document.getElementById('breadcrumbCategory').textContent = "All Departments";
        }
    }

    function renderProducts(dataToRender = displayedData) {
        if (!productGrid) return;
        productGrid.innerHTML = '';
        resultsCount.textContent = `Showing ${dataToRender.length} results`;

        if (dataToRender.length === 0) {
            productGrid.innerHTML = `<div class="col-12 text-center py-5"><h4 class="text-muted">No products found.</h4></div>`;
            return;
        }

        dataToRender.forEach(p => {
            const oldPriceHtml = p.oldPrice ? `<div class="small text-muted text-decoration-line-through mb-1">₹${p.oldPrice.toLocaleString('en-IN')}</div>` : '<div class="small text-transparent mb-1">&nbsp;</div>';
            const discountBadge = p.discountPercentage > 0 ? `<div class="position-absolute top-0 start-0 m-3 z-3"><span class="badge bg-danger">-${p.discountPercentage}%</span></div>` : '';
            
            const card = `
                <div class="col-xl-3 col-lg-4 col-sm-6 mb-4">
                    <div class="glass-card bg-white p-3 h-100 d-flex flex-column rounded-4 shadow-sm border-0 position-relative group hover-scale">
                        ${discountBadge}
                        <a href="product-details.html?id=${p.id}" class="text-decoration-none text-dark d-flex flex-column h-100">
                            <div class="bg-light rounded text-center mb-3 d-flex align-items-center justify-content-center overflow-hidden" style="height: 220px;">
                                <img src="${p.image}" alt="${p.title}" class="img-fluid w-100 h-100" style="object-fit: cover;">
                            </div>
                            <div class="small text-muted fw-bold mb-1">${p.brand || 'QuickMart'}</div>
                            <h6 class="fw-bold mb-1 text-truncate-2">${p.title}</h6>
                            <div class="d-flex align-items-center mb-2">
                                <i class="fas fa-star text-warning small"></i><i class="fas fa-star text-warning small"></i><i class="fas fa-star text-warning small"></i><i class="fas fa-star text-warning small"></i><i class="fas fa-star-half-alt text-warning small"></i>
                                <span class="text-primary small ms-2">${(p.reviews || 0).toLocaleString('en-IN')}</span>
                            </div>
                            <div class="mt-auto">
                                <div class="fs-4 fw-bold mb-0 lh-1" style="color: var(--clr-dark-purple);">₹${p.price.toLocaleString('en-IN')}</div>
                                ${oldPriceHtml}
                                <button class="btn btn-premium w-100 rounded-pill py-2 mt-2" onclick="addToCart('${p.id}', event)">Add to Cart</button>
                            </div>
                        </a>
                    </div>
                </div>
            `;
            productGrid.insertAdjacentHTML('beforeend', card);
        });
    }

    function renderSidebar() {
        const sidebar = document.getElementById('sidebarFilters');
        if(!sidebar) return;
        
        const counts = {};
        currentData.forEach(p => { counts[p.categoryName] = (counts[p.categoryName] || 0) + 1; });

        let categoryListHtml = categoriesList.map(cat => `
            <li class="mb-2">
                <a href="products.html?category=${encodeURIComponent(cat.categoryName)}" 
                   class="text-decoration-none d-flex justify-content-between align-items-center ${categoryQuery === cat.categoryName ? 'fw-bold text-primary' : 'text-muted'}">
                    <span>${cat.categoryName}</span>
                    <span class="badge rounded-pill bg-light text-muted border">${counts[cat.categoryName] || 0}</span>
                </a>
            </li>
        `).join('');

        sidebar.innerHTML = `
            <div class="mb-4 pb-3 border-bottom border-light">
                <h6 class="fw-bold mb-3 small">Shop by Category</h6>
                <ul class="list-unstyled small mb-0">
                    <li class="mb-2"><a href="products.html" class="text-decoration-none ${!categoryQuery ? 'fw-bold text-primary' : 'text-muted'}">All Departments</a></li>
                    ${categoryListHtml}
                </ul>
            </div>
            <div class="mb-4 pb-3 border-bottom border-light">
                <h6 class="fw-bold mb-3 small">Price Range</h6>
                <div class="form-check mb-2"><input class="form-check-input" type="checkbox" id="p1" onchange="filterPrice(0, 5000, this)"><label class="form-check-label small text-muted" for="p1">Under ₹5,000</label></div>
                <div class="form-check mb-2"><input class="form-check-input" type="checkbox" id="p2" onchange="filterPrice(5000, 20000, this)"><label class="form-check-label small text-muted" for="p2">₹5,000 - ₹20,000</label></div>
                <div class="form-check mb-2"><input class="form-check-input" type="checkbox" id="p3" onchange="filterPrice(20000, 999999, this)"><label class="form-check-label small text-muted" for="p3">Over ₹20,000</label></div>
            </div>
        `;
    }

    window.filterPrice = (min, max, cb) => {
        if (cb.checked) renderProducts(displayedData.filter(p => p.price >= min && p.price <= max));
        else renderProducts(displayedData);
    };

    if(sortDropdown) {
        sortDropdown.addEventListener('change', (e) => {
            let sorted = [...displayedData];
            if (e.target.value === 'price_low') sorted.sort((a, b) => a.price - b.price);
            else if (e.target.value === 'price_high') sorted.sort((a, b) => b.price - a.price);
            renderProducts(sorted);
        });
    }
});
