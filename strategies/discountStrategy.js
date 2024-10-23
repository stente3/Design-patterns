// Estrategia de descuento basado en porcentaje
const percentageDiscount = (product) => {
    product.price = product.price * 0.9;
    return product;
};

// Estrategia de descuento fijo
const fixedDiscount = (product) => {
    product.price = product.price - 10;
    return product;
};

// Patrón Strategy para aplicar diferentes tipos de descuentos
exports.applyDiscount = (product, strategy) => {
    if (strategy === 'percentage') {
        return percentageDiscount(product);
    } else if (strategy === 'fixed') {
        return fixedDiscount(product);
    }
    return product;
};
