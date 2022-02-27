const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Bem vindo");
});

app.get("/blog", function (req, res) {
  res.send("Bem vindo ao meu blog  ......");
});

app.listen(4000, function (error) {
  if (error) {
    console.log("Ocorreu um error");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
