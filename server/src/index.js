const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const mongoDB = process.env.MONGODB_URI;

const staffRouter = require("./routes/staffRoute");
const prescriptionRouter = require("./routes/prescriptionsRoute");
const departmentRouter = require("./routes/departmentsRoute");
const visitationRouter = require("./routes/visitationsRoute");
const patientRouter = require("./routes/patientsRoute");

app.use(express.json());
app.use(cors());

app.use("/staff", staffRouter);
app.use("/prescription", prescriptionRouter);
app.use("/department", departmentRouter);
app.use("/visitation", visitationRouter);
app.use("/patient", patientRouter);

mongoose.connect(mongoDB).then(() => {
  console.log(`connected to the DB`);
  app.listen(process.env.PORT);
});
