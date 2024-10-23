// Simulación de un servicio externo
const externalService = {
    fetchData: () => {
        return { name: 'External Product', price: 500 };
    }
};

// Adaptador para conectar nuestro sistema con el servicio externo
exports.getExternalData = () => {
    // Usamos el método del servicio externo a través del adaptador
    return externalService.fetchData();
};
