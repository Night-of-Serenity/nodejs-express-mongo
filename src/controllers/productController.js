const { query } = require("express");
const productService = require("../services/productService");

exports.getAllProducts = async (req, res) => {
  const products = await productService.getAllProducts();
  res.json(products);
};

exports.createProduct = async (req, res) => {
  const { name, price, description } = req.body;

  const product = await productService.createProduct({
    name,
    price,
    description,
  });
  res.status(201).json(product);
};

exports.getProductById = async (req, res) => {
  const product = await productService.getProductById(req.params.id);

  const a = req.query.varA;
  const b = req.query.varB;
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await productService.updateProduct(req.params.id, req.body);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  const product = await productService.deleteProduct(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json({ message: "Product deleted" });
};
