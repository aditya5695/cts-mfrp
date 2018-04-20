//lib modules
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

//my module
var mylib = require('./project-lib');

var app = express();
app.listen(3000, function(){
	console.log("App running at 3000");
});

app.use(session({secret : 'aditya',resave: false,saveUninitialized: true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost:27017/project_management');

app.post("/login",mylib.login);
app.post("/logout",mylib.logout);

app.post("/saveuser",mylib.saveNewUser);
app.post("/getallusers",mylib.getAllUsers);
app.post("/removeuser",mylib.removeUser);
app.post("/getusernamefromid",mylib.getUsernameFromID);

app.post("/getallprojects",mylib.getAllProjects);
app.post("/savenewproject",mylib.saveNewProject)

app.post("/getroles",mylib.getAllRoles);


