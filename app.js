const express = require('express');
const app = express();
const productController = require('./controllers/productController');

app.use(express.json());

// Definir la ruta para obtener productos
app.get('/products', productController.getProducts);

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
