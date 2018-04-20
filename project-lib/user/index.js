var saveNewUser = require ('./lib/save_newuser');
var getAllUsers = require ('./lib/getallusers');
var removeUser = require ('./lib/removeuser');
var getUsernameFromID = require ('./lib/getusernamefromid');

module.exports = {
	saveNewUser : saveNewUser,
	getAllUsers : getAllUsers,
	removeUser : removeUser,
	getUsernameFromID : getUsernameFromID
};