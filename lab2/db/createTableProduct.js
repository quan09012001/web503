const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "promanagements",
});

let sql = `CREATE TABLE products (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    detail varchar(255),
    image varchar(255),
    PRIMARY KEY (id)
)`;

con.query(sql, (err, data) => {
  if (err) throw err;
  console.log("CREATED Table products !!!");
});
