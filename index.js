const express = require('express');
const product_controller = require('./src/controller/products_controller.js');

const app = express();

app.use(express.json());


const PORT = 3000;

const db = require('./src/models');

(async () => {
    try{
        await db.sequelize.sync();
        console.log("Synced db.");
    }
    catch{
        console.log("Failed to sync.");
    }
})();


app.get('/health', (req, res) => {
    res.send(`OK!`);
});

app.use('/products', product_controller);

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});
