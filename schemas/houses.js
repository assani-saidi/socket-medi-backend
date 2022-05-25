const mongoose = require("mongoose");
const UsersSchema = require("./users").UsersSchema;
const Schema = mongoose.Schema;

const housesSchema = Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    contact: { type: String, required: true },
    location: { type: Object, required: true }, // city, surburb, street
    size: { type: Number, required: true },
    rating: { type: Number, required: true },
    image: { type: String, required: true },
    gallery: { type: Object, required: false }, // an array of image urls
    owner: { type: UsersSchema, required: true },
  },
  { timestamps: true }
);

// model
const Houses = mongoose.model("house", housesSchema);

module.exports = Houses;
