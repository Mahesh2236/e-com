package com.quickmart.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendOtpEmail(String toEmail, String otp) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("maheshcscl2236@gmail.com");
        message.setTo(toEmail);
        message.setSubject("QuickMart - Your Verification Code");
        message.setText("Welcome to QuickMart!\n\n" +
                "Your verification code is: " + otp + "\n\n" +
                "This code will expire in 5 minutes. Please do not share it with anyone.\n\n" +
                "Happy Shopping,\n" +
                "The QuickMart Team");
        
        mailSender.send(message);
    }
}
