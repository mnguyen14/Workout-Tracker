const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env || 3001;

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(require("./routes/api"));

app.listen(PORT, () => {
    console.log(`localhost:${PORT}`)
});