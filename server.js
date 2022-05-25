const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = require("./config").PORT;
const url = require("./config").MONGOOSE_URL;

const app = express();
app.use(express.json());
app.use(cors());

// we import all the routes
const routes = require("./routes");

// we register the routes
app.get("/", (req, res) => res.send("hello from computer"));
app.use("/images", routes.images);
app.use("/houses", routes.houses);
app.use("/users", routes.users);

// database connection
const db = mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((connection) => {
    // we connect to express only after we have successfully connected to mongodb
    app.listen(port, () => console.log(`express running on port ${port}`));
  });
