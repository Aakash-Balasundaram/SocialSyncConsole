const mongoose = require('mongoose');

const socialAccountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  platform: String,            // Facebook, Instagram etc.
  accountName: String,        // The username on platform
  accessToken: String,        // We'll store API token
  refreshToken: String,
  connectedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SocialAccount', socialAccountSchema);
