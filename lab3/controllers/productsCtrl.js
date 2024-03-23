const connect = require("../db/connect");
const con = connect();
const Product = require("../models/product");

const LIMIT = 3;

class ProductsCtrl {
  static async index(req, res) {
    let q = req.query.q ? req.query.q : "";
    let page = req.query.page ? req.query.page : 1;
    let offset = (page - 1) * LIMIT;
    let getCount = await Product.getCount();
    let count = getCount[0].count;
    let totalPage = Math.ceil(count / LIMIT);
    let products = await Product.getAllData(q, LIMIT, offset);
    res.render("products/index", { products, q, totalPage, page });
  }

  static new(req, res) {
    res.render("products/new");
  }

  static create(req, res) {
    let { name, detail } = req.body;
    let image = "images/" + req.file.filename;
    let obj = {
      name,
      detail,
      image,
    };
    con.query("insert into products SET ?", obj, (err, data) => {
      if (err) throw err;
      res.redirect("/");
    });
  }
  static delete(req, res) {
    let id = req.body.id;
    con.query("DELETE FROM products WHERE id=?", [id], (err, data) => {
      if (err) throw err;
      res.redirect("/");
    });
  }
  static edit(req, res) {
    let id = req.params.id;
    con.query("SELECT * FROM products WHERE id = ?", [id], (err, data) => {
      if (err) throw err;
      res.render("products/edit", { product: data });
    });
  }
  static update(req, res) {
    let { name, detail, id } = req.body;
    let image = "images/" + req.file.filename;
    // console.log(req.body);
    con.query(
      "UPDATE products SET name=?, detail=?, image=? WHERE id = ?",
      [name, detail, image, id],
      (err, data) => {
        if (err) throw err;
        res.redirect("/");
      }
    );
  }
}

module.exports = ProductsCtrl;
