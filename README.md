# Node.js MongoDB CRUD Product API

## Project Structure

```plaintext
nodejs-mongo-crud/
   ├── config/
   │   └── db.js               # MongoDB connection setup
   ├── src/
   │   ├── controllers/
   │   │   └── productController.js  # Controller for handling product CRUD logic
   │   ├── middlewares/
   │   │   ├── validate.js          # Middleware for validating incoming requests
   │   │   ├── errorHandler.js      # Centralized error handler middleware
   │   │   ├── notFound.js          # Middleware for handling 404 Not Found errors
   │   │   └── validateObjectId.js  # Middleware for validating MongoDB ObjectId
   │   ├── models/
   │   │   └── productModel.js  # Mongoose schema and model for Product
   │   ├── routes/
   │   │   └── productRoutes.js  # Product routes definition
   │   ├── services/
   │   │   └── productService.js  # Service layer for handling business logic
   │   └── validators/
   │       └── productValidator.js # Validators for product creation and updates
   ├── .env                     # Environment variables
   ├── docker-compose.yml        # Docker Compose for MongoDB setup
   ├── package.json              # Project dependencies and scripts
   ├── README.md                 # Project documentation
   ├── app.js                    # Express app setup
   └── server.js                 # Server startup
```

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
npm install express mongoose dotenv helmet cors express-validator
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
