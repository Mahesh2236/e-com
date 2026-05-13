// frontend/js/api.js

// Detect if we are running locally or on a hosted server
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

const LOCAL_URL = 'http://localhost:8080/api';
const API_BASE_URL = LOCAL_URL;

/**
 * Reusable fetch wrapper for QuickMart APIs
 * Automatically adds JWT token to Authorization header if it exists
 */
async function apiRequest(endpoint, method = 'GET', body = null) {
    const token = localStorage.getItem('quickmart_token');
    
    const headers = {
        'Content-Type': 'application/json'
    };
    
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    
    const config = {
        method: method,
        headers: headers
    };
    
    if (body) {
        config.body = JSON.stringify(body);
    }
    
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
        
        // Handle potential large or broken JSON responses
        const text = await response.text();
        
        let data;
        try {
            data = JSON.parse(text);
        } catch (jsonError) {
            console.error('CRITICAL: Broken JSON received from server.');
            console.error('Response Preview (First 500 chars):', text.substring(0, 500));
            console.error('Error Details:', jsonError.message);
            throw new Error('Server sent invalid data. Check console for details.');
        }
        
        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }
        
        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}
