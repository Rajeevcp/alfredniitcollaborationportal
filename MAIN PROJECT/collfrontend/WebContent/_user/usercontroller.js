app.controller('UserController',function($scope,$rootScope,$location,UserService)
{
	$scope.user={id:'',username:'',password:'',email:'',role:'',isOnline:'',enabled:''};
	$scope.message;
	$scope.submit=function()
	{
		console.log('Entering submit() in usercontroller.js')
		UserService.authenticate($scope.user)
		.then(function(response)
		{
			$scope.user=response.data;
			$rootScope.currentUser=$scope.user;
			$location.path("/home");			
		},
		function(response)
		{
			console.log('Invalid username and password!')
			$scope.message="Invalid username and password!!!";
			$location.path("/login");
		})
	}
	
	$scope.registerUser=function()
	{
		console.log('Entering registerUser()')
		UserService.registerUser($scope.user)
		.then(function(response)
		{												//success
			console.log("Registration success: "+ response.status)
			$scope.message="Registered successfully!...Please login using username and password"
			$location.path("/login");
		}
		,
		function(response)
		{												//failure
			console.log("Registration failure: "+ response.status)
			console.log(response.data)
			$scope.errorMessage="Registration failed!..."+response.data.message
			$location.path("/register")
		})
	}
	
	$rootScope.logout=function()
	{
		console.log('Entering logout()')
		delete $rootScope.currentUser;
		
		UserService.logout()
		.then(function(response)
		{
			console.log("Logged out successfully!...");
			$scope.message="Logged out Successfully!";
			$location.path('/login')
		},
		function(response)
		{
			console.log(response.status);
		})
	}
	
})