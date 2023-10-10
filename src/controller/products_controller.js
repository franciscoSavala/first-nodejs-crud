const express = require('express');
const service = require('../service/product_service.js');
const { ValidationError } = require('sequelize');

//cuando se usa router, se crea una mini-app, 
//supongo que la app global extiende router, entonces puede usar sus métodos
const router = express.Router();

//el método use es un middleware pero no hace referencia a un método http concreto.
//router.use((req,res,next) => {});
//este método responde a cualquier solicitud http 🤮. Igual sirve por ejemplo si
//se quiere llamar a la mini-app omg.


router.get('/:id', async (req, res)=>{
    const product_id = req.params.id;
    const product = await service.getProductById(product_id);
    
    res.json(product);
});

//get all
router.get('/', async (req, res) => {
    const { limit, page } = req.query;
    try{
        const products = await service.getAllProductsPaginated(limit, page);
        res.status(200).json(products);
    }catch(err){
        res.status(400).json({"message": "Ocurrio un error al intentar obtener los productos"});
    }
});

router.post('/', async (req, res) => {
    const product_req = req.body;
    try{
        const product = await service.createProduct(product_req);
        res.status(200).json(product);
    }catch(err){
        let message = "un error ocurrió intentando guardar el producto";
        if(err instanceof ValidationError){
            message = "";
            err.errors.forEach((x) => message += x.message + "\n");
        }
        console.log(err);
        res.status(400).json({"message": message});
    }
});

router.put('/:id', async (req, res) => {
    const product_id = req.params.id;
    try{
        const product = await service.updateProduct(product_id, req.body);
        res.status(200).json(product);
    }catch(err){
        res.status(400).json({"message": "Ocurrio un error al intentar actualizar el producto"});
    }

});


router.delete('/:id', async (req, res) => {
    const product_id = req.params.id;
    try{
        const product = await service.deleteProduct(product_id);
        res.status(200).json(product);
    }catch(err){
        res.status(400).json({"message": "Ocurrio un error al intentar eliminar el producto"});
    }
});


module.exports = router;

