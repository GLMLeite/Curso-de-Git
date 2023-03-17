const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "Ola Mundo" });
});
app.get("/ola", (req, res) => {
  res.status(200).send({ message: "oi sou a rota ola" });
});
app.listen(3001, () => {
  console.log("api rodando na porta 3001");
});
