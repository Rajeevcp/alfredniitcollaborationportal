app.controller('PersonController',function($scope){
	
	alert('entering controller')
	
	$scope.persons=[{id:1,name:'a',dob:'2000-10-01'},
	                {id:2,name:'d',dob:'1999-09-01'},
	                {id:3,name:'c',dob:'2005-10-01'},
	                {id:4,name:'b',dob:'1998-10-01'}]
	
	$scope.message="click on the links below to view in sorted order"
})