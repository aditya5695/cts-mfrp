module.exports = saveNewProject;

var mongoose = require('mongoose');
var DBModels = require('./../../dbmodels');

var express = require('express');
var session = require('express-session');

var app = express();
app.use(session({secret : 'aditya',resave: false,saveUninitialized: true}));


function saveNewProject(req,res)
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
				var newProject = new DBModels.Product({
					project_id : new Date().getTime(),
					project_name : req.body.projectname,
					description : req.body.description,
					product_owner : req.body.owner,
					team : {teamids : req.body.team,roles : req.body.roles}
					});
				newProject.save(function(err){
					if(err)
					{
						res.statusCode = 401;
						res.json({message: 'couldnt add new project'});
						throw err;
					}
					else{
						res.json({message : 'added new project'});
					}
				});
			}
		}
	});
}