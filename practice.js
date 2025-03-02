const http = require("http");
const mongodb = require("mongodb");

const connectionString =
  "mongodb+srv://Kevin:<db_password>@cluster0.kifry.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0≈";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log(err);
    else {
      const app = require("app");
      module.exports = client;
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, "Server is running on port ");
    }
  }
);
