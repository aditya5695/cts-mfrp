module.exports = getUsers;

var mongoose = require('mongoose');
var DBModels = require('./../../dbmodels');

var express = require('express');
var session = require('express-session');

var app = express();
app.use(session({secret : 'aditya',resave: false,saveUninitialized: true}));

function getUsers(req,res)
{
	DBModels.User.find({user_id : req.session.user},function(err,result){
		if(err){
			res.statusCode = 401;
			res.json({message: 'Failed to retreive users'});
		}
		else{
			if(!result[0].is_admin){
				res.statusCode = 401;
				res.json({message: 'Unauthorized to retreive records'});
			}
			else{
				DBModels.User.find(function(err,result){
					if(err){
						res.statusCode = 401;
						res.json({message: 'Failed to retreive users'});
					}
					else{
						res.json(result);
					}	
				});
			}
		}
	});
}