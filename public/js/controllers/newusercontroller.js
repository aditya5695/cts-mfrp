angular.module('myApp')
.controller('newUserController',['$rootScope','$location','$scope','$http', function($rootScope,$location,$scope,$http) 
{
	$scope.userCreateSuccess=false;
	$scope.userCreateFailure=false;
	$scope.userPasswordMismatch=false;
	$scope.onload=true;
	$scope.createUser = function()
	{
		if($scope.user.password == $scope.user.cpassword){

			var url = '../saveuser';
			$http.post(url,$scope.user).then(function(response){
				$scope.user = null;
				$scope.userCreateSuccess=true;
				setTimeout(function(){
  					$scope.userCreateSuccess = false}, 2000);
				$location.path("/manageUser");
			},
			function(err){
				$scope.userCreateFailure=true;
				setTimeout(function(){
  					$scope.userCreateFailure = false}, 2000);
			});
		}
	};
	$scope.passcheck = function(){
		if($scope.user.password!=$scope.user.cpassword)
		{
			$scope.password_mismatch=true;
		}
		else
		{
			$scope.password_mismatch=false;
		}
	};
	$scope.useridcheck = function(){
		var reg= new RegExp("^[0-9]{6}$");
		$scope.onload=false;
		if(reg.test($scope.user.userid))
		{
			$scope.userid_mismatch=false;
		}
		else{
			$scope.userid_mismatch=true;
		}
	};
	$scope.emailcheck = function(){
		var reg= new RegExp('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/');

		if(reg.test($scope.user.email))
		{
			console.log($scope.email_mismatch);
			$scope.email_mismatch=true;
		}
		else
		{
			console.log($scope.email_mismatch);
			$scope.email_mismatch=false;
		}
	};
}]);