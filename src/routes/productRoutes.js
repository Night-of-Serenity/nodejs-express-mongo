const express = require("express");
const productController = require("../controllers/productController");
const validateObjectId = require("../middlewares/validateObjectId");
const { createProductValidator } = require("../validators/productValidator");
const validateResult = require("../middlewares/validateResult");
const router = express.Router();

router.get("/", productController.getAllProducts);

router.post(
  "/",
  createProductValidator,
  validateResult,
  productController.createProduct
);
router.get("/:id", validateObjectId, productController.getProductById);
router.put("/:id", validateObjectId, productController.updateProduct);
router.delete("/:id", validateObjectId, productController.deleteProduct);

module.exports = router;
