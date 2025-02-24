const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", function (err, data) {
  if (err) {
    console.log("ERROR", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1 Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Sessionga bogliq kodlar

// 3 Viewsga doir codlar
app.set("views", "views");
app.set("view engine", "ejs");
//4 Routing code
app.post("/create-item", function (req, res) {
  console.log(req.body);
  res.json({ test: "Test success" });
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log("The server is running successfully on port ", PORT);
});
