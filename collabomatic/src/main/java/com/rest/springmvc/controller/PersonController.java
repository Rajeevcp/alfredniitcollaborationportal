package com.rest.springmvc.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.util.UriComponentsBuilder;

import com.rest.springmvc.model.Person;
import com.rest.springmvc.services.PersonService;

@Controller
public class PersonController 
{
	@Autowired
	private PersonService personService; 

	public PersonService getPersonService() 
	{
		return personService;
	}

	public void setPersonService(PersonService personService) 
	{
		this.personService = personService;
	}

	@RequestMapping(value="/person", method=RequestMethod.GET) 	// http://localhost:8181/crudbyrestapi/person - REST endpoint
	public ResponseEntity<List<Person>> getAllPersons()			// jackson - converts list of persons to JSON format
	{															// http method is GET
		System.out.println(personService.getAllPersons());
		List<Person> persons=personService.getAllPersons();
		if(persons.isEmpty())
			return new ResponseEntity<List<Person>>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Person>>(persons,HttpStatus.OK);
	}

	@RequestMapping(value="/person/{id}", method=RequestMethod.GET)	     //http://localhost:8181/crudbyrestapi/person/2
	public ResponseEntity<Person> getPersonById(@PathVariable(value="id") int id)	
	{																
		Person person = personService.getPersonById(id);
		if(person==null)
			return new ResponseEntity<Person>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<Person>(person,HttpStatus.OK);
	}

	@RequestMapping(value="/person",method=RequestMethod.POST)
	//RequestBody - to convert JSON data to java object
	//ResponseBody -> servet to client
	//RequestBody -> client to server
	public ResponseEntity<Void> createPerson(@RequestBody Person person,
			UriComponentsBuilder build){
		personService.savePerson(person);
		HttpHeaders headers=new HttpHeaders();
		//http://localhost:8080/appname/person/210
		URI urilocation=
				build.path("/person/")
				.path(String.valueOf(person.getPersonId()))
				.build()
				.toUri();
		headers.setLocation(urilocation);
		return new ResponseEntity<Void>(headers,HttpStatus.CREATED);
	}
}
