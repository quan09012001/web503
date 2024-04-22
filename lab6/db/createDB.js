const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

let sql = "CREATE DATABASE promanagements";

con.query(sql, (err, data) => {
  if (err) throw err;
  console.log("CREATED DB promanagements !!!");
});
