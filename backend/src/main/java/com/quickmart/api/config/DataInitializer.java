package com.quickmart.api.config;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.quickmart.api.model.Category;
import com.quickmart.api.model.Product;
import com.quickmart.api.model.User;
import com.quickmart.api.model.Role;
import com.quickmart.api.repository.CategoryRepository;
import com.quickmart.api.repository.ProductRepository;
import com.quickmart.api.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.io.InputStream;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

@Configuration
public class DataInitializer {

    private final PasswordEncoder passwordEncoder;

    public DataInitializer(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository, 
                                 CategoryRepository categoryRepository, 
                                 ProductRepository productRepository) {
        return args -> {
            System.out.println(">>> QUICKMART SEEDER v3.0 - FULL CATEGORY OVERHAUL <<<");
            
            // Seed Admin User
            if (userRepository.findByEmail("nagaraj@example.com").isEmpty()) {
                User admin = new User();
                admin.setFullName("Nagaraj");
                admin.setEmail("nagaraj@example.com");
                admin.setPassword(passwordEncoder.encode("password123"));
                admin.setRole(Role.ADMIN);
                admin.setCreatedAt(LocalDateTime.now());
                userRepository.save(admin);
            }

            // Seed from JSON if empty
            if (productRepository.count() == 0) {
                try {
                    ObjectMapper mapper = new ObjectMapper();
                    TypeReference<List<Map<String, Object>>> typeReference = new TypeReference<>() {};
                    InputStream inputStream = new ClassPathResource("products_seed.json").getInputStream();
                    List<Map<String, Object>> productsData = mapper.readValue(inputStream, typeReference);

                    final Map<String, Category> categoryMap = new HashMap<>();

                    for (Map<String, Object> pData : productsData) {
                        String rawCat = (String) pData.get("category");
                        String mappedCat = mapCategory(rawCat);

                        Category category = categoryMap.get(mappedCat);
                        if (category == null) {
                            final String finalCatName = mappedCat;
                            category = categoryRepository.findByCategoryName(mappedCat)
                                    .orElseGet(() -> {
                                        Category newCat = new Category();
                                        newCat.setCategoryName(finalCatName);
                                        newCat.setCreatedAt(LocalDateTime.now());
                                        return categoryRepository.save(newCat);
                                    });
                            categoryMap.put(mappedCat, category);
                        }

                        Product product = new Product();
                        product.setTitle((String) pData.get("title"));
                        product.setBrand((String) pData.get("brand"));
                        
                        Object priceObj = pData.get("price");
                        if (priceObj instanceof Number) {
                            product.setPrice(((Number) priceObj).doubleValue());
                        } else {
                            product.setPrice(0.0);
                        }
                        
                        Object oldPrice = pData.get("oldPrice");
                        if (oldPrice instanceof Number) {
                            product.setOldPrice(((Number) oldPrice).doubleValue());
                        }

                        Object discount = pData.get("discount");
                        if (discount instanceof Number) {
                            product.setDiscountPercentage(((Number) discount).intValue());
                        }

                        Object rating = pData.get("rating");
                        if (rating instanceof Number) {
                            product.setRating(((Number) rating).doubleValue());
                        }

                        Object reviews = pData.get("reviews");
                        if (reviews instanceof Number) {
                            product.setTotalReviews(((Number) reviews).intValue());
                        }

                        product.setImageUrl((String) pData.get("image"));
                        product.setCategory(category);
                        product.setFeatured(true);
                        product.setCreatedAt(LocalDateTime.now());
                        product.setStock(50);
                        
                        productRepository.save(product);
                    }
                    
                    System.out.println("Imported " + productsData.size() + " products!");
                    categoryRepository.findAll().forEach(c -> {
                        System.out.println("Category: " + c.getCategoryName() + " | Products: " + c.getProductCount());
                    });

                } catch (Exception e) {
                    System.err.println("Failed to seed products: " + e.getMessage());
                    e.printStackTrace();
                }
            }
        };
    }

    /**
     * Strict mapping to ensure products fall into the 6 required categories
     */
    private String mapCategory(String raw) {
        if (raw == null) return "Electronics";
        String lower = raw.toLowerCase();
        
        if (lower.contains("electronic") || lower.contains("gadget") || lower.contains("accessory") || lower.contains("tech")) 
            return "Electronics";
        if (lower.contains("fashion") || lower.contains("clothing") || lower.contains("shirt") || lower.contains("apparel")) 
            return "Fashion";
        if (lower.contains("gaming") || lower.contains("console") || lower.contains("controller")) 
            return "Gaming";
        if (lower.contains("sneaker") || lower.contains("shoe") || lower.contains("footwear")) 
            return "Sneakers";
        if (lower.contains("beauty") || lower.contains("makeup") || lower.contains("fragrance") || lower.contains("skincare")) 
            return "Beauty";
        if (lower.contains("home") || lower.contains("decor") || lower.contains("furniture") || lower.contains("kitchen")) 
            return "Home Decor";
            
        return "Electronics"; // Default fallback
    }
}
