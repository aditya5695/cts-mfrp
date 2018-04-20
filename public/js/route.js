angular.module('myApp')
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/partials/home.html"
    })
    .when("/home", {
        templateUrl : "/partials/home.html"
    })
    .when("/tasks", {
        templateUrl : "/partials/tasks.html"
    })
    .when("/newtask", {
        templateUrl : "/partials/newtask.html"
    })
    .when("/newuser", {
        templateUrl : "/partials/newuser.html",
        controller : "newUserController"
    })
    .when("/manageProjects", {
        templateUrl : "/partials/manageProjects.html",
        controller : "manageProjectController"
    })
    .when("/newProject", {
        templateUrl : "/partials/newProject.html",
        controller : "newProjectController"
    })
    .when("/MyProjects", {
        templateUrl : "/partials/MyProjects.html"
    })
    .when("/Backlogs", {
        templateUrl : "/partials/Backlogs.html"
    })
    .when("/newBacklog", {
        templateUrl : "/partials/newBacklog.html"
    })
    .when("/sprints", {
        templateUrl : "/partials/sprints.html"
    })
    .when("/newSprint", {
        templateUrl : "/partials/newSprint.html"
    })
    .when("/manageUser", {
        templateUrl : "/partials/manageUser.html",
        controller : "manageUserController"
    })
    .when("/CurrentProjects", {
        templateUrl : "/partials/CurrentProjects.html",
        controller : "currentProjectController"
    })
    .when("/admin", 
    {
            templateUrl : "/partials/admin.html"
            //controller : "adminController"
    })
});