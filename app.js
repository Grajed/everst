//jshint eversion:6

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

//torna o ejs rodável
app.set("view engine", "ejs");
//faz com que possamos usar itens html para programar
app.use(bodyParser.urlencoded({ extended: true }));
//ativa o css 
app.use(express.static("public"));

//############################
// Lógicas e variáveis a mais
//###########################
let projectName = "EVERST"
let memberImage = [];

//############################
// Roteamento
//###########################
app.get("/", function(req, res) {
    res.render("home", {
        projectName: projectName,
        memberImage: memberImage
    });
});

app.get("/team", function(req, res) {
    res.render("team");
});

//Diz que o servidor está funcionando
app.listen(6600, function() {
    console.log("server Online My Lord");
});