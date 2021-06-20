var express = require('express');
var router = express.Router();
const path = require('path');
const staticFilePath = path.join(__dirname, '..', 'views');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(staticFilePath,'index.html'));
});

module.exports = router;
