var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sprintSchema = new Schema({
	sprint_name : String,
	project_id : String,
	pb_id : String,
	start_date : Date,
	end_date : Date,
	capacity : Number
});

var Sprint = mongoose.model('Sprint',sprintSchema,'sprint');

module.exports = Sprint;