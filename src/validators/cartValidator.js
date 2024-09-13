const { body } = require("express-validator");

const addItemToCartValidator = [
  body("productId").notEmpty().withMessage("Product ID is required"),
  body("quantity").isNumeric().withMessage("Quantity must be a number"),
];

const updateCartItemValidator = [
  body("productId").notEmpty().withMessage("Product ID is required"),
  body("quantity").isNumeric().withMessage("Quantity must be a number"),
];

const removeItemFromCartValidator = [
  body("productId").notEmpty().withMessage("Product ID is required"),
];

module.exports = {
  addItemToCartValidator,
  updateCartItemValidator,
  removeItemFromCartValidator,
};
