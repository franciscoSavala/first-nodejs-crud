const db = require('../models');
const Product = db.products;
const Op = db.Sequelize.Op;

exports.fetchById = async (id) => {
    const product = await Product.findByPk(id);


    return product.dataValues;
}


exports.createProduct = async (product_req) => {
    const product = await Product.create({
        name: product_req.name,
        description: product_req.description
    });
    return product.dataValues;
}

exports.updateProduct = async (id, product_req) => {
    let product = await Product.findByPk(id);
    if(product){
        if(product_req.name) product.name = product_req.name;
        if(product_req.description) product.description = product_req.description;
        await product.save();
    }else{
        product = await Product.create({
            name: product_req.name,
            description: product_req.description
        });
    }
    return product.dataValues;
}


exports.deleteProduct = async (id) => {
    const product = await Product.findByPk(id);
    if(product){
        await product.destroy();
    }
    return product.dataValues;
}


exports.getAllProductsPaginated = async (limit, page) => {
    const off = page*limit;
    const products = await Product.findAll({ limit: limit, offset: off });
    return products;
}