angular.module('myApp')
.controller('currentProjectController',['$http','$scope', function($http,$scope) 
{
	var url = '../getallprojects';
	$scope.projectData = null;
	$http.post(url).then(function(response){
		$scope.projectData = response.data;
	},function(err){
		$scope.projectData = null;
	});
}]);