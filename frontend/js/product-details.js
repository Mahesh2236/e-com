// frontend/js/product-details.js

document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId) {
        window.location.href = 'products.html';
        return;
    }

    try {
        // Fetch product data from backend
        const product = await apiRequest(`/products/${productId}`);
        
        if (!product) {
            showError('Product not found');
            return;
        }

        // Process data for frontend
        const p = {
            ...product,
            image: fixImagePath(product.imageUrl),
            categoryName: product.category ? product.category.categoryName : 'Uncategorized',
            reviews: product.totalReviews || 0,
            specs: product.specifications ? JSON.parse(product.specifications) : {}
        };

        renderProductDetails(p);
        
        // Fetch related products (optional optimization: backend could provide this)
        const allProducts = await apiRequest('/products');
        const related = allProducts.filter(item => 
            item.category && product.category && 
            item.category.id === product.category.id && 
            item.id !== product.id
        ).slice(0, 4);
        
        renderRelatedProducts(related);

    } catch (error) {
        console.error('Failed to load product details:', error);
        showError('Unable to load product details. Please ensure the backend is running.');
    }

    function fixImagePath(path, category) {
        if (!path) return '../assets/images/products/placeholder.jpg';
        if (path.startsWith('http') || path.startsWith('assets') || path.startsWith('..')) return path;
        
        // Map category names to subfolders
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

    function renderProductDetails(product) {
        // Populate Breadcrumb
        const breadcrumbCat = document.getElementById('breadcrumbCategory');
        const breadcrumbTitle = document.getElementById('breadcrumbTitle');
        if (breadcrumbCat) {
            breadcrumbCat.textContent = product.categoryName;
            breadcrumbCat.href = `products.html?category=${encodeURIComponent(product.categoryName)}`;
        }
        if (breadcrumbTitle) breadcrumbTitle.textContent = product.title;

        // Populate Images
        const mainImage = document.getElementById('mainImage');
        const finalImage = fixImagePath(product.imageUrl, product.categoryName);
        if (mainImage) mainImage.src = finalImage;
        
        const thumbnails = document.getElementById('thumbnailList');
        if (thumbnails) {
            thumbnails.innerHTML = `
                <div class="border border-primary rounded cursor-pointer bg-white overflow-hidden" style="height: 60px;"><img src="${finalImage}" class="w-100 h-100" style="object-fit: cover;"></div>
                <div class="border rounded cursor-pointer bg-white border-light hover-scale overflow-hidden" style="height: 60px;"><img src="${finalImage}" class="w-100 h-100" style="object-fit: cover; opacity: 0.7;"></div>
            `;
        }

        // Populate Info
        const brandEl = document.getElementById('productBrand');
        const titleEl = document.getElementById('productTitle');
        const reviewsEl = document.getElementById('productReviews');
        const priceEl = document.getElementById('productPrice');
        
        if (brandEl) brandEl.textContent = product.brand || 'QuickMart Premium';
        if (titleEl) titleEl.textContent = product.title;
        if (reviewsEl) reviewsEl.textContent = `${product.reviews.toLocaleString()} ratings`;
        
        if (priceEl) {
            const priceHtml = `<span class="small position-relative" style="top: -10px; color: var(--clr-dark-purple);">₹</span><span class="display-5 fw-bold lh-1" style="color: var(--clr-dark-purple);">${product.price.toLocaleString('en-IN')}</span>`;
            priceEl.innerHTML = priceHtml;
        }

        const oldPriceEl = document.getElementById('productOldPrice');
        const discountEl = document.getElementById('productDiscount');
        if (product.oldPrice && oldPriceEl && discountEl) {
            oldPriceEl.textContent = `List Price: ₹${product.oldPrice.toLocaleString('en-IN')}`;
            const discountPercent = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
            discountEl.textContent = `You Save: ₹${(product.oldPrice - product.price).toLocaleString('en-IN')} (${discountPercent}%)`;
        }

        // Populate Specifications
        const specTable = document.getElementById('specTable');
        if (specTable) {
            specTable.innerHTML = '';
            for (const [key, value] of Object.entries(product.specs)) {
                specTable.innerHTML += `
                    <tr>
                        <td class="fw-bold bg-light" style="width: 30%; border-color: var(--clr-lavender);">${key}</td>
                        <td style="border-color: var(--clr-lavender);">${value}</td>
                    </tr>
                `;
            }
        }
        
        // Bind buttons
        const atcBtn = document.getElementById('mainAddToCartBtn');
        const bnBtn = document.getElementById('mainBuyNowBtn');
        if (atcBtn) atcBtn.onclick = (e) => addToCart(product.id, e);
        if (bnBtn) bnBtn.onclick = () => buyNow(product.id);
    }

    function renderRelatedProducts(related) {
        const relatedGrid = document.getElementById('relatedProducts');
        if (!relatedGrid) return;
        relatedGrid.innerHTML = '';
        
        related.forEach(p => {
            const image = fixImagePath(p.imageUrl);
            const rCard = `
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="glass-card bg-white p-3 h-100 d-flex flex-column rounded-4 shadow-sm border-0 position-relative hover-scale">
                        <a href="product-details.html?id=${p.id}" class="text-decoration-none text-dark d-flex flex-column h-100">
                            <div class="bg-light rounded text-center mb-3 d-flex align-items-center justify-content-center overflow-hidden" style="height: 150px;">
                                <img src="${image}" class="img-fluid w-100 h-100" style="object-fit: cover;">
                            </div>
                            <h6 class="fw-bold mb-1 small text-truncate">${p.title}</h6>
                            <div class="d-flex align-items-center mb-2">
                                <i class="fas fa-star text-warning small" style="font-size: 0.7rem;"></i><span class="text-primary small ms-1" style="font-size: 0.75rem;">${p.totalReviews || 0}</span>
                            </div>
                            <div class="mt-auto fw-bold mb-2" style="color: var(--clr-dark-purple);">₹${p.price.toLocaleString('en-IN')}</div>
                            <button class="btn btn-sm btn-outline-primary w-100 rounded-pill fw-bold mt-auto" onclick="addToCart('${p.id}', event)">Add to Cart</button>
                        </a>
                    </div>
                </div>
            `;
            relatedGrid.insertAdjacentHTML('beforeend', rCard);
        });
    }

    function showError(message) {
        const main = document.querySelector('main');
        if (main) {
            main.innerHTML = `
                <div class="container text-center py-5">
                    <div class="glass-card p-5 d-inline-block">
                        <i class="fas fa-exclamation-circle fa-3x text-danger mb-3"></i>
                        <h2>${message}</h2>
                        <a href="products.html" class="btn btn-premium mt-3 rounded-pill px-4">Back to Products</a>
                    </div>
                </div>
            `;
        }
    }
});
