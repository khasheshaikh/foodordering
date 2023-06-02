const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
mongoose
  .connect(
    "mongodb+srv://khasheshaikh:hmAaNlanApTyV8Ae@cluster0.zwndewh.mongodb.net/"
  )
  //khasheshaikh
  //hmAaNlanApTyV8Ae
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Database connection error");
  });

app.listen(4000);