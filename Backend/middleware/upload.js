const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: 'uploads/',   // folder to save uploaded files
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  }
});

const upload = multer({ storage });
module.exports = upload;
