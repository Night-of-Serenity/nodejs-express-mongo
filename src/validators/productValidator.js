const { body } = require("express-validator");

const createProductValidator = [
  body("name").not().isEmpty().withMessage("Name is required"),
  body("price").isNumeric().withMessage("Price must be a number"),
  body("description").not().isEmpty().withMessage("Description is required"),
];

module.exports = {
  createProductValidator,
};
