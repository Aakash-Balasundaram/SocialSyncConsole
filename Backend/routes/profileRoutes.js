const express = require('express');
const multer = require('multer');
const path = require('path');
const User = require('../models/User');

const router = express.Router();

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // save in /uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});
const upload = multer({ storage });

// Upload route
router.post('/upload', upload.single('profilePic'), async (req, res) => {
  try {
    const userId = req.body.userId;
    const profilePicUrl = `http://localhost:5000/uploads/${req.file.filename}`;

    // update MongoDB
    await User.findByIdAndUpdate(userId, { profilePic: profilePicUrl });

    res.json({ url: profilePicUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Upload failed' });
  }
});

module.exports = router;
