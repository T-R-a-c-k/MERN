const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const mongoDB = process.env.MONGODB_URI;

const loginRouter = require("./routes/log_in");
const prescriptionRouter = require("./routes/prescriptionsRoute");

app.use(express.json());
app.use(cors());

app.use("/sign_up", loginRouter);
app.use("/prescription", prescriptionRouter);

mongoose.connect(mongoDB).then(() => {
  console.log(`connected to the DB`);
  app.listen(process.env.PORT);
});
