// Lista simulada de productos (base de datos)
const products = [
    { name: 'Phone', price: 800 },
    { name: 'Table', price: 200 }
];

exports.getProducts = () => {
    return products;
};
