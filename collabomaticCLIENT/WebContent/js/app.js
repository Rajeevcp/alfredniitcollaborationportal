var app=angular.module('myApp',['ngRoute'])
app.config(function($routeProvider)
			{
			console.log('Entering app configuration')
			//http://localhost:8080/urapp/
			$routeProvider
			
			.when('/createPerson',
			{
			controller:'PersonController',
			templateUrl:'pages/createPerson.html'
			})
			
			.when('/listOfPersons',
			{
			controller:'PersonController',
			templateUrl:'pages/listOfPersons.html'
			})
			
			.when('/edit/:id',
			{
			controller:'EditController',
			templateUrl:'pages/editPerson.html'
			})
			
			.when('/',{templateUrl:'pages/home.html'})
			})