
module.exports = (sequelize, Sequelize) => {
    const Manufacturer = sequelize.define('manufacturers', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    Manufacturer.hasMany(sequelize.models.products, {foreignKey: 'manufacturer_id'});

    return Manufacturer;
    
}
