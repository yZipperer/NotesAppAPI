const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");

const app = express();

app.get("/notes", (req, res) => {
    fs.readFile("./testData/notes.json", "utf-8", (err, data) => {
        (err) ? console.log(err) : res.send(data);
    });
});

app.listen(8080, () => {
    console.log("Server Started: Port 8080");
});