const mysql = require("mysql");

function connect() {
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "promanagements",
  });

  return con;
}

module.exports = connect;
