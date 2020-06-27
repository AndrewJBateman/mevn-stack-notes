const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Note collection and schema
let Note = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now,
  },
  body: {
    type: String
  }
},{
    collection: 'notes'
});

module.exports = mongoose.model('Note', Note);