const express = require("express");
const app = express.Router();
const Users = require("../schemas").Users;

// get all
app.get("/", (req, res) => {
  Users.find({}, (err, docs) => {
    if (err) {
      res.status(404).send(err);
      return;
    }
    res.send(docs);
  });
});

// get one
app.get("/:id", (req, res) => {
  Users.findById(req.params.id, (err, doc) => {
    if (err) {
      res.status(404).send(`${req.params.id} doesn't exist in Users: ${err}`);
      return;
    }
    res.send(doc);
  });
});

// get one
app.get("/", (req, res) => {
  Users.findOne({ ...req.body }, (err, doc) => {
    if (err) res.status(404).send(`user could not be authenticated: ${err}`);
    res.status(200).send(doc);
  });
});

// add
app.post("/", (req, res) => {
  const user = req.body;
  Users.create(user, (err, doc) => {
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
  Users.findByIdAndUpdate(req.params.id, newDoc, { new: true }, (err, doc) => {
    if (err) {
      res.status(500).send(`you provided invalid data: ${err}`);
      return;
    }
    res.send(doc);
  });
});

// delete
app.delete("/:id", (req, res) => {
  Users.findByIdAndDelete(req.params.id, (err, doc) => {
    if (err) {
      res
        .status(404)
        .send(`user with id: ${req.params.id} cannot be deleted: ${err}`);
      return;
    }
    res.send(doc);
  });
});

module.exports = app;
