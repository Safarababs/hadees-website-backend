const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// mongoose connection

mongoose
  .connect(
    "mongodb+srv://safar-admin:sn5125a1@mflix.zags8.mongodb.net/hadeesData?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
});

// create an express route that sends an email when a POST request is made
app.get("/", (req, res) => {
  res.send(
    "Welcome to the backend server of your hadees website! may Allah accept your all these efforts you doing for collecting hadees"
  );
});

// routes
app.use("/", require("./routes/hadeesRoute"));

app.listen(3001, () => {
  console.log(`Example app listening on port ${3001}`);
});
