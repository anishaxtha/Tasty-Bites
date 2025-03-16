# 🍔 MERN Food Delivery App

A full-featured food delivery application built with the MERN stack (MongoDB, Express, React, Node.js) with complete user authentication, Stripe payment integration, and an admin dashboard.

## ✨ Features

- **User Authentication**

  - Sign up/login with email
  - Password recovery
  - JWT authentication
  - Protected routes

- **Customer Features**

  - Browse restaurants and menus
  - Search functionality
  - Add items to cart
  - Place orders
  - Track order status
  - View order history
  - Save favorite restaurants

- **Payment Processing**

  - Secure checkout with Stripe
  - Multiple payment methods
  - Order confirmation

- **Admin Dashboard**
  - Food add management
  - List of All food Items
  - Order management

## 🛠️ Technologies Used

- **Frontend**

  - React.js
  - Redux for state management
  - React Router for navigation
  - Pure CSS
  - Axios for API requests

- **Backend**

  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - JWT for authentication
  - Bcrypt for password hashing

- **Payment**

  - Stripe API integration

- **Deployment**
  - Docker
  - Heroku/AWS/DigitalOcean (select your platform)

## 📋 Prerequisites

- Node.js (v14+)
- MongoDB
- Stripe account for payment processing
- npm or yarn

## 🚀 Installation & Setup

1. **Clone the repository**

   ```
   git clone https://github.com/anishaxtha/Tasty-Bites.git
   cd FoodDelivery
   ```

2. **Install dependencies**

   ```
   # Install backend dependencies
   npm install

   # Install frontend dependencies
   cd client
   npm install
   ```

3. **Environment Variables**

   Create a `.env` file in the root directory and add:

   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Run the application**

   ```
   # Run backend and frontend concurrently
   npm run dev
   npm start

   # Or run separately
   npm run server
   npm run client
   ```

5. **Access the application**
   - Frontend: `http://localhost:5174`
   - Backend API: `http://localhost:4000`
   - Admin Dashboard: `http://localhost:5173`

## 📄 API Documentation

### Authentication Endpoints

- POST `/api/user/register` - Register new user
- POST `/api/user/login` - Login user

### Food Items Endpoints

- POST `/api/food/add` - Upload the Food Items
- GET `/api/food/list` - Get list of Food Items
- DELETE `/api/food/remove` - Remove the food items

### Order Endpoints

- POST `/api/order/place` - For placing the order
- POST `/api/order/verify` - verify the order
- POST `/api/order/userorders` - check the userorders
- GET `/api/order/list` - list out the number of orders
- POST `/api/order/status` - check and track the status of orders

### Cart Endpoints

- POST `/api/cart/add` - Add to cart
- POST `/api/cart/remove`- Remove from cart
- POST `/api/cart/get` - get cart items list

### Payment Endpoints

- POST `/api/order/` - Create Stripe payment intent

## 🔒 Environment Variables

The following environment variables are required:

```
MONGO_URI - MongoDB connection string
JWT_SECRET - Secret for JWT signing
STRIPE_SECRET_KEY - Stripe API secret key
FRONTEND_URL - URL for the frontend (for CORS)
NODE_ENV - production/development
```

## 📱 Screenshots

 <img src='/img2.png'>
 <img src='/img3.png'>
 <img src='/img1.png>

## 📝 License

This project is licensed under the MIT License

## 📞 Contact

Anisha Nayaju - [anishanayaju26@gmail.com](mailto:anishanayaju26@gmail.com)

Project Link: [https://github.com/anishaxtha/Tasty-Bites](https://github.com/anishaxtha/Tasty-Bites)
