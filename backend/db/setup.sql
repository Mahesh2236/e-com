-- =============================================
-- QuickMart Ecommerce Database Setup
-- Description: Production-level schema for full-stack ecommerce
-- Author: QuickMart Team
-- Version: 1.0
-- =============================================

-- 1. DATABASE CREATION
DROP DATABASE IF EXISTS quickmart;
CREATE DATABASE quickmart;
USE quickmart;

-- 2. USERS TABLE
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(15),
    password VARCHAR(255) NOT NULL,
    role ENUM('USER', 'ADMIN') DEFAULT 'USER',
    profile_image VARCHAR(255),
    address TEXT,
    city VARCHAR(50),
    state VARCHAR(50),
    pincode VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_user_email (email)
);

-- 3. CATEGORIES TABLE
CREATE TABLE categories (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL,
    category_image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. PRODUCTS TABLE
CREATE TABLE products (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    brand VARCHAR(100),
    category_id BIGINT,
    price DECIMAL(12, 2) NOT NULL,
    old_price DECIMAL(12, 2),
    discount_percentage INT DEFAULT 0,
    stock INT DEFAULT 0,
    image_url VARCHAR(255),
    rating DECIMAL(3, 2) DEFAULT 0.00,
    total_reviews INT DEFAULT 0,
    specifications JSON, -- Store as JSON for flexibility
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL,
    INDEX idx_product_category (category_id),
    INDEX idx_product_featured (featured)
);

-- 5. PRODUCT_IMAGES TABLE (For multiple images)
CREATE TABLE product_images (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- 6. CART TABLE
CREATE TABLE cart (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- 7. WISHLIST TABLE
CREATE TABLE wishlist (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- 8. ORDERS TABLE
CREATE TABLE orders (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id VARCHAR(50) NOT NULL UNIQUE, -- Custom ID like QM123456
    user_id BIGINT NOT NULL,
    total_amount DECIMAL(12, 2) NOT NULL,
    gst_amount DECIMAL(12, 2),
    delivery_fee DECIMAL(10, 2) DEFAULT 0.00,
    discount_amount DECIMAL(12, 2) DEFAULT 0.00,
    payment_method VARCHAR(50),
    payment_status ENUM('PENDING', 'COMPLETED', 'FAILED') DEFAULT 'PENDING',
    order_status ENUM('PLACED', 'PACKED', 'SHIPPED', 'OUT_FOR_DELIVERY', 'DELIVERED', 'CANCELLED') DEFAULT 'PLACED',
    shipping_address TEXT NOT NULL,
    estimated_delivery VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE RESTRICT,
    INDEX idx_order_id (order_id),
    INDEX idx_order_status (order_status)
);

-- 9. ORDER_ITEMS TABLE
CREATE TABLE order_items (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_table_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(12, 2) NOT NULL, -- Price at the time of purchase
    FOREIGN KEY (order_table_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE RESTRICT
);

-- 10. REVIEWS TABLE
CREATE TABLE reviews (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- 11. PAYMENTS TABLE
CREATE TABLE payments (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id VARCHAR(50) NOT NULL,
    payment_method VARCHAR(50),
    transaction_id VARCHAR(100) UNIQUE,
    payment_status VARCHAR(50),
    paid_amount DECIMAL(12, 2),
    paid_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE
);

-- 12. ADMIN_ANALYTICS TABLE
CREATE TABLE admin_analytics (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    total_sales DECIMAL(15, 2) DEFAULT 0.00,
    total_orders INT DEFAULT 0,
    total_users INT DEFAULT 0,
    total_products INT DEFAULT 0,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- =============================================
-- SAMPLE DATA INSERTION
-- =============================================

-- Categories
INSERT INTO categories (category_name, category_image) VALUES 
('Electronics', 'assets/images/categories/electronics.jpg'),
('Fashion', 'assets/images/categories/fashion.jpg'),
('Sneakers', 'assets/images/categories/sneakers.jpg'),
('Beauty', 'assets/images/categories/beauty.jpg'),
('Gaming', 'assets/images/categories/gaming.jpg'),
('Home Decor', 'assets/images/categories/home_decor.jpg'),
('Accessories', 'assets/images/categories/accessories.jpg'),
('Smart Gadgets', 'assets/images/categories/smart_gadgets.jpg');

-- Users
INSERT INTO users (full_name, email, phone, password, role, address, city, state, pincode) VALUES
('Admin User', 'admin@quickmart.com', '9999999999', 'admin123', 'ADMIN', 'Admin Office, Tech Park', 'Bangalore', 'Karnataka', '560001'),
('John Doe', 'john@gmail.com', '9876543210', 'john123', 'USER', '123 Premium Shopping Ave', 'New Delhi', 'Delhi', '110001');

-- Products (Sample 20+)
INSERT INTO products (title, description, brand, category_id, price, old_price, discount_percentage, stock, image_url, rating, total_reviews, featured) VALUES
('Pro Gaming Monitor 27"', 'Ultra-fast 165Hz gaming monitor with HDR support.', 'ViewSonic', 5, 25999, 32000, 18, 50, 'assets/images/products/gaming/monitor.jpg', 4.8, 120, TRUE),
('Apple MacBook Pro 14"', 'M2 Chip, 16GB RAM, 512GB SSD. Space Grey.', 'Apple', 1, 159999, 169999, 6, 25, 'assets/images/products/electronics/macbook.jpg', 4.9, 850, TRUE),
('Sony WH-1000XM5', 'Industry-leading noise cancelling headphones.', 'Sony', 1, 29999, 34999, 14, 40, 'assets/images/products/electronics/sony_headphones.jpg', 4.7, 500, TRUE),
('Oversized Cotton Hoodie', 'Premium heavy cotton hoodie in lavender.', 'QuickMart Fashion', 2, 1499, 2499, 40, 100, 'assets/images/products/fashion/hoodie.jpg', 4.5, 320, FALSE),
('Nike Air Jordan 1 Low', 'Classic design with premium leather upper.', 'Nike', 3, 8999, 10999, 18, 15, 'assets/images/products/sneakers/jordan1.jpg', 4.9, 1200, TRUE),
('Logitech G502 Hero', 'High-performance wired gaming mouse.', 'Logitech', 5, 4500, 5999, 25, 60, 'assets/images/products/gaming/mouse.jpg', 4.8, 2100, FALSE),
('Samsung Galaxy S23 Ultra', '200MP camera, Snapdragon 8 Gen 2.', 'Samsung', 1, 124999, 134999, 7, 30, 'assets/images/products/electronics/s23ultra.jpg', 4.9, 450, TRUE),
('Mechanical Gaming Keyboard', 'RGB Backlit, Brown Switches, Metal Frame.', 'Redgear', 5, 2999, 4999, 40, 80, 'assets/images/products/gaming/keyboard.jpg', 4.4, 1500, FALSE),
('Matte Liquid Lipstick', 'Long-lasting, smudge-proof liquid lipstick.', 'Maybelline', 4, 699, 899, 22, 200, 'assets/images/products/beauty/lipstick.jpg', 4.3, 2400, FALSE),
('Smart Watch Series 8', 'Health monitoring and always-on display.', 'Apple', 8, 41999, 45999, 8, 45, 'assets/images/products/smart_gadgets/watch.jpg', 4.8, 980, TRUE),
('Modern Wall Clock', 'Minimalist design for home decor.', 'HomeStyle', 6, 1299, 1999, 35, 120, 'assets/images/products/home_decor/clock.jpg', 4.6, 150, FALSE),
('Leather Messenger Bag', 'Genuine leather laptop bag for professionals.', 'Wildhorn', 7, 3499, 5999, 41, 35, 'assets/images/products/accessories/bag.jpg', 4.7, 420, TRUE),
('Dyson V15 Detect', 'Powerful cordless vacuum cleaner with laser.', 'Dyson', 8, 55900, 62900, 11, 20, 'assets/images/products/smart_gadgets/vacuum.jpg', 4.9, 310, TRUE),
('Denim Trucker Jacket', 'Classic blue denim jacket with sherpa lining.', 'Levis', 2, 4999, 6999, 28, 55, 'assets/images/products/fashion/jacket.jpg', 4.6, 180, FALSE),
('Adidas Ultraboost Light', 'Revolutionary energy return cushioning.', 'Adidas', 3, 16999, 18999, 10, 25, 'assets/images/products/sneakers/ultraboost.jpg', 4.8, 670, TRUE),
('Echo Dot (5th Gen)', 'Smart speaker with Alexa and deeper bass.', 'Amazon', 8, 4499, 5499, 18, 90, 'assets/images/products/smart_gadgets/echodot.jpg', 4.7, 5600, FALSE),
('Premium Scented Candle', 'Lavender and vanilla essential oil candle.', 'HomeStyle', 6, 499, 799, 37, 300, 'assets/images/products/home_decor/candle.jpg', 4.4, 890, FALSE),
('Stainless Steel Water Bottle', 'Insulated, 24-hour cold, 12-hour hot.', 'Milton', 7, 899, 1299, 30, 150, 'assets/images/products/accessories/bottle.jpg', 4.5, 4500, FALSE),
('Gaming Chair Pro', 'Ergonomic lumbar support and 4D armrests.', 'Green Soul', 5, 14999, 19999, 25, 15, 'assets/images/products/gaming/chair.jpg', 4.7, 720, TRUE),
('Noise ColorFit Smartwatch', 'Affordable fitness tracking and SPO2.', 'Noise', 8, 2499, 4999, 50, 250, 'assets/images/products/smart_gadgets/noise_watch.jpg', 4.2, 12000, FALSE),
('Retro Aviator Sunglasses', 'Polarized lenses with gold metal frame.', 'Ray-Ban', 7, 9899, 12999, 23, 40, 'assets/images/products/accessories/sunglasses.jpg', 4.8, 150, TRUE);

-- Sample Orders
INSERT INTO orders (order_id, user_id, total_amount, gst_amount, delivery_fee, payment_method, payment_status, order_status, shipping_address, estimated_delivery) VALUES
('QM849201', 2, 188798.82, 28798.82, 0.00, 'Card', 'COMPLETED', 'DELIVERED', '123 Premium Shopping Ave, New Delhi', 'Delivered Today'),
('QM928173', 2, 6687.00, 1020.00, 0.00, 'UPI', 'COMPLETED', 'SHIPPED', '123 Premium Shopping Ave, New Delhi', 'Tomorrow, by 9 PM');

-- Order Items
INSERT INTO order_items (order_table_id, product_id, quantity, price) VALUES
(1, 2, 1, 159999.00),
(1, 3, 1, 29999.00),
(2, 6, 1, 4500.00),
(2, 8, 1, 2999.00);
