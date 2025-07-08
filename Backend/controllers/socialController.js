const SocialAccount = require('../models/SocialAccount');

// POST /api/social/connect
exports.connectAccount = async (req, res) => {
  try {
    const newAcc = new SocialAccount(req.body);
    await newAcc.save();
    res.status(201).json(newAcc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/social/accounts
exports.listAccounts = async (req, res) => {
  try {
    const accounts = await SocialAccount.find();
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /api/social/:id
exports.removeAccount = async (req, res) => {
  try {
    await SocialAccount.findByIdAndDelete(req.params.id);
    res.json({ message: 'Account removed' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
