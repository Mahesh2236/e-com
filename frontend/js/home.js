// frontend/js/home.js

document.addEventListener("DOMContentLoaded", async () => {
    
    // Global Search override for Home
    const globalSearch = document.getElementById('globalSearch');
    const globalSearchBtn = document.getElementById('globalSearchBtn');
    
    if (globalSearch && globalSearchBtn) {
        const executeSearch = () => {
            if(globalSearch.value) window.location.href = `pages/products.html?search=${encodeURIComponent(globalSearch.value)}`;
        };
        globalSearchBtn.addEventListener('click', executeSearch);
        globalSearch.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') executeSearch();
        });
    }

    const container = document.getElementById('featured-products-container') || document.getElementById('dynamicCategoriesContainer');
    if (!container) return;

    try {
        const [featuredProducts, categories] = await Promise.all([
            apiRequest('/products/featured'),
            apiRequest('/categories')
        ]);

        if (featuredProducts.length > 0) {
            container.innerHTML = '';
            renderFeaturedSection(featuredProducts);
        }

        renderCategoryDeals(categories);

    } catch (error) {
        console.error('Failed to load homepage data:', error);
    }

    function fixImagePath(path, category) {
        if (!path) return 'assets/images/products/placeholder.jpg';
        if (path.startsWith('http')) return path;
        
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
        
        // AGGRESSIVE FIX: Always pull just the filename and force the correct path
        const filename = path.split('/').pop();
        return `assets/images/products/${subfolder}${filename}`;
    }

    function renderFeaturedSection(products) {
        let productCardsHtml = '';
        products.forEach(p => {
            const catName = p.category ? p.category.categoryName : 'Uncategorized';
            const finalImage = fixImagePath(p.imageUrl, catName);
            
            const priceHtml = `<div class="d-flex align-items-end gap-2 mb-2">
                                    <div class="d-flex align-items-start gap-1 mb-1" style="color: var(--clr-dark-purple);">
                                        <span class="small position-relative" style="top: 2px;">₹</span>
                                        <span class="fs-4 fw-bold lh-1">${p.price.toLocaleString('en-IN')}</span>
                                    </div>
                                    ${p.oldPrice ? `<span class="text-muted small text-decoration-line-through mb-1">₹${p.oldPrice.toLocaleString('en-IN')}</span>` : ''}
                               </div>`;
            
            const discountBadge = p.discountPercentage > 0 ? `<span class="badge bg-danger position-absolute top-0 start-0 m-2 z-1">-${p.discountPercentage}%</span>` : '';

            productCardsHtml += `
                <div class="card border-0 hover-scale bg-transparent" style="min-width: 220px; max-width: 220px; scroll-snap-align: start;">
                    <a href="pages/product-details.html?id=${p.id}" class="text-decoration-none text-dark position-relative d-block">
                        <div class="bg-light rounded text-center mb-3 d-flex align-items-center justify-content-center overflow-hidden shadow-sm" style="height: 180px;">
                            ${discountBadge}
                            <img src="${finalImage}" alt="${p.title}" class="img-fluid w-100 h-100" style="object-fit: cover;">
                        </div>
                        <h6 class="text-truncate mb-1 fw-bold">${p.title}</h6>
                        <div class="d-flex align-items-center mb-1">
                            <i class="fas fa-star text-warning small"></i><i class="fas fa-star text-warning small"></i><i class="fas fa-star text-warning small"></i><i class="fas fa-star text-warning small"></i><i class="fas fa-star-half-alt text-warning small"></i>
                            <span class="text-primary small ms-2">${p.totalReviews || 0}</span>
                        </div>
                        ${priceHtml}
                        <button class="btn btn-sm btn-outline-primary w-100 rounded-pill fw-bold" onclick="addToCart('${p.id}', event)">Add to Cart</button>
                    </a>
                </div>
            `;
        });

        const featuredHtml = `
            <div class="glass-card bg-white p-4 mb-5 rounded-4 shadow-sm border-0" data-aos="fade-up">
                <div class="d-flex align-items-center mb-4">
                    <h4 class="fw-bold mb-0 me-3">Featured Deals <span class="badge rounded-pill fs-6 ms-2 shadow-sm" style="background-color: var(--clr-soft-purple);">Top Picks</span></h4>
                    <a href="pages/products.html" class="text-decoration-none small fw-bold ms-auto" style="color: var(--clr-peach);">See all</a>
                </div>
                <div class="d-flex gap-4 overflow-auto pb-3 px-2" style="scroll-snap-type: x mandatory;">
                    ${productCardsHtml}
                </div>
            </div>
        `;
        container.insertAdjacentHTML('afterbegin', featuredHtml);
    }

    function renderCategoryDeals(categories) {
        categories.forEach(cat => {
            const filename = cat.categoryImage ? cat.categoryImage.split('/').pop() : 'placeholder-cat.jpg';
            const catImg = `assets/images/categories/${filename}`;
            const sectionHtml = `
                <div class="glass-card bg-white p-4 mb-4 rounded-4 shadow-sm border-0 d-inline-block me-3 text-center" style="width: 180px;" data-aos="zoom-in">
                    <a href="pages/products.html?category=${encodeURIComponent(cat.categoryName)}" class="text-decoration-none text-dark">
                        <div class="rounded-circle overflow-hidden mb-3 mx-auto shadow-sm" style="width: 100px; height: 100px; background: #f8f9fa;">
                            <img src="${catImg}" class="w-100 h-100" style="object-fit: cover;">
                        </div>
                        <h6 class="fw-bold mb-0">${cat.categoryName}</h6>
                    </a>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', sectionHtml);
        });
    }
});
