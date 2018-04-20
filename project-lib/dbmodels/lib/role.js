var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var roleSchema = new Schema({
	role_id : Number,
	role_name : String,
	role_sname : String
});

var Role = mongoose.model('Role',roleSchema,'role');

module.exports = Role;