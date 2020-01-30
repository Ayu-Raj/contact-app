const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const HistorySchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  sent_time: {
    type: Date,
    default: Date.now,
    required: true
  },
  otp: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model('history', HistorySchema);
