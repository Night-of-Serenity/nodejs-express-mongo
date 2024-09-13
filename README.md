# Node.js MongoDB CRUD Product API

## Project Structure

```plaintext
   nodejs-mongo-crud/
   ├── config/
   │   └── db.js                 # MongoDB connection setup
   ├── src/
   │   ├── controllers/
   │   │   ├── cartController.js  # Controller for handling cart logic
   │   │   └── productController.js # Controller for handling product logic
   │   ├── middlewares/
   │   │   ├── errorHandler.js    # Centralized error handler middleware
   │   │   ├── notFound.js        # Middleware for handling 404 Not Found errors
   │   │   └── validateResult.js  # Middleware for validating incoming requests
   │   ├── models/
   │   │   ├── cartModel.js       # Mongoose schema and model for Cart
   │   │   └── productModel.js    # Mongoose schema and model for Product
   │   ├── routes/
   │   │   ├── cartRoutes.js      # Cart routes definition
   │   │   └── productRoutes.js   # Product routes definition
   │   ├── services/
   │   │   ├── cartService.js     # Service layer for handling cart-related business logic
   │   │   └── productService.js  # Service layer for handling product-related business logic
   │   └── validators/
   │       ├── cartValidator.js   # Validators for cart operations (add, update, remove item)
   │       └── productValidator.js # Validators for product operations
   ├── .env                       # Environment variables
   ├── docker-compose.yml          # Docker Compose for MongoDB setup
   ├── nodejs_example.postman_collection.json # Postman api collection
   ├── package.json                # Project dependencies and scripts
   ├── README.md                   # Project documentation
   ├── app.js                      # Express app setup
   └── server.js                   # Server startup
```

## ERD

![Diagram](ERD/ERD.png)

## Project Setup

1. Create .env file

```bash
PORT=3000
MONGO_URI=mongodb://root:example@localhost:27017/productdb?authSource=admin
```

2. Start Database

```bash
docker compose up -d
```

3. Init project

```bash
npm init -y
```

4. Install dependency

```bash
npm install express mongoose dotenv helmet cors express-validator morgan
```

5. Development dependencies:

```bash
npm install --save-dev nodemon
```

6. Start Project

```bash
npm run dev
```

or

```bash
npm start
```

```

```
