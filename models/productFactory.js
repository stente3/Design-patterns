// Patrón Factory para crear diferentes tipos de productos
class Product {
    constructor(type, name, price) {
        this.type = type;
        this.name = name;
        this.price = price;
    }
}

exports.createProduct = (type, name, price) => {
    // Crear un nuevo producto dependiendo del tipo
    return new Product(type, name, price);
};
