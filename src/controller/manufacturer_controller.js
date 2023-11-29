const express = require('express');
const service = require('../service/manufacturer_service.js');

const router = express.Router();
router.get('/:id', async (req, res)=>{
	const manufacturer_id = req.params.id;
	const manufacturer = await service.getManufacturerById(manufacturer_id);
	res.json(manufacturer);
});