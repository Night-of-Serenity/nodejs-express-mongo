const express = require("express");
const { body } = require("express-validator");
const productController = require("../controllers/productController");
const validate = require("../middlewares/validate");
const router = express.Router();

router.get("/", productController.getAllProducts);

router.post(
  "/",
  [
    body("name").not().isEmpty().withMessage("Name is required"),
    body("price").isNumeric().withMessage("Price must be a number"),
    body("description").not().isEmpty().withMessage("Description is required"),
  ],
  validate,
  productController.createProduct
);
router.get("/:id", productController.getProductById);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
