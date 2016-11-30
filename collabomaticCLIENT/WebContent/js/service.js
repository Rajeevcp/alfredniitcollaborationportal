app.factory('PersonService',function($http)
{
	//change the BASE_URL  according to your server port number and your backend application name 
	var BASE_URL="http://localhost:8181/collabomatic";
	var personService=this;
	personService.fetchAllPersons=function()
	{
		console.log('entering fetchallpersons in service')
		//   '/person'  HttpMethod - GET
		return $http.get(BASE_URL+"/person")
		.then(function(response)
		{
			//response - object returned from the back end
			//data, status, headers,statusText
			//data- list of persons
			console.log(response.data)
			console.log(response.status)
			return response.data
		},
		
		function(response)
		{
			console.log(response.data)
			return response.data
		})
	}
	return personService;
})