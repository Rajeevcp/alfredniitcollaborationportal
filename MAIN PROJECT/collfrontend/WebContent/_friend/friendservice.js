app.factory('FriendService',function($http)
{
	var BASE_URL="http://localhost:8181/collbackend"
	var friendService=this;
	
	friendService.getAllFriends=function()
	{
		console.log('service --- getAllFriends()');
		return $http.get(BASE_URL + "/getAllFriends");
	}
	
	friendService.pendingRequest=function()
	{
		console.log('service --- pendingRequest()');
		return $http.get(BASE_URL + "/pendingRequest")
	}
	
	friendService.updateFriendRequest=function(friendStatus,fromId)
	{
		console.log('service --- updateFriendRequest()')
		return $http.put(BASE_URL + "/updateFriendRequest/" + friendStatus +"/"+fromId)
	}
	
	return friendService;
})