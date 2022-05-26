// we put all our configuration

// Database and Express configurations variables
const MONGOOSE_URL = "mongodb://localhost:27017/findhouse";
const PORT = process.env.PORT;
const HOUSES_IMAGES_URL = "http://localhost:4000/images";

module.exports = {
  MONGOOSE_URL,
  PORT,
  HOUSES_IMAGES_URL,
};
