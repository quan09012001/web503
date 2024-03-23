const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const productRoutes = require("./routes/products/index");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(methodOverride("_method"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/", productRoutes);

app.listen(3000, () => {
  console.log("server started!!!");
});
