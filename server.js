const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const routes = require("./src/routes");
const port = process.env.PORT || 3000;

class App {
  constructor() {
    this.initialServer();
    this.initialMiddlewares();
    this.initialDatabase();
  }
  initialMiddlewares() {
    app.get("/", (req, res) => {
      res.json("home");
    });
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(routes);
  }
  initialDatabase() {
    const connectionParams = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
    mongoose
      .connect(
        "mongodb+srv://sir_gray:Nx4xWmAEshg8975@cluster0.sb9hn.mongodb.net/osoul?retryWrites=true&w=majority",
        connectionParams
      )
      .then(() => {
        console.log("Connected to database ");
      })
      .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
      });
  }
  initialServer() {
    app.listen(port, () => {
      console.log(`server is running ${port}`);
    });
  }
}
module.exports = App;
