var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/response/string', function (req, res) {
   res.send('this is a string');
});

router.get('/response/file', function (req, res) {
  res.sendFile(path.join(__dirname, 'test.js'));
});

router.get('/response/html', function (req, res) {
  res.render('response', { message: 'Hello ' + req.query.name });
});

router.get('/candidates', function (req, res) {
  var arr = ['Ronak', 'Natalie', 'Likhita'];
  console.log(req.query);
  console.log(req.params);
  res.status(200).json(arr);
});

router.post('/response', function (req, res) {
  console.log(req.body);
  res.status(200).json({obj: req.body});
});

module.exports = router;
