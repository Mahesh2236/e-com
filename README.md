QuickMart is a premium, full-stack e-commerce application designed with a robust Spring Boot backend and a high-performance, modular frontend. The platform provides a seamless shopping experience with real-time cart management, secure checkout, and comprehensive order history tracking.

---

## 🛠️ Technology Stack

### **Backend (Core Engine)**
- **Framework:** Spring Boot 3.1.5
- **Security:** Spring Security with JWT (JSON Web Tokens) for stateless authentication.
- **Data Access:** Spring Data JPA with Hibernate.
- **Database:** 
  - **Local:** H2 In-Memory (Zero configuration required).
  - **Production:** PostgreSQL (Hosted on Render).
- **Communication:** RESTful API with structured JSON/DTO responses.

### **Frontend (Visual Interface)**
- **Structure:** Semantic HTML5.
- **Styling:** CSS3 with a custom Glassmorphism design system and Bootstrap 5 for responsiveness.
- **Logic:** Vanilla JavaScript (ES6+) for modularity and speed.
- **Components:** Modular loading system for Navbar, Footer, and UI elements.

---

## 📁 Project Structure

```text
QuickMart/
├── backend/                # Spring Boot Application
│   ├── src/main/java/      # Java Source Code
│   │   └── com/quickmart/
│   │       ├── controller/ # REST API Endpoints
│   │       ├── dto/        # Data Transfer Objects (Secure JSON)
│   │       ├── model/      # JPA Entities (Database Tables)
│   │       ├── repository/ # Database Queries
│   │       └── service/    # Business Logic
│   └── src/main/resources/ # Configuration & App Properties
├── frontend/               # Web Interface
│   ├── css/                # Custom Stylesheets
│   ├── js/                 # API Wrappers & Page Logic
│   ├── pages/              # Specific views (Login, Orders, etc.)
│   └── index.html          # Root Homepage
└── README.md               # Project Documentation
```

---

## 📡 API Endpoints Summary

| Endpoint | Method | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `/api/auth/register` | POST | Create a new user account | No |
| `/api/auth/login` | POST | Authenticate and receive JWT token | No |
| `/api/products` | GET | Fetch all available products | No |
| `/api/products/{id}` | GET | Get detailed product info | No |
| `/api/orders` | POST | Place a new order | Yes |
| `/api/orders/user` | GET | Retrieve user's order history | Yes |

---

## 🛡️ Technical Highlights: DTO Serialization Fix

One of the most critical architectural improvements in this project was the implementation of the **DTO (Data Transfer Object) Pattern** for the Orders API.

- **The Problem:** Returning JPA entities directly caused infinite recursion and "Broken JSON" due to bidirectional relationships between Users, Orders, and Products.
- **The Solution:** Created a flat `OrderResponseDTO` that precisely defines the data sent to the frontend. This ensures:
    - No circular reference crashes.
    - Zero exposure of sensitive fields (like user passwords or roles).
    - Significantly smaller payload sizes and faster page loads.

---

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### 📋 Prerequisites

- **Java 17** or higher
- **Maven 3.9+** (or use the provided `./mvnw` wrapper)
- **Node.js** (optional, for hosting the frontend via a simple server)
- **VS Code** (recommended with "Live Server" extension)

---

## ⚙️ Backend Setup (Spring Boot)

The backend is located in the `backend/` directory.

1. **Navigate to the backend folder:**
   ```bash
   cd backend
   ```

2. **Run the application:**
   Using the Maven wrapper:
   ```bash
   ./mvnw spring-boot:run
   ```
   *The server will start on `http://localhost:8080`.*

3. **Database Configuration:**
   - **Local Development:** By default, the app uses an **H2 In-Memory Database**. Data is seeded automatically on startup.
   - **H2 Console:** Accessible at `http://localhost:8080/h2-console` (JDBC URL: `jdbc:h2:mem:quickmart`, User: `sa`, Password: `password`).
   - **Production (Render):** Configured to connect to PostgreSQL via environment variables.

---

## 💻 Frontend Setup (HTML/JS)

The frontend is located in the `frontend/` directory.

1. **Open the project:**
   Open the `frontend` folder in VS Code.

2. **Run with Live Server:**
   - Right-click on `index.html`.
   - Select **"Open with Live Server"**.
   - The app will usually open on `http://127.0.0.1:5500`.

3. **API Configuration:**
   - The frontend connects to the backend at `http://localhost:8080/api`.
   - Ensure the backend is running before performing actions like Login, Register, or Placing Orders.

---

## 🛠️ Key Features

- **Auth System:** JWT-based authentication with Login and Registration.
- **Product Catalog:** Dynamic product loading with category filtering.
- **Shopping Cart:** Persistent local storage cart with real-time updates.
- **Order Management:** Flattened DTO response system for stable order history.
- **Tracking:** Visual order status tracking (Pending -> Packed -> Shipped -> Delivered).

---

## 📦 Deployment (Render)

The project includes a `Dockerfile` for multi-stage builds.

1. **Backend:** Deploy to Render using the `Dockerfile` in the `backend/` directory.
2. **Environment Variables:**
   - `SPRING_DATASOURCE_URL`: Your PostgreSQL JDBC URL.
   - `SPRING_DATASOURCE_USERNAME`: Database username.
   - `SPRING_DATASOURCE_PASSWORD`: Database password.
   - `JWT_SECRET`: A secure random string for signing tokens.

---

## 🐞 Troubleshooting

- **403 Forbidden:** If you see this after a server restart, logout and re-register. The session token might be invalid for the fresh in-memory database.
- **Broken JSON:** Ensure you are using the latest `OrderResponseDTO` structure implemented in the `OrderController`.
- **Port Conflict:** If port 8080 is in use, terminate the process:
  ```powershell
  # Windows
  netstat -ano | findstr :8080
  taskkill /F /PID <PID>
  ```

---

© 2026 QuickMart Team. 
