const productService = require('../services/productService');

// Controlador para manejar la solicitud GET
exports.getProducts = (req, res) => {
    const products = productService.getProducts();
    res.json(products);
};
