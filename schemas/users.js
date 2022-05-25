const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = Schema(
  {
    username: { type: String, required: true },
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    whatsapp: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: Object, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

// model
const Users = mongoose.model("users", usersSchema);

module.exports = { Users, UsersSchema: usersSchema };
