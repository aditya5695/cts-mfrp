module.exports = getUsernameFromID;

var mongoose = require('mongoose');
var DBModels = require('./../../dbmodels');

function getUsernameFromID(req,res)
{
	DBModels.User.find({user_id : req.body.userid},function(err,result){
		if(err)
		{
			res.statusCode = 402;
			res.json({message: 'Failed to retreive user'});
		}
		else
		{
			if(result.length == 1)
				res.json({name : result[0].first_name+" "+result[0].last_name});
			else
			{
				res.statusCode = 404;
				res.json({message: 'User not found'});
			}
		}
	});
}