const router = require('express').Router();
const { uploadData, getDataByPlatform } = require('../controllers/dataController');
const auth = require('../middleware/auth');

// Upload dummy data
router.post('/upload', auth, uploadData);

// Fetch data for a platform
router.get('/:platform', auth, getDataByPlatform);

module.exports = router;
