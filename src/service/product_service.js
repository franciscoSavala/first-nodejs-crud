
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





