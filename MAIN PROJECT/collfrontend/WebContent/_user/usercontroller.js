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
			if(response.status==401)
			{
			$scope.message="Invalid Username and Password";
			$location.path("/login");
			}
			else
			{
			$scope.user=response.data;
			$location.path("/home");
			}
		})
	}
})