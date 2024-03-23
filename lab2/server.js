//khai báo sử dụng multer
const express = require("express");
var bodyParser = require("body-parser");
var app = express();
const port = 3000;
app.use(bodyParser.urlencoded());
//khai bao sử dụng template ejs
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
//router
app.get("/", (req, res) => {
  var today = new Date();
  currentDay = today.getDay();
  var day = "";
  switch (currentDay) {
    case 0:
      day = "Chủ nhật";
      break;
    case 1:
      day = "Thứ hai";
      break;
    case 2:
      day = "Thứ ba";
      break;
    case 3:
      day = "Thứ tư";
      break;
    case 4:
      day = "Thứ năm";
      break;
    case 5:
      day = "Thứ sáu";
      break;
    case 6:
      day = "Thứ bảy";
      break;
    default:
      console.log(`Error: ${currentDay}`);
  }
  res.render("home", { kindOfDay: day });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  