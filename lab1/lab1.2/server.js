const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const inventors = [
  { id: 1, first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { id: 2, first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { id: 3, first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { id: 4, first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { id: 5, first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { id: 6, first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
];

app.get("/", (req, res) => {
  const css = `
    <style>
      table {
        font-family: Arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      td, th {
        border: 1px solid #dddddd; 
        text-align: left; 
        padding: 8px;
      } 
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }
      a {
        color: blue;
        text-decoration: none;
      }
      a:hover {
        color: red;
      }
    </style>
  `;

  let table = `
    <table>
      <tr>
        <th>ID</th>
        <th>Full Name</th>
      </tr>
  `;
  inventors.forEach((inventor) => {
    table += `
      <tr>
        <td>${inventor.id}</td>
        <td><a href="/inventor/${inventor.id}">${inventor.first} ${inventor.last}</a></td>
      </tr>
    `;
  });
  table += "</table>";

  const createLink = `<br><a href="/create">Tạo mới nhà khoa học</a>`;

  res.send(`
    <html>
      <head>
        ${css}
      </head>
      <body>
        ${table}
        ${createLink}
      </body>
    </html>
  `);
});

app.get("/inventor/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const inventor = inventors.find((inv) => inv.id === id);
  if (inventor) {
    res.send(`
      <html>
        <body>
          <h1>${inventor.first} ${inventor.last}</h1>
          <p>Năm sinh: ${inventor.year}</p>
          <p>Năm qua đời: ${inventor.passed}</p>
        </body>
      </html>
    `);
  } else {
    res.status(404).send("Không tìm thấy nhà khoa học");
  }
});

app.get("/create", (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Tạo mới nhà khoa học</h1>
        <form method="POST" action="/create">
          <label for="first">Tên:</label><br>
          <input type="text" id="first" name="first"><br>
          <label for="last">Họ:</label><br>
          <input type="text" id="last" name="last"><br>
          <label for="year">Năm sinh:</label><br>
          <input type="number" id="year" name="year"><br>
          <label for="passed">Năm qua đời:</label><br>
          <input type="number" id="passed" name="passed"><br><br>
          <button type="submit">Tạo mới</button>
        </form>
      </body>
    </html>
  `);
});

app.post("/create", (req, res) => {
  const { first, last, year, passed } = req.body;

  const newInventor = {
    id: inventors.length + 1,
    first,
    last,
    year: parseInt(year),
    passed: parseInt(passed)
  };

  inventors.push(newInventor);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`App đang chạy trên cổng: ${port}`);
});
