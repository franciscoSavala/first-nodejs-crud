const repository = require('../repository/{prefijo}_repository.js')

exports.getManufacturerById = async (id) => {
	const manufacturer = await repository.fetchById(id);
	//some logic
	return manufacturer;
}