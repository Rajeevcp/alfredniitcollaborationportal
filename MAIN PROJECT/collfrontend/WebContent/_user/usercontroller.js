app.controller('UserController',function($scope,$location,UserService)
{
	$scope.user={id:'',username:'',password:'',email:'',role:'',isOnline:'',enabled:''};
	$scope.message;
	$scope.submit=function()
	{
		console.log('Entering - submit function in usercontroller')
		UserService.authenticate($scope.user)
		.then(function(response)
		{
			$scope.user=response.data;
			$location.path("/home");
		},
		function(response)
		{
			console.log('Invalid username and password')
			$scope.message="Invalid username and password";
			$location.path("/login");
		})
	}
	
	$scope.registerUser=function()
	{
		console.log('entering registerUser')
		UserService.registerUser($scope.user)
		.then(function(response)
		{												//success
			console.log("registration success "+ response.status)
			$location.path("/home");
		}
		,
		function(response)
		{												//failure
			console.log("registration failure "+ response.status)
			console.log(response.data)
			$scope.errorMessage="Registration failed..."+response.data.message
			$location.path("/register")
		})
	}
	
})