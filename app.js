const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function (req, res) {
    res.send("About me");
});

app.get("/blog", function (req, res) {
    res.send("Welcome to my blog");
});

app.get('/ola/:cargo/:nome', function (req, res) {
    res.send("<h1>Ola " + req.params.nome + "</h1>" + "<h2> Seu cargo atualmente de " + req.params.cargo + "</h2>");
});

app.listen(8081, function () {
    console.log("Servidor rodando");
});