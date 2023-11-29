const db = require('../models');
const Manufacturer = db.products;
const Op = db.Sequelize.Op;

exports.fetchById = async (id) => {
	const manufacturer = await Manufacturer.findByPk(id);
	return manufacturer.dataValues;
}