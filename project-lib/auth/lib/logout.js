module.exports = logout;

var express = require('express');
var session = require('express-session');

var app = express();
app.use(session({secret : 'aditya',resave: false,saveUninitialized: true}));

function logout(req,res)
{
	if(req.session.user)
	{
		req.session.user = null;
		if(!req.session.user)
		{
			req.session.destroy();
			res.json({isLoggedIn : false,isAdmin : false});	
		}
		else
			res.json({isLoggedIn : true,isAdmin : true});
	}
}