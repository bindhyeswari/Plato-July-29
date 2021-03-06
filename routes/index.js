var express = require('express');
var path = require('path');
var uuid = require('uuid');
var router = express.Router();

var contacts = [];

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

router.post('/contacts', function (req, res) {
    req.body.uuid = uuid.v4();
    contacts.push(req.body);
    res.status(200).json({ message: 'Successfully inserted the contact.' });
});

router.get('/contacts', function (req, res) {
   res.status(200).json(contacts);
});

router.put('/contacts', function (req, res) {
    console.log(contacts.map(function (contact) {return contact.uuid}));
    console.log(req.body);
    console.log(contacts.map(function (contact) {return contact.uuid}).indexOf(req.body.uuid));
    contacts[contacts.map(function (contact) {return contact.uuid}).indexOf(req.body.uuid)] = req.body;
    res.status(200).json({message: 'IMPL_101'});
});

module.exports = router;
