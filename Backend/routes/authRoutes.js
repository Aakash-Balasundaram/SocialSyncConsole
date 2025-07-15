const express = require('express');
const router = express.Router();

const { register, login, getProfile } = require('../controllers/authController');
const auth = require('../middleware/auth');

// existing routes
router.post('/register', register);
router.post('/login', login);
router.get('/profile', auth, getProfile);

// export router
module.exports = router;
