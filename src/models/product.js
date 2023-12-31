module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('products', { 
        codigo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.DOUBLE,
            allowNull: false
        }
    });
    return Product;
}
    


