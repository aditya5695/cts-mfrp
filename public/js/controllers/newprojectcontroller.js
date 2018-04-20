angular.module('myApp')
.controller('newProjectController',['$scope','$http','authService', function($scope,$http,authService)
{
    $scope.userdata=[];
    $scope.userroles = [];
    $scope.userids = [];
    var url = '../getroles';
    $scope.roles = null;
    $http.post(url).then(function(response){
    	$scope.roles = response.data;
    },function(err){
    	console.log("Couldn't fetch 'role' data")
    });

	$scope.newdtitem = function(id,role){
        var url = 'getusernamefromid';
        var data = {userid : id};
        $http.post(url,data).then(function(response){
        	$scope.userdata[$scope.userdata.length] = { 'name' : response.data.name,'role' : role};
        	$scope.userroles[$scope.userroles.length] = getRoleId(role);
        	$scope.userids[$scope.userids.length] = id;
        	$scope.product.dt = null;
        },function(err){
        	alert("Couldn't find any such user");
        });
    };

    $scope.saveNewProject = function(){
        var url = ('../savenewproject');
        if($scope.project.myrole!=null)
        {   
    	   $scope.userroles[$scope.userroles.length] = getRoleId($scope.project.myrole);
    	   $scope.userids[$scope.userids.length] = authService.getUserId();
        }
    	var data = {projectname : $scope.project.name,description : $scope.project.desc,owner : $scope.product.owner,team : $scope.userids,roles : $scope.userroles};
        console.log(data);
    	$http.post(url,data).then(function(response){
            alert("New project created")
        },function(err){
            alert("Couldn't create new project")
        });
    }
    
    function getRoleId(rolename)
    {
    	for(var i = 0;i<$scope.roles.length;i++)
    	{
    		if($scope.roles[i].role_name == rolename)
    			return $scope.roles[i].role_id;
    	}
    }

}]);