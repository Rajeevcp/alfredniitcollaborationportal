app.controller('UserController',function($scope,$rootScope,$cookieStore,$location,UserService)
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
			$cookieStore.put('currentUser',$rootScope.currentUser)
			console.log('currentUser in $rootScope: '+ $rootScope.currentUser.id)
			$location.path("/home");			
		}
		,
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
			alert("Registered successfully!...Please login using the registered username and password");
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
	
	/*$rootScope.logout=function()
	{
		console.log('Entering logout()')
		delete $rootScope.currentUser;
		
		UserService.logout()
		.then(function(response)
		{
			console.log("Logged out successfully!...");
			$scope.message="Logged out Successfully!";
			
			$location.path('/login')
			alert("Logged out successfully!");
		},
		function(response)
		{
			console.log(response.status);
		})
	} 
	
	$rootScope.hasRole=function(role)
	{
		if($rootScope.currentUser.role==undefined)
			return false;
		return $rootScope.currentUser.role==role;
	}*/
	
	/* To Send FriendRequest from listOfUsers */
	$scope.friendRequest=function(username)
	{
		console.log('friendRequest() in usercontroller.js')
		console.log('Entering friendRequest()')
		UserService.friendRequest(username)
		.then(function(response)
		{
			console.log(response.status);
			alert('A Friend request has been Sent')
			getAllUsers();
			$location.path('/getAllUsers')
		}
		,
		function(response)
		{
			console.log(response.status);
		})
	}
	
	
	
	function getAllUsers()
	{
		console.log('Entering getAllUsers()')
		UserService.getAllUsers()
		.then(function(response)
		{
		console.log(response.status)
		console.log(response.data)
		$scope.users=response.data
		}
		,
		function(response)
		{
			console.log(response.status)
		})
	}
	getAllUsers()
	
})