var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema(
	{
		project_id : {type : String,required : true,unique : true},
		project_name : {type : String,required : true},
		description : {type : String,required : true},
		product_owner : {type :Number,required : true},
		team : {teamids : [Number],roles : [Number]}
	});

var Product = mongoose.model('Product', productSchema, 'product');

module.exports = Product;
