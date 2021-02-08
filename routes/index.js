const productsController = require('../controllers/products');

module.exports = (app) => {
  app.get('/products', productsController.getProducts);
};
