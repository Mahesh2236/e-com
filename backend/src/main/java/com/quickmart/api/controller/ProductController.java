package com.quickmart.api.controller;

import com.quickmart.api.model.Product;
import com.quickmart.api.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/products")
    public List<Product> getAllProducts(@RequestParam(required = false) String category) {
        if (category != null && !category.isEmpty()) {
            System.out.println(">>> API REQUEST: Filtering by category: " + category);
            return productRepository.findByCategoryName(category);
        }
        return productRepository.findAll();
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        System.out.println(">>> API REQUEST: Fetching product ID: " + id);
        return productRepository.findById(id)
                .map(product -> {
                    System.out.println(">>> API RESPONSE: Found " + product.getTitle());
                    return ResponseEntity.ok(product);
                })
                .orElseGet(() -> {
                    System.err.println(">>> API ERROR: Product ID " + id + " not found.");
                    return ResponseEntity.notFound().build();
                });
    }

    @GetMapping("/products/category/{categoryId}")
    public List<Product> getProductsByCategory(@PathVariable Long categoryId) {
        return productRepository.findByCategoryId(categoryId);
    }

    @GetMapping("/products/featured")
    public List<Product> getFeaturedProducts() {
        return productRepository.findByFeaturedTrue();
    }
}
