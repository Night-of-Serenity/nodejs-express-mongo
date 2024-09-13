const cartService = require("../services/cartService");

exports.getCart = async (req, res, next) => {
  try {
    const cart = await cartService.getCartByUserId(req.params.userId);
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.json(cart);
  } catch (err) {
    next(err);
  }
};

exports.addItemToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const cart = await cartService.addItemToCart(
      req.params.userId,
      productId,
      quantity
    );
    res.status(201).json(cart);
  } catch (err) {
    next(err);
  }
};

exports.updateCartItem = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const cart = await cartService.updateCartItem(
      req.params.userId,
      productId,
      quantity
    );
    res.json(cart);
  } catch (err) {
    next(err);
  }
};

exports.removeItemFromCart = async (req, res, next) => {
  try {
    const { productId } = req.body;
    const cart = await cartService.removeItemFromCart(
      req.params.userId,
      productId
    );
    res.json(cart);
  } catch (err) {
    next(err);
  }
};

exports.clearCart = async (req, res, next) => {
  try {
    const cart = await cartService.clearCart(req.params.userId);
    res.json(cart);
  } catch (err) {
    next(err);
  }
};
