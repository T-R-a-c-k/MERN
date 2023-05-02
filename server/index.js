const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const mongoDB = process.env.MONGODB_URI;
console.log(mongoDB);

app.use(express.json());
app.use(cors());

app.get("/hello", (req, res, next) => {
  res.send("poggers");
});

app.listen(8080);
