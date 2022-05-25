const express = require("express");
const app = express.Router();
const Houses = require("../schemas").Houses;
const config = require("../config");

// get all
app.get("/", (req, res) => {
  Houses.find({}, (err, docs) => {
    if (err) {
      res.status(404).send(err);
      return;
    }
    res.send(docs);
  });
});

// get one
app.get("/:id", (req, res) => {
  Houses.findById(req.params.id, (err, doc) => {
    if (err) {
      res.status(404).send(`${req.params.id} doesn't exist in houses: ${err}`);
      return;
    }
    res.send(doc);
  });
});

// add
app.post("/", (req, res) => {
  const house = req.body;
  Houses.create(house, (err, doc) => {
    if (err) {
      res.status(500).send(`you provided invalid data: ${err}`);
      return;
    }
    res.send(doc);
  });
});

// update
app.put("/:id", (req, res) => {
  const newDoc = req.body;
  Houses.findByIdAndUpdate(req.params.id, newDoc, { new: true }, (err, doc) => {
    if (err) {
      res.status(500).send(`you provided invalid data: ${err}`);
      return;
    }
    res.send(doc);
  });
});

// delete
app.delete("/:id", (req, res) => {
  Houses.findByIdAndDelete(req.params.id, (err, doc) => {
    if (err) {
      res
        .status(404)
        .send(`document with id: ${req.params.id} cannot be deleted: ${err}`);
      return;
    }
    res.send(doc);
  });
});

module.exports = app;
