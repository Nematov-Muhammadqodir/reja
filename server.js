const express = require("express");

const app = express();

const http = require("http");

// 1 Kirish kodlari
app.use(express.static("public")); //HTML,CSS and all other public files(images) will be accessible for public
app.use(express.json()); // When we send Post or Put requests Express has to parse json into object, because Express does not understand json format
app.use(express.urlencoded({ extended: true })); // When we request via traditional forms we have to use urlencoded, whithout it our data will become undefined

// 2 Sessionga bogliq kodlar

// 3 Viewsga doir codlar
app.set("views", "views"); //Tells Express where to find the template files (views)===>"views" is the folder that contains EJS template files (e.g., index.ejs).
app.set("view engine", "ejs"); //Tells Express to use EJS as the template engine.

//4 Routing code
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from server side..." });
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log("The server is running successfully on port ", PORT);
});
