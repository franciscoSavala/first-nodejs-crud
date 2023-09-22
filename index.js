const express = require('express');

const app = express();

const PORT = 3000;

app.get('/health', (req, res) => {
    res.send(`OK!`);
});

app.listen(PROT, ()=>{
    console.log(`Listening on port ${PORT}`);
});