const mongoose = require('mongoose');

const socialDataSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  platform: { type: String, required: true },  // e.g., Facebook, Instagram
  data: { type: Object, required: true }       // store your dummy metrics
});

module.exports = mongoose.model('SocialData', socialDataSchema);
