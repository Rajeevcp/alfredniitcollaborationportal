var app=angular.module('myApp',[])
app.controller('samplecontroller',function(){
	var samCtrl=this;
	samCtrl.message="Hello Alfred";
	samCtrl.person={id:1,name:'john',email:'john@abc.com'}
	samCtrl.persons=[{id:1,name:'john',email:'john@abc.com'},
	                 {id:2,name:'james',email:'james@abc.com'},
	                 {id:3,name:'adam',email:'adam@abc.com'}]
	
	samCtrl.square=function()
	{
		samCtrl.answer=samCtrl.number * samCtrl.number;
	}
})