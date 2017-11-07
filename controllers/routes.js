var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


router.get('/', function(req, res) {
	burger.all(function(data) {
		res.render('index');
	});
});

router.put('/burgers/update', function(req,res) {
	burger.update(req.body.burger_id, function(result) {
		res.redirect('/');
	});
});

router.post('/burgers/insert', function(req, res) {
	burger.insert(req.body.burger_name, function(result) {
		res.redirect('/');
	});
});

module.exports = router;