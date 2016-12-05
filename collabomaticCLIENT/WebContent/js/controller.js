app.controller('PersonController',function($scope,$location,PersonService)
{
	console.log('entering the controller')
	$scope.persons;
	$scope.status;
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
			fetchAllPersons(); //redirect
			$location.path('/listOfPersons');
		},
		function(d)
		{
			console.log(d.status)
			$scope.status="unable to insert into person details ";
		}
		);
	}
	
	$scope.deletePerson=function(id)
	{
		console.log("entering delete person in controller with id " + id)
		PersonService.deletePerson(id)
		.then
		(
		function(d)
		{
			console.log('deleted successfully')
			console.log(d)
			fetchAllPersons();
			$location.path('/listOfPersons')
		}
		,
		function()
		{
			console.log("unable to delete the record")
		}
		)
		
	}
})