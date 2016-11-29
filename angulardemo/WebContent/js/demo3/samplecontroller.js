var app=angular.module('personApp',[])
app.controller('PersonController',function($scope){
	$scope.persons=[{id:1,name:'John',email:'John@xyz.com'},
	                {id:2,name:'James',email:'James@abc.com'},
	                {id:3,name:'Adam',email:'Adam@abc.com'}]
	
	$scope.square = function()
	{
		$scope.answer = $scope.number * $scope.number;
	}
})