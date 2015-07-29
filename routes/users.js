var express = require('express');
var router = express.Router();

/* GET users listing.  /users */
router.get('/', function(req, res) {
  console.log(req.query);
  res.send('respond with a resource');
});

module.exports = router;
