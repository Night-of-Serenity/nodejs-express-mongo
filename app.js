const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");
const productRoutes = require("./src/routes/productRoutes");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");
const notFound = require("./src/middlewares/notFound");
const errorHandler = require("./src/middlewares/errorHandler");

dotenv.config();

// Initialize the Express app
const app = express();

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after 15 minutes",
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(limiter); // Apply rate limiter to all requests

// Connect to MongoDB
connectDB(); // Call the MongoDB connection function

// Routes
app.use("/api/products", productRoutes);

// Not found middleware (should be after all valid routes)
app.use(notFound);

// Error handler middleware (should be at the end of all middleware)
app.use(errorHandler);

// Export the app
module.exports = app;
