app.controller('EditController',function($scope,$routeParams,$location,PersonService)
{
console.log('entering editcontroller');
var personId=$routeParams.id;
$scope.person=PersonService.getPerson(personId)
.then(function(response)
{
	console.log(response.status)
	$scope.person=response.data;
}
,
null
)

$scope.update=function()		// display the value in editPerson.html
{
console.log('update function in editcontroller')
PersonService.updatePerson(personId,$scope.person)
.then(function(response)
{
console.log(response.status)
$location.path('/listOfPersons')
}
,
function(response)
{
console.log(response.status)	
}
)

}

})