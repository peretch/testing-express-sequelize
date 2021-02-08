const { Product } = require('../models');

const getProducts = async (req, res) => {
  const filters = req.body;
  try {
    const products = await Product.findAll(filters).map((product) => {
      product.shouldRestock = product.stock < product.minStock;
      return product;
    });
    return res
      .json({
        status: 'success',
        data: products,
      })
      .status(200);
  } catch (error) {
    return res
      .json({
        status: 'error',
        error: error.message,
      })
      .status(400);
  }
};

exports.getProducts = getProducts;
