const Cart = require("../models/cartModel");
const Product = require("../models/producuModel");

// Get Cart by user ID
exports.getCartByUserId = async (userId) => {
  return await Cart.findOne({ userId }).populate("items.productId");
};

// Add item to cart
exports.addItemToCart = async (userId, productId, quantity) => {
  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = new Cart({ userId, items: [], totalPrice: 0 });
  }

  const product = await Product.findById(productId);
  if (!product) throw new Error("Product not found");

  const cartItem = cart.items.find(
    (item) => item.productId.toString() === productId
  );

  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }

  cart.totalPrice = cart.items.reduce(
    (total, item) => total + item.quantity * product.price,
    0
  );

  return await cart.save();
};

// Update item quantity in cart
exports.updateCartItem = async (userId, productId, quantity) => {
  const cart = await Cart.findOne({ userId });
  if (!cart) throw new Error("Cart not found");

  const cartItem = cart.items.find(
    (item) => item.productId.toString() === productId
  );
  if (!cartItem) throw new Error("Item not found in cart");

  cartItem.quantity = quantity;
  cart.totalPrice = +cart.items.reduce(
    (total, item) => total + item.quantity * item.productId.price,
    0
  );

  console.log("totalPrice", cart.totalPrice);
  return await cart.save();
};

// Remove item from cart
exports.removeItemFromCart = async (userId, productId) => {
  const cart = await Cart.findOne({ userId });
  if (!cart) throw new Error("Cart not found");

  cart.items = cart.items.filter(
    (item) => item.productId.toString() !== productId
  );
  cart.totalPrice = cart.items.reduce(
    (total, item) => total + item.quantity * item.productId.price,
    0
  );

  return await cart.save();
};

// Clear cart
exports.clearCart = async (userId) => {
  const cart = await Cart.findOne({ userId });
  if (!cart) throw new Error("Cart not found");

  cart.items = [];
  cart.totalPrice = 0;
  console.log("totalPrice", cart.totalPrice);
  return await cart.save();
};
