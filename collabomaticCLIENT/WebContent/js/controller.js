app.controller('PersonController',function($scope,PersonService)
{
	console.log('entering the controller')
	$scope.persons;
	$scope.person={personId:'',name:'',email:'',phoneno:'',dob:''}
	function fetchAllPersons()
	{
		console.log('entering fetchallpersons in controller')
		PersonService.fetchAllPersons().then
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
	$scope.save=function()
	{
		console.log('entering the function save() in person controller')
		// $scope.person - values entered by the client in the form
		PersonService.savePerson($scope.person).then
		(
		function(d)
		{
			console.log(d.status)
			fetchAllPersons();
		},
		function(d)
		{
			console.log(d.status)
		}
		);
	}
})