const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const Port = process.env.Port || 5000;

const productCollection = require("./data/product.json");
app.get("/", (req, res) => {
  res.send("server is running now from get api");
});

app.get("/allProducts", (req, res) => {
  res.send(productCollection);
});

app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  const singleProductById = productCollection.find((p) => p.id == id);
  if (!singleProductById) {
    res.send("no data founds");
  }
  res.send(singleProductById);
});

app.listen(Port, () => {
  console.log("server is running");
});

module.exports = app;