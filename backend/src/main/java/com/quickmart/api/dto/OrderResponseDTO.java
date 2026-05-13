package com.quickmart.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class OrderResponseDTO {
    private String orderId;
    private Double totalAmount;
    private Double gstAmount;
    private Double deliveryFee;
    private Double discountAmount;
    private String paymentMethod;
    private String paymentStatus;
    private String orderStatus;
    private String shippingAddress;
    private String estimatedDelivery;
    private LocalDateTime createdAt;
    private List<OrderItemDTO> orderItems;

    public OrderResponseDTO() {}

    public OrderResponseDTO(String orderId, Double totalAmount, Double gstAmount, Double deliveryFee, Double discountAmount, String paymentMethod, String paymentStatus, String orderStatus, String shippingAddress, String estimatedDelivery, LocalDateTime createdAt, List<OrderItemDTO> orderItems) {
        this.orderId = orderId;
        this.totalAmount = totalAmount;
        this.gstAmount = gstAmount;
        this.deliveryFee = deliveryFee;
        this.discountAmount = discountAmount;
        this.paymentMethod = paymentMethod;
        this.paymentStatus = paymentStatus;
        this.orderStatus = orderStatus;
        this.shippingAddress = shippingAddress;
        this.estimatedDelivery = estimatedDelivery;
        this.createdAt = createdAt;
        this.orderItems = orderItems;
    }

    @Data
    public static class OrderItemDTO {
        private String productTitle;
        private String productImageUrl;
        private Integer quantity;
        private Double price;
        private Long productId;

        public OrderItemDTO() {}

        public OrderItemDTO(String productTitle, String productImageUrl, Integer quantity, Double price, Long productId) {
            this.productTitle = productTitle;
            this.productImageUrl = productImageUrl;
            this.quantity = quantity;
            this.price = price;
            this.productId = productId;
        }
    }
}
