// Database creation 

var express = require('express');
var router =  express.Router();
var mongojs = require('mongojs');
var db = require('The_Coding_Chamber', [users]);
var bcrypt = require('bcrypt');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


//  Login page - GET 
router.get('/contact', function(res, req){
	res.render('contact');
});

// Post Request
router.get('/contact', function(res, req){
	console.log('Your request has been sent successfully, We\'ll be with you shortly');
});

router.get('./contact', function(res, req){

	var name     = res.body.name;
	var email    = res.body.email;
	var message  = res.body.message;

	// Validation 

	req.checkBody('name', 'Name Field is required').notEmpty();

});

module.exports = router;