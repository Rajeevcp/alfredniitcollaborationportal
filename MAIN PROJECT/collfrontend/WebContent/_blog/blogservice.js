app.factory('BlogService',function($http)
{
	var blogService=this;
	blogService.addPost=function(blogPost)
	{
		console.log('addPost in service')
		return $http.post("http://localhost:8181/collbackend/blog",blogPost);
	}
	
	blogService.getBlogPosts=function()
	{
		console.log('getBlogPosts in service')
		return $http.get("http://localhost:8181/collbackend/blog/list")
	}
	
	blogService.getBlogDetail=function(id)
	{
		console.log('getBlogDetails in service')
		return $http.get("http://localhost:8181/collbackend/blog/get/"+ id)
	}
	
	blogService.addComment=function(comment)
	{
		return $http.post("http://localhost:8181/collbackend/blog/comment",comment)
	}
	
	blogService.getComments=function(blogId)
	{
		console.log('getComments in service')
		return $http.get("http://localhost:8181/collbackend/blog/getcomments/"+blogId)
	}
	
	return blogService;
})