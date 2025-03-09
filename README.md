# Product-Inventory-API

Description

This is a RESTful API for managing a product inventory. It includes user authentication (registration & login), and CRUD operations for products. The API is built using Node.js, Express, and MongoDB.

Features

User Registration & Login with JWT authentication

Create, Read, Update, and Delete (CRUD) operations for products

Pagination and sorting for product listing

Protected routes for product management

MongoDB integration using Mongoose

Installation

Prerequisites

Node.js installed

MongoDB installed and running locally or a cloud database (e.g., MongoDB Atlas)

Steps

Clone the repository:

git clone https://github.com/your-repo/product-inventory-api.git
cd product-inventory-api

Install dependencies:

npm install

Create a .env file in the root directory and add the following:

PORT=5000
MONGO_URI=mongodb://localhost:27017/product_inventory_api
JWT_SECRET=your_secret_key

Start the server:

npm start

Or use nodemon for development:

npm run dev

API Endpoints

Authentication

Method

Endpoint

Description

POST

/api/register

Register a new user

POST

/api/login

Login and get a JWT token

Products

Method

Endpoint

Description

POST

/api/products

Create a new product (protected)

GET

/api/products

Get all products with pagination & sorting

GET

/api/products/:id

Get a product by ID

PUT

/api/products/:id

Update a product by ID (protected)

DELETE

/api/products/:id

Delete a product by ID (protected)

Usage

Use Postman or any API client to test the endpoints.

For protected routes, include the Authorization header with the JWT token received during login.

Technologies Used

Node.js

Express.js

MongoDB & Mongoose

JSON Web Token (JWT)

bcrypt.js

License

This project is licensed under the MIT License.

