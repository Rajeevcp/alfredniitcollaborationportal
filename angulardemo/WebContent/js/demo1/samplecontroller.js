var app=angular.module("personApp",[])
app.controller('PersonController',function($scope){
	$scope.message="Hello World"
		
    // var self=this;
	// self.message="HelloWorld"
	// self.person={id:1,name:'John',email:'John@xyz.com'}
	
	$scope.username;
	
	$scope.login=function()
	{
		alert('logging in...')
		$scope.username=true
	}
	
	$scope.logout=function()
	{
		alert('logged out!')
		$scope.username=false
	}
})