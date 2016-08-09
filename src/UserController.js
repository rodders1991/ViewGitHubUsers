// JavaScript Document

app.controller('UserCtrl', function($scope, userService) {
	
	//max 10 per page
	$scope.currentPage = 0;
    $scope.pageSize = 9;
	$scope.userName = "Click a Avatar to view a User";
	$scope.firstSearch = true;
	
	
	$scope.searchUsers = function() { 
	
	userService.getUsers($scope.query).then(function() {
		
		if($scope.firstSearch)
		{
			$("#searchMenu").animate({marginTop:"20px"});
			$("#searchMenu form").animate({width:"620px"});
			$("#nextPage").show();

			$scope.firstSearch = false;
		}
		
		
		$scope.users = userService.users().items;
		$scope.lastPage = Math.ceil($scope.users.length / $scope.pageSize) - 1;
		
		
	});
	
	};
	
	$scope.getUser = function(usr) { userService.getUser(usr).then(function() {
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