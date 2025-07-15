const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const { register, login, getProfile } = require('../controllers/authController');
const auth = require('../middleware/auth');

// setup multer
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// updated register route to handle photo upload
router.post('/register', upload.single('profilePic'), register);

// existing routes
router.post('/login', login);
router.get('/profile', auth, getProfile);

module.exports = router;
