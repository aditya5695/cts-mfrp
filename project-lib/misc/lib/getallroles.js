module.exports = getAllRoles;
var mongoose = require('mongoose');
var DBModels = require('./../../dbmodels');

function getAllRoles(req,res)
{
	DBModels.Role.find(function(err,result){
		if(err)
		{
			res.statusCode = 402;
			res.json({message: 'Failed to retreive roles'});
		}
		else{
			res.json(result);
		}	
	});
}