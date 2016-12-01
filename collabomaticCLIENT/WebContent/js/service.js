app.factory('PersonService',function($http)
{
	//change the BASE_URL  according to your server port number and your backend application name 
	var BASE_URL="http://localhost:8181/collabomatic";
	var personService=this;		//instantiation
	
	personService.fetchAllPersons=function()
	{
		console.log('entering fetchallpersons in service')
		//   '/person'  HttpMethod - GET
		return $http.get("http://localhost:8181/collabomatic/person")
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
	};
	
	personService.savePerson=function(person)
	{
		console.log('entering save person in service')
		return $http.post(BASE_URL + "/person",person)
		.then(function(response)
		{
			console.log(response.status)
			console.log(response.headers)
			return response.status
		},
		function(response)
		{
			console.log(response.status)
			return response.status
		})
	}
	return personService;
})