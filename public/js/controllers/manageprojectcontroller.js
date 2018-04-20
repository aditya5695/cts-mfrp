angular.module('myApp')
.controller('manageProjectController',['$http','$scope', function($http,$scope) 
{
	var url = '../getallprojects';
	$scope.projectData = [];
	$http.post(url).then(function(response){
		$scope.projectData = response.data;
	},function(err){
		//$scope.projectData = null;
	});
}]);