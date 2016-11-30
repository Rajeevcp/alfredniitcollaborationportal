app.controller('PersonController',function($scope,PersonService)
{
	console.log('entering the controller')
	$scope.persons;
	$scope.person={personId:'',name:'',email:'',phoneno:'',dob:''}
	function fetchAllPersons()
	{
		console.log('entering fetchall persons in controller')
		PersonService.fetchAllPersons()
		.then
		(
				function(d)
				{
					$scope.persons=d;
				},
				function(error)
				{
					console.log(error);
				}
		)
	}
	fetchAllPersons();
})