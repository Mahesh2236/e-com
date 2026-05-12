package com.quickmart.api.service;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;

@Service
public class OtpService {

    // Store OTPs in memory (Email -> OTP)
    private final Map<String, String> otpStorage = new ConcurrentHashMap<>();
    // Store expiry timestamps (Email -> Timestamp)
    private final Map<String, Long> otpExpiry = new ConcurrentHashMap<>();
    
    private final Random random = new Random();

    public String generateOtp(String email) {
        String otp = String.format("%06d", random.nextInt(1000000));
        otpStorage.put(email, otp);
        // Expire in 5 minutes
        otpExpiry.put(email, System.currentTimeMillis() + TimeUnit.MINUTES.toMillis(5));
        return otp;
    }

    public boolean verifyOtp(String email, String otp) {
        if (!otpStorage.containsKey(email)) return false;
        long expiry = otpExpiry.getOrDefault(email, 0L);
        if (System.currentTimeMillis() > expiry) {
            otpStorage.remove(email);
            otpExpiry.remove(email);
            return false;
        }
        boolean isValid = otpStorage.get(email).equals(otp);
        if (isValid) {
            otpStorage.remove(email);
            otpExpiry.remove(email);
        }
        return isValid;
    }

    // Check without removing (for UI feedback)
    public boolean checkOtp(String email, String otp) {
        if (!otpStorage.containsKey(email)) return false;
        long expiry = otpExpiry.getOrDefault(email, 0L);
        if (System.currentTimeMillis() > expiry) return false;
        return otpStorage.get(email).equals(otp);
    }
}
