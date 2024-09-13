const express = require("express");
const cartController = require("../controllers/cartController");
const validateResult = require("../middlewares/validateResult");
const {
  addItemToCartValidator,
  updateCartItemValidator,
  removeItemFromCartValidator,
} = require("../validators/cartValidator");

const router = express.Router();

// Get cart by userId
router.get("/:userId", cartController.getCart);

// Add item to cart with validation
router.post(
  "/:userId",
  addItemToCartValidator,
  validateResult,
  cartController.addItemToCart
);

// Update item in cart with validation
router.put(
  "/:userId",
  updateCartItemValidator,
  validateResult,
  cartController.updateCartItem
);

// Remove item from cart with validation
router.delete(
  "/:userId",
  removeItemFromCartValidator,
  validateResult,
  cartController.removeItemFromCart
);

// Clear the cart
router.delete("/:userId/clear", cartController.clearCart);

module.exports = router;
