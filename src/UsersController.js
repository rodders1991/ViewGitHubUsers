// JavaScript Document

app.controller('usersCtrl', function($scope, userService) {
	
	//max 10 per page
	$scope.currentPage = 0;
    $scope.pageSize = 10;
	$scope.userName = "Click a Avatar to view a User";
	
	
	
	$scope.searchUsers = function() { userService.getUsers($scope.query).then(function() {
		
		$scope.users = userService.users().items;
		$scope.lastPage = $scope.users.length / $scope.pageSize;
	});
	};
	
	$scope.getUser = function(query) { userService.getUser(query).then(function() {
		$scope.aUser = userService.user();
		$scope.userName = userService.user().name;
		$scope.userLocation = "From " + $scope.aUser.location;

		});
	};
	
	

});

app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});