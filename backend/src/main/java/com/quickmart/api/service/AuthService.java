package com.quickmart.api.service;

import com.quickmart.api.dto.AuthResponse;
import com.quickmart.api.dto.LoginRequest;
import com.quickmart.api.dto.RegisterRequest;
import com.quickmart.api.model.Role;
import com.quickmart.api.model.User;
import com.quickmart.api.repository.UserRepository;
import com.quickmart.api.security.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final EmailService emailService;
    private final OtpService otpService;

    public AuthService(UserRepository repository, 
                       PasswordEncoder passwordEncoder, 
                       JwtService jwtService, 
                       AuthenticationManager authenticationManager,
                       EmailService emailService,
                       OtpService otpService) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
        this.emailService = emailService;
        this.otpService = otpService;
    }

    public void requestOtp(String email) {
        String otp = otpService.generateOtp(email);
        emailService.sendOtpEmail(email, otp);
    }

    public boolean verifyOtpOnly(String email, String otp) {
        return otpService.checkOtp(email, otp);
    }

    public AuthResponse register(RegisterRequest request) {
        // Verify OTP first
        if (!otpService.verifyOtp(request.getEmail(), request.getOtp())) {
            throw new RuntimeException("Invalid or expired OTP");
        }

        if (repository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User user = new User(
                null,
                request.getFullName(),
                request.getEmail(),
                request.getPhone(),
                passwordEncoder.encode(request.getPassword()),
                Role.USER,
                null,
                null,
                null
        );

        repository.save(user);
        String jwtToken = jwtService.generateToken(user);
        return new AuthResponse(
                jwtToken,
                user.getId(),
                user.getFullName(),
                user.getEmail(),
                user.getRole()
        );
    }

    public AuthResponse login(LoginRequest request) {
        // Verify OTP first
        if (!otpService.verifyOtp(request.getEmail(), request.getOtp())) {
            throw new RuntimeException("Invalid or expired OTP");
        }

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        User user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        String jwtToken = jwtService.generateToken(user);
        return new AuthResponse(
                jwtToken,
                user.getId(),
                user.getFullName(),
                user.getEmail(),
                user.getRole()
        );
    }
}
