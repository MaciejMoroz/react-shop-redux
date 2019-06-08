const express = require("express"),
  app = express();

const products = require("./products.json");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "access-token");

  next();
});

function setProducts(request, response, next) {
  next();
}

app.get("/", setProducts, (request, response) => {
  response.send(products);
});

app.listen(3001, () => console.log("Express server started at port 3001"));
