const productFactory = require('../models/productFactory');
const discountStrategy = require('../strategies/discountStrategy');
const productData = require('../data/productData');
const externalServiceAdapter = require('../adapters/externalServiceAdapter');

// Servicio para obtener productos
exports.getProducts = () => {
    // Crear productos usando el patrón Factory (creacional)
    const product1 = productFactory.createProduct('Electronics', 'Laptop', 1500);
    const product2 = productFactory.createProduct('Furniture', 'Chair', 100);

    // Usar el patrón Strategy (comportamiento) para aplicar un descuento
    const discountedProduct1 = discountStrategy.applyDiscount(product1, 'percentage');
    const discountedProduct2 = discountStrategy.applyDiscount(product2, 'fixed');

    // Simular la integración de un servicio externo usando el patrón Adapter (estructural)
    const externalData = externalServiceAdapter.getExternalData();

    return [discountedProduct1, discountedProduct2, ...productData.getProducts(), externalData];
};
