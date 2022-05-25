const express = require("express");
const app = express.Router();
const path = require("path");
const Multer = require("multer");

// we configure our own multer instance with some options
const storage = Multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../images"));
  },
  filename: function (req, file, cb) {
    if (file) cb(null, file.originalname);
    else cb(null, "none.jpg");
  },
});

// we create the multer object
const multer = Multer({ storage: storage });

// this route gets an image from the images folder
app.get("/:name", (req, res) => {
  res.sendFile(`${req.params.name}`, {
    root: path.join("__dirname", "../images"),
  });
});

// this route saves an image
app.post("/", multer.single("image"), (req, res) => {
  res.send(`${req.file?.originalname} saved`);
});

module.exports = app;
