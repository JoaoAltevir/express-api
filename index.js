const express = require('express');
const app = express();
const port = 5000;

app.get("/geada", (req, res) => {
    res.send("Isfrio");
})

app.listen(port, () => {
    console.log(`Conectado na porta ${port}`);
})