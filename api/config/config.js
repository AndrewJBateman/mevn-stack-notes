require('dotenv').config();

module.exports = {
  DB: process.env.MONGO_URI,
  PORT: process.env.PORT || 4000,
}