package com.niit.backend.controllers;

import java.io.File;
import java.io.FileOutputStream;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.niit.backend.dao.FileUploadDAO;
import com.niit.backend.dao.UserDao;
import com.niit.backend.model.User;
import com.niit.backend.model.Error;
import com.niit.backend.model.UploadFile;

@RestController
public class UserController 
{
Logger logger=LoggerFactory.getLogger(this.getClass()); 
	
@Autowired
private UserDao userDao;

@Autowired
private FileUploadDAO fileUploadDao;

@RequestMapping(value="/login",method=RequestMethod.POST)
public ResponseEntity<?> login(@RequestBody User user,HttpSession session) throws InterruptedException
{
	logger.debug("Entering UserController => login()");		// ? means it can return any type of object [Error, User]
	logger.debug("USERNAME: " + user.getUsername() + " PASSWORD: " + user.getPassword() );
	User validUser=userDao.authenticate(user);				// the method login has to return any Type  
	if(validUser==null)										// if the user is invalid - return Error object with status code
	{														// if the user is valid  - return User object with status code
		logger.debug("validUser is null");
		Error error=new Error(1,"The entered Username and password does not exist...");
		return new ResponseEntity<Error>(error,HttpStatus.UNAUTHORIZED); 					//401
	}
	else
	{														//isOnline - set true when the user login
		session.setAttribute("user", validUser);			//isOnline -set false when the user logout
		validUser.setOnline(true);
		userDao.updateUser(validUser); 						// to update online status in db
		logger.debug("validUser is NOT null");
		
		UploadFile getUploadFile=fileUploadDao.getFile(user.getUsername()); //select * from proj2_profile_pics where username='adam';
		if(getUploadFile!=null)
		{
	  	String name=getUploadFile.getFileName();
	  	System.out.println(getUploadFile.getData());
	  	byte[] imagefiles=getUploadFile.getData();
	  	try
	  	{
	  		String path="C:/Users/Alfred/Desktop/alfredniitcollaborationportal/alfredniitcollaborationportal/MAIN PROJECT/collbackend/src/main/webapp/WEB-INF/resources/images/"+user.getUsername();
	  		File file=new File(path);										//file.mkdirs();
	  		FileOutputStream fos = new FileOutputStream(file);				//to Write some data 
	  		fos.write(imagefiles);
	  		fos.close();
	  	}
	  	catch(Exception e)
	  	{
	  		e.printStackTrace();
	  	}
		}
		Thread.sleep(5000);
		return new ResponseEntity<User>(validUser,HttpStatus.OK);							//200
	}
}

@RequestMapping(value="/register",method=RequestMethod.POST)
public ResponseEntity<?> registerUser(@RequestBody User user)
{
	try
	{
	logger.debug("Entering UserController => register() "+user);
	user.setStatus(true);
	user.setOnline(false);
	User savedUser=userDao.registerUser(user);
	logger.debug("User ID generated is: "+savedUser.getId());
	if(savedUser.getId()==0)
	{
		Error error=new Error(2, "Couldn't insert user details");
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
		Error error=new Error(2,"Couldn't insert user details. These fields cannot have null/duplicate values. "); /* + e.getMessage());*/
		return new ResponseEntity<Error>(error , HttpStatus.INTERNAL_SERVER_ERROR);
	}
}

@RequestMapping(value="/logout",method=RequestMethod.PUT)
public ResponseEntity<?> logout(HttpSession session)
{
	User user=(User)session.getAttribute("user");
	if(user!=null)
	{
		user.setOnline(false);
		userDao.updateUser(user);
		try
		{
        //change according to your workspace path and project name
		String path="C:/Users/Alfred/Desktop/alfredniitcollaborationportal/alfredniitcollaborationportal/MAIN PROJECT/collbackend/src/main/webapp/WEB-INF/resources/images/"+user.getUsername();
		File file=new File(path);
		System.out.println(file.delete());
		}
		catch(Exception e)
		{
		e.printStackTrace();
		}
	}
	session.removeAttribute("user");
	session.invalidate();
	return new ResponseEntity<Void>(HttpStatus.OK);
}

@RequestMapping(value="/getUsers",method=RequestMethod.GET)
public ResponseEntity<?> getAllUsers(HttpSession session)
{
	User user=(User)session.getAttribute("user");
	if(user==null)
	return new	ResponseEntity<Error>(new Error(1,"Unauthorized user"),HttpStatus.UNAUTHORIZED);
	else
	{
		List<User> users=userDao.getAllUsers(user);
		for(User u:users)
			System.out.println("isOnline: " + u.isOnline());
		return new ResponseEntity<List<User>>(users,HttpStatus.OK);
	}
}

}