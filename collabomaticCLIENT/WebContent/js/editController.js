app.controller('EditController',function($scope,$routeParams,$location,PersonService)
{
console.log('entering editcontroller');
var id=$routeParams.id;
$scope.person=PersonService.getPerson(id).success(function(person)
{
$scope.person=person	
}
);

$scope.update=function()
{
PersonService.updatePerson(id,$scope.person).success(function()
{
	
})
$location.path('/')
}

})