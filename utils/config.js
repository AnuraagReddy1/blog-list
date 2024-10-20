require("dotenv").config();

const PORT = process.env.PORT || 3004;

MONGODBURI = process.env.MONGODBURI;

module.exports = {
  MONGODBURI,
  PORT,
};
