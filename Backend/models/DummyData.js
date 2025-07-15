const mongoose = require('mongoose');

const dummyDataSchema = new mongoose.Schema({
  platform: { type: String, required: true, unique: true },
  data: {
    followers: String,
    engagement: String,
    growth: String,
    performance: String
  }
});

module.exports = mongoose.model('DummyData', dummyDataSchema);
