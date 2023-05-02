const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const mongoDB = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors());

app.get("/hello", (req, res, next) => {
  res.send("poggers");
});

mongoose.connect(mongoDB).then(() => {
  console.log(`connected to the DB`);
  app.listen(8080);
});
