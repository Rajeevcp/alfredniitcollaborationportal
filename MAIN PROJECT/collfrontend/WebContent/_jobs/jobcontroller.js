app.controller('JobController',function($scope,$location,JobService)
	{
	$scope.job={jobTitle:'',jobDescription:'',skillsRequired:'',salary:'',location:''}
	$scope.saveJob=function()
	{
		console.log('Entering saveJob in jobcontroller.js')
		JobService.saveJob($scope.job)
		.then
		(function(response)
		{
			console.log("Successfully inserted the job details");
			alert("The job details have been posted successfully!");
			$location.path('/home');
		}
		,
		function(response)
		{
			console.log("Posting Failure: " +response.status);
			console.log(response.data.message)
			$location.path('/postJob')
		})
	}
})