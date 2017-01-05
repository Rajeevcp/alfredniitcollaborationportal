app.controller('FriendController',function($scope,$location,FriendService)
{
	console.log('Entering FriendController')
	$scope.friends=[];
	$scope.pendingRequest=[]
	$scope.friends=FriendService.getAllFriends()
		.then(function(response)
		{
			console.log('Entering getAllFriends() in friendcontroller.js')
			console.log(response.status)
			$scope.friends= response.data;
		}
		,
		function(response)
		{
			console.log(response.data)
		})
	
	$scope.pendingRequest=FriendService.pendingRequest()
		.then(function(response)
		{
			console.log('pendingRequest()')
			console.log(response.status);
			$scope.pendingRequest= response.data
			console.log($scope.pendingRequest)
			/*alert($scope.pendingRequest);*/
		}
		,
		function(response)
		{
			console.log(response.status)
		})
	
	$scope.updatePendingRequest=function(fromId,friendStatus)
	{
		console.log('updateFriendrequest()')
		FriendService.updateFriendRequest(friendStatus,fromId)
		.then(function(response)
		{
			console.log(response.status)
			if(friendStatus=='A')
			{
			alert('You have accepted the friend request. You and '+ fromId +' are now friends !');
			$location.path('/friendsList')
			}
			else
			{
			alert('You have denied the friend request')
			}
		}
		,
		function(response)
		{
			console.log(response.log)
		})
	}
	
})