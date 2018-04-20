var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
	{
		user_id : {type :Number,required : true,unique : true},
		first_name: {type : String,required : true},
		last_name : String,
		email : {type : String,required : true,unique : true},
		password : {type : String,required : true},
		is_admin : Boolean,
	});

var User = mongoose.model('User', userSchema, 'user');

module.exports = User;