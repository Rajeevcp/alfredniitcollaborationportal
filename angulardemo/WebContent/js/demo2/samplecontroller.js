var app=angular.module("PersonApp",[])

//single person object
app.controller("PersonController",function($scope){
	$scope.person={id:1,name:'John',email:'john@xyz.com'}
})