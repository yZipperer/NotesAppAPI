const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const dotenv = require("dotenv");

const notesRoutes = require("./routes/notes");

const app = express();
app.use(express.json());
dotenv.config();

mongoose.connect(process.env.MURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Database Connected"))
.catch((error) => console.log(error.message));

app.use("/", notesRoutes);

app.listen(8080, () => {
    console.log("Server Started: Port 8080");
});