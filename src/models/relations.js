module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.models.products;
    const Manufacturer = sequelize.models.manufacturers;
    Manufacturer.hasMany(Product, {foreignKey: 'manufacturer_id'});
    Product.belongsTo(sequelize.models.manufacturers);

}
    


