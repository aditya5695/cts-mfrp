var auth = require('./auth/');
var user = require('./user/');
var project = require('./project/');
var misc = require('./misc/');

module.exports = 
{
	login : auth.login,
	logout : auth.logout,

	saveNewUser : user.saveNewUser,
	getAllUsers : user.getAllUsers,
	removeUser : user.removeUser,
	getUsernameFromID : user.getUsernameFromID,

	getAllProjects : project.getAllProjects,
	saveNewProject : project.saveNewProject,

	getAllRoles : misc.getAllRoles
}