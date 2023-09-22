const express = require('express');
const service = require('../service/product_service.js');

//cuando se usa router, se crea una mini-app, 
//supongo que la app global extiende router, entonces puede usar sus métodos
const router = express.Router();

//el método use es un middleware pero no hace referencia a un método http concreto.
//router.use((req,res,next) => {});
//este método responde a cualquier solicitud http 🤮. Igual sirve por ejemplo si
//se quiere llamar a la mini-app omg.

router.get('/:id', (req, res)=>{
    const product_id = req.params.id;
    const product = service.getProductById(product_id);
    res.status(300).send(product)
})

