const express = require('express');
const router = express.Router();
const path = require('path');

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/../uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage
}).single('file');


router.post('/upload', upload, (req, response) => {
  response.status(200).send('file uploaded');
});

module.exports = router;