
const repository = require('../repository/product_repository.js')


exports.getProductById = async (id) => {
    const product = await repository.fetchById(id);
    //some logic
    return product; 
}

exports.createProduct = async (product_req) => {
    const product = await repository.createProduct(product_req);
    //some more logic
    return product;
}


exports.updateProduct = async (id, product_req) => {
    const product = await repository.updateProduct(id, product_req);
    //some more logic
    return product;
}

exports.deleteProduct = async (id) => {
    const product = await repository.deleteProduct(id);
    //some more logic
    return product;
}

exports.getAllProductsPaginated = async (limit, page) => {
    const products = await repository.getAllProductsPaginated(parseInt(limit), parseInt(page));
    //some more logic
    return products;
}



