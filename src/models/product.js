module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('products', { 
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING
        }
    });
    
    return Product;
}
    


