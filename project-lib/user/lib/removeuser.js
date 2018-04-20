module.exports = removeUser;

var mongoose = require('mongoose');
var DBModels = require('./../../dbmodels');

var express = require('express');
var session = require('express-session');

var app = express();
app.use(session({secret : 'aditya',resave: false,saveUninitialized: true}));

function removeUser(req,res)
{
	DBModels.User.find({user_id : req.session.user},function(err,result){
		if(err){
			res.statusCode = 401;
			res.json({message: 'Failed to delete user'});
		}
		else{
			if(!result[0].is_admin){
				res.statusCode = 401;
				res.json({message: 'Unauthorized to delete users'});
			}
			else{
				DBModels.User.findOneAndRemove({user_id : req.body.user},function(err,result){
					if(err){
						res.statusCode = 401;
						res.json({message: 'Failed to delete user'});
					}
					else{
						res.json({deleted:true});
					}	
				});
			}
		}
	});
}