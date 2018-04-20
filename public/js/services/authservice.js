angular.module('myApp')
.service('authService',function($cookies){
	this.isLoggedIn = function(){
		if($cookies.get('isLoggedIn')!=undefined) 
			return JSON.parse($cookies.get('isLoggedIn')); 
		return false;
	}

	this.isAdmin = function(){
		if($cookies.get('isLoggedIn')!=undefined) 
			return JSON.parse($cookies.get('isAdmin')); 
		return false;
	}

	this.getUserName = function(){
		if(!($cookies.get('username') == null && $cookies.get('username') == undefined))
			return $cookies.get('username');
		return null;
	}

	this.getUserId = function(){
		if(!($cookies.get('userid') == null && $cookies.get('userid') == undefined))
			return $cookies.get('userid');
		return null;
	}

	this.isProductOwner = function(){
		if(!($cookies.get('isProductOwner') == null && $cookies.get('isProductOwner') == undefined))
			return JSON.parse($cookies.get('isProductOwner'));
		return null;
	}
});