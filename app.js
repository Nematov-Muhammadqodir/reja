const express = require("express");
const app = express();
const fs = require("fs");

//MongoDB call
const db = require("./server").db();

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
  console.log("user entered /create-item ");

  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0]);
  });
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  console.log("user entered / ");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("Something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
