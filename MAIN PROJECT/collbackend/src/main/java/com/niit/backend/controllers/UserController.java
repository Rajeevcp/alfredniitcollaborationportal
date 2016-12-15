package com.niit.backend.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.niit.backend.dao.UserDao;
import com.niit.backend.model.User;
import com.niit.backend.model.Error;

@RestController
public class UserController 
{
	
Logger logger=LoggerFactory.getLogger(this.getClass()); 
	
@Autowired
private UserDao userDao;
//isOnline - set true when the user login
//isOnline -set false when the user logout

@RequestMapping(value="/login",method=RequestMethod.POST)
public ResponseEntity<?> login(@RequestBody User user)
{
	// ? means it can return any type of object [Error, User]
	// the method login has to return any Type  
	// if the user is invalid - return Error object with status code
	// if the user is valid  - return User object with status code
	
	logger.debug("Entering USERCONTROLLER : LOGIN");
	User validUser=userDao.authenticate(user);
	if(validUser==null)
	{
		logger.debug("validuser is null");
		Error error=new Error(1,"Username and password doesnt exists...");
		return new ResponseEntity<Error>(error,HttpStatus.UNAUTHORIZED); //401
	}
	else
	{
		validUser.setOnline(true);
		userDao.updateUser(validUser); // to update online status in db
		logger.debug("validuser is NOT null");
		return new ResponseEntity<User>(validUser,HttpStatus.OK);//200
	}
}

// '?' - any type [User, Error]
@RequestMapping(value="/register",method=RequestMethod.POST)
public ResponseEntity<?> registerUser(@RequestBody User user)
{
	// client will send only username, password, email, and role
	try
	{
	logger.debug("USERCONTROLLER => REGISTER "+user);
	user.setStatus(true);
	user.setOnline(false);
	User savedUser=userDao.registerUser(user);
	logger.debug("User ID generated is "+savedUser.getId());
	if(savedUser.getId()==0)
	{
		Error error=new Error(2, "couldn't insert user details");
		return new ResponseEntity<Error>(error, HttpStatus.CONFLICT);
	}
	else 
	{
		return new ResponseEntity<User>(savedUser, HttpStatus.OK);
	}
	}
	
	catch(Exception e)
	{
		e.printStackTrace();
		Error error=new Error(2,"Couldnt insert user details. Cannot have null/duplicate values " + e.getMessage());
		return new ResponseEntity<Error>(error , HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
}