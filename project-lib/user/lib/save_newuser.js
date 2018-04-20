module.exports = saveNewUser;

var mongoose = require('mongoose');
var DBModels = require('./../../dbmodels');

var express = require('express');
var session = require('express-session');

var app = express();
app.use(session({secret : 'aditya',resave: false,saveUninitialized: true}));

function saveNewUser(req,res)
{
	DBModels.User.find({user_id : req.session.user},function(err,result){
		if(err){
			res.statusCode = 401;
			res.json({message: 'Cannot create user'});
		}
		else{
			if(!result[0].is_admin){
				res.statusCode = 401;
				res.json({message: 'Unauthorized to create new user'});
			}
			else{
				var newUser = new DBModels.User({
					user_id : req.body.userid,
					first_name : req.body.firstname,
					last_name : req.body.lastname,
					email : req.body.email,
					password : req.body.password,
					is_admin : req.body.isadmin,
				});
				newUser.save(function(err){
				if(err)
				{
					res.statusCode = 401;
					res.json({message: 'Cannot create user'});
				}
				else
				{
					res.json({message:"User Creation Successfull"})
				}
				});
			}
		}
	});
}