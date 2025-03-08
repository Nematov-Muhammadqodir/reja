const express = require("express");
const app = express();
const fs = require("fs");
const mongodb = require("mongodb");

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

app.post("/delete-item", function (req, res) {
  const id = req.body.id;
  console.log(id);
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    (err, data) => {
      if (err) {
        console.log("Fail to delete an element");
      } else {
        res.json({ state: data });
      }
    }
  );
});

app.post("/edit-item", function (req, res) {
  const id = req.body.id;
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(id) },
    { $set: { reja: req.body.item } },
    { returnOriginal: false },
    function (err, updatedDocument) {
      console.log(updatedDocument.value);
      res.json(updatedDocument.value);
    }
  );
});

app.post("/delete-all", function (req, res) {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function (err, data) {
      res.json({ state: "all plans successfully deleted!!!!" });
      console.log(data);
    });
  }
});



module.exports = app;
