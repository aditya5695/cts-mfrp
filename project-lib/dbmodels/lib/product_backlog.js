var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productBacklogSchema = new Schema({
	pb_name : String,
	project_id : String,
	user_story : String,
	priority : Number,
	estimation : Number
});

var ProductBacklog = mongoose.model('ProductBacklog', productBacklogSchema, 'product_backlog');

module.exports = ProductBacklog;