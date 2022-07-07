const express = require("express");
const connect = require("./Src/Configs/db.js");

const app = express();
app.use(express.json());

let port =  8080;
// const mongoose = require("mongoose");
const itemMasterApi = require("./Src/Controllers/itemMasterController");
const userCartApi = require("./Src/Controllers/userCartController");



app.use("/itemMaster", itemMasterApi);
app.use("/userCart", userCartApi);

app.listen(port, async (req, res) => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 8080");
});
