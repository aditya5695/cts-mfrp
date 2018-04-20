var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
	task_name : String,
	project_id : String,
	pb_id : String,
	sprint_id : String,
	description : String,
	estimation : Number,
	remaining : Number,
	state : String,
	assigned_to : Number
});

var Task = mongoose.model('Task',taskSchema,'task');

module.exports = Task;