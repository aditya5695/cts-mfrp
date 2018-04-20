angular.module('myApp')
.controller('manageUserController',['$http','$scope', function($http,$scope) 
{
	var url = '../getallusers';
	$scope.userData = null;
	$http.post(url).then(function(response){
		$scope.userData = response.data;
	},function(err){
		$scope.userData = null;
	});

	$scope.remove = function(userid)
	{
		var url = '../removeuser';
		var data = {user : parseInt(userid)};

		$http.post(url,data).then(function(response){
			if(response.data.deleted)
				removeUserLocal(data.user);
			else
				console.log("Couldn't remove user");
		},function(err){
			console.log("Couldn't remove user");
		});
	}

	function removeUserLocal(user)
	{
		var flag = false
		for(var i = 0;i<$scope.userData.length;i++){
			if($scope.userData[i].user_id == user){
				$scope.userData.splice(i,i);
				break;
			}
		}
	}
}]);