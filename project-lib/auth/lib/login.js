module.exports = login;

var express = require('express');
var session = require('express-session');
var mongoose = require('mongoose');
var DBModels = require('./../../dbmodels/');


var app = express();
app.use(session({secret : 'aditya',resave: false,saveUninitialized: true}));

function login(req,res)
{
	DBModels.User.find({ email: String(req.body.email),password : String(req.body.password) }, function(err, result) {
   			if (err) throw err;
   			if(result.length == 1)
   			{
  				req.session.user = result[0].user_id;
				if(req.session.user)
				{
					var resp = {isLoggedIn : true,isAdmin : result[0].is_admin,username : result[0].first_name+" "+result[0].last_name,userid : result[0].user_id};
					DBModels.Product.find({product_owner : result[0].user_id},function(err,result){
						if(err) throw err;
						else
						{
							if(result.length>0)
								resp.isProductOwner = true;
							else
								resp.isProductOwner = false;
							res.json(resp);
						}
					})
				}
			}
			else
			{
				res.statusCode = 401;
				res.json({message: 'No User Found'});
			}
  	});
}