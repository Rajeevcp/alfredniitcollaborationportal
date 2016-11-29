var app=angular.module('simpleApp',['ngRoute'])
app.config(function($routeProvider){
	
	alert('inside config')
	$routeProvider
	.when('/home',{
		controller:'PersonController',
		templateUrl:'home.html'
	})
	.when('/sortByDob',{
		controller:'PersonController',
		templateUrl:'sortbydobview.html'
	})
	.when('/sortByName',{
		controller:'PersonController',
		templateUrl:'sortbynameview.html'
	})
	.otherwise({redirectTo:'/home'})
	
})