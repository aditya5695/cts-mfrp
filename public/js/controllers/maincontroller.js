angular.module('myApp', ["ngCookies","ngRoute"])
.controller('myCtrl',['$rootScope','$scope','$http','$cookies','$location','authService', function($rootScope,$scope,$http,$cookies,$location,authService) 
{
	$scope.userInvalid=false;

	$rootScope.isLoggedIn = authService.isLoggedIn();
	$rootScope.isAdmin = authService.isAdmin();
	$rootScope.userName = authService.getUserName();
	$rootScope.isProductOwner = authService.isProductOwner();
	
	$scope.login = function() {

		var url = "../login";

		$http.post(url, $scope.user).then(function(response) {
			$cookies.put('isLoggedIn',response.data.isLoggedIn);
			$cookies.put('isAdmin',response.data.isAdmin);
			$cookies.put('username',response.data.username);
			$cookies.put('userid',response.data.userid);
			$cookies.put('isProductOwner',response.data.isProductOwner);

			$rootScope.isLoggedIn = authService.isLoggedIn();
			$rootScope.isAdmin = authService.isAdmin();
			$rootScope.userName = authService.getUserName();
			$rootScope.isProductOwner = authService.isProductOwner();

			$('#myModal').modal('hide');
		}, function(err) {
			$scope.userInvalid = true;
		});
		$scope.user = null;
	};

	$scope.logout = function()
	{
		var url = "../logout";

		$http.post(url).then(function(response)
		{
			$cookies.put('isLoggedIn',response.data.isLoggedIn);
			$cookies.put('isAdmin',response.data.isAdmin);

			$rootScope.isLoggedIn = authService.isLoggedIn();
			$rootScope.isAdmin = authService.isAdmin();
			if(!$rootScope.isLoggedIn)
			{
				$cookies.put('username',null);
				$cookies.put('userid',null);
				$cookies.put('isProductOwner',false);
				$rootScope.userName = authService.getUserName();

			}
			$location.path("/");
		},function(err) {alert("Couldn't Logout")});
	};
}]);