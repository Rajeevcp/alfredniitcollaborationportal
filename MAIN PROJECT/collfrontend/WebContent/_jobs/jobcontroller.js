app.controller('JobController',function($scope,$location,JobService)
	{
	$scope.job={jobTitle:'',jobDescription:'',skillsRequired:'',salary:'',location:''}
	$scope.jobs={}
	
	$scope.saveJob=function()
	{
		console.log('Entering saveJob() in jobcontroller.js')
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
			if(response.status==401)
			{
			$location.path('/login')
			}
			else
			{
			console.log(response.data.message)
			$location.path('/postJob')
			}
		})
	}
	
	function getAllJobs()
	{
		console.log('Entering getAllJobs()')
		JobService.getAllJobs()
		.then(function(response)
		{
		console.log("response.status");
		$scope.jobs=response.data;
		}
		,
		function(response)
		{
			console.log(response.status)
		})
	}
	getAllJobs();
})