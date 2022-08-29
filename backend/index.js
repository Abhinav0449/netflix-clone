const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use("/backend/auth", authRoute);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlparser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.log(err));

app.listen(7070, () => {
  console.log("Backend server is running");
});


