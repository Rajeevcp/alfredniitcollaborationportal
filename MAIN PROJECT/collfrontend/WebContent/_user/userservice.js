app.factory('UserService',function($http)
{
	var userService=this;
	var BASE_URL="http://localhost:8181/collbackend"
	userService.authenticate=function(user)
	{
		return $http.post(BASE_URL + "/login",user);
	}
	
	userService.registerUser=function(user)
	{
		console.log('Entering userService for registration')
		return $http.post(BASE_URL + "/register",user);
	}
	
	userService.logout=function()
	{
		console.log('Entering userService to logout')
		return $http.put(BASE_URL + "/logout")
	}
	
	return userService;
})