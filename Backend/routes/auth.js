const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const upload = require('../middleware/upload');   // <== import multer middleware

const router = express.Router();

// SIGNUP route
router.post('/signup', upload.single('profilePic'), async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ msg: 'User already exists' });

    const hashed = await bcrypt.hash(password, 10);
    let profilePicUrl = '';
    if (req.file) {
      profilePicUrl = `http://localhost:5000/uploads/${req.file.filename}`;
    }

    const user = new User({
      name,
      email,
      phone,
      password: hashed,
      profilePic: profilePicUrl
    });
    await user.save();
    res.json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Export router
module.exports = router;
