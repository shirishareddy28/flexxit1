require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const MyList = require("../frontend/src/features/MyList");
const PORT = process.env.PORT || 6000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_STRING);


app.get("/api/MyList", async (req, res) => {
  const allHome = await home.find({});
  res.send(MyList);
});


// teamMember.save().then(() => console.log("Added!"));

app.listen(PORT, () => {
  console.log("Server running on Port 3000");
});