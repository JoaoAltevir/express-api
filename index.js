const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.get("/:usuario/:repositorio", (req, res) => {
    console.log("Antes do ?:", req.params.usuario, req.params.repositorio)
    console.log("Depois do ?: ", req.query.id, req.query.idade)
    console.log("Corpo da requisição:", req.body)
    res.send("Isfrio");
})

app.listen(port, () => {
    console.log(`Conectado na porta ${port}`);
})