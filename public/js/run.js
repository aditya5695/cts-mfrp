angular.module('myApp')
.run(function ($rootScope,$cookies,$location){
	$rootScope.$on("$locationChangeStart", function (event, next, current)
	{
		if($location.path() == "/admin" && !$rootScope.isAdmin)
		{
			$location.path("/home")
		}

		if($location.path() == "/newuser" && !$rootScope.isAdmin)
		{
			$location.path("/home")
		}
	});
});