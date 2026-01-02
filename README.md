# Product Inventory Management System (Backend)

## Day 3 Knowledge Transfer (KT) Task  
Naan Mudhalvan – IBM Internship Program

---

## Project Overview

This project is a backend-only Product Inventory Management System developed as part of the Day 3 KT task.  
It implements RESTful CRUD APIs using Node.js and Express.js to manage product inventory data.

---

## Technologies Used

- Node.js
- Express.js
- CORS
- JSON file-based storage
- Postman (for API testing)

---

## Project Structure

```
backend/
│
├── data/
│   └── products.json
│
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## Product Data Model

```json
{
  "id": 1767283439827,
  "productName": "Laptop",
  "category": "Electronics",
  "price": 55000,
  "stock": 20,
  "supplier": "Dell"
}
```

---

## API Endpoints

- **POST** `/api/products` – Create a new product  
- **GET** `/api/products` – Get all products  
- **GET** `/api/products/{id}` – Get product by ID  
- **PUT** `/api/products/{id}` – Update a product  
- **DELETE** `/api/products/{id}` – Delete a product  

---

## How to Run the Project

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npx nodemon server.js
   ```

3. Server runs at:
   ```
   http://localhost:5001
   ```

---

## API Testing

All API endpoints were tested using Postman with appropriate HTTP methods and JSON request bodies.
