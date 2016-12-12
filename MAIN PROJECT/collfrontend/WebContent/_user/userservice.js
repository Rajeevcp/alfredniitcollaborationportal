app.factory('UserService',function($http)
{
	var userService=this;
	var BASE_URL="http://localhost:8080/proj2backend"
	userService.authenticate=function(user)
	{
		return $http.post(BASE_URL + "/login",user);
	}
	return userService;
})