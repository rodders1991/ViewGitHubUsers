// JavaScript Document
app.factory('userService', function($http, $q) {

	var deffered = $q.defer();
	var users = [];
	var	userService = {};
	var user = {};
	var repos = {};
	
	
	userService.getUsers = function(query) {
		console.log(query);
		$http.get('https://api.github.com/search/users?q=' + query)
		.success(function (d) {
			users = d;
			//Check to see if the data's returned
			console.log(d);
			deffered.resolve();
		});
		return deffered.promise;
		};
	
	userService.users = function() { return users; };
	
	userService.getUser = function(query) {
		console.log(query);
		$http.get('https://api.github.com/users/' + query)
		.success(function (d) {
			user = d;
			//Check to see the data's returned
			console.log(d);
			deffered.resolve();
		});
		return deffered.promise;
	};
	
	userService.user = function() { return user; };
	
	
	return userService;
});