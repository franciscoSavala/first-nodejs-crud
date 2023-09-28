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
    return product;
}