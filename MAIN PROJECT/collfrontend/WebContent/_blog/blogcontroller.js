app.controller('BlogController',function($scope,$location,BlogService)
{
	$scope.blogPost={};
	$scope.blogPosts=[]

	$scope.submit=function()
	{
		console.log('Entering BlogController, submit()')
		BlogService.addPost($scope.blogPost)
		.then(function(response)
		{
			console.log(response.data);
			console.log(response.status);
			alert("Added Successfully !")
			$location.path('/getAllBlogs')
		}
		,
		function(response)
		{
			console.log(response.data);
			console.log(response.status);
		})
	}
	
	$scope.blogPosts=BlogService.getBlogPosts()
	.then(function(response)
	{
		console.log(response.status)
		console.log(response.data)
		$scope.blogPosts=response.data
	}
	,
	function(response)
	{
		console.log(response.status)
		console.log(response.data)
	})
})