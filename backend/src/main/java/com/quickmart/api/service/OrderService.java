package com.quickmart.api.service;

import com.quickmart.api.dto.OrderRequest;
import com.quickmart.api.model.Order;
import com.quickmart.api.model.OrderItem;
import com.quickmart.api.model.User;
import com.quickmart.api.model.Product;
import com.quickmart.api.repository.OrderRepository;
import com.quickmart.api.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;

    public OrderService(OrderRepository orderRepository, ProductRepository productRepository) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
    }

    @Transactional
    public Order placeOrder(OrderRequest request, User user) {
        String customOrderId = "QM" + (100000 + new Random().nextInt(900000));
        
        Order order = new Order(
                null,
                customOrderId,
                user,
                request.getTotalAmount(),
                request.getGstAmount(),
                request.getDeliveryFee(),
                request.getDiscountAmount(),
                request.getPaymentMethod(),
                "COMPLETED",
                "PLACED",
                request.getShippingAddress(),
                "Within 3-5 days",
                null,
                null
        );

        List<OrderItem> orderItems = new ArrayList<>();
        for (OrderRequest.OrderItemRequest itemReq : request.getItems()) {
            Product product = productRepository.findById(itemReq.getProductId())
                    .orElseThrow(() -> new RuntimeException("Product not found: " + itemReq.getProductId()));
            
            OrderItem orderItem = new OrderItem(
                    null,
                    order,
                    product,
                    itemReq.getQuantity(),
                    itemReq.getPrice()
            );
            orderItems.add(orderItem);
        }
        
        order.setOrderItems(orderItems);
        return orderRepository.save(order);
    }

    public List<Order> getUserOrders(User user) {
        return orderRepository.findByUserIdOrderByCreatedAtDesc(user.getId());
    }

    public Order getOrderDetails(String orderId) {
        return orderRepository.findByOrderId(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));
    }
}
