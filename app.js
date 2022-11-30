const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

mongoose.connect(process.env.MURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Database Connected"))
.catch((error) => console.log(error.message));

app.get("/notes", (req, res) => {
    fs.readFile("./testData/notes.json", "utf-8", (err, data) => {
        (err) ? console.log(err) : res.send(data);
    });
});

app.listen(8080, () => {
    console.log("Server Started: Port 8080");
});