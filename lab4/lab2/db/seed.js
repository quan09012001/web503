const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "promanagements",
});

for (let index = 1; index <= 20; index++) {
  let obj = {
    name: `Product ${index}`,
    detail: `detail Product ${index}`,
    image: "images/download (2).jpeg",
  };
  con.query("insert into products SET ?", obj, (err, data) => {
    if (err) throw err;
    console.log("insert!!!");
  });
}
