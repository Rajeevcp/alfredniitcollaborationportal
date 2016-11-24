package com.rest.springmvc.services;

import java.util.List;

import com.rest.springmvc.model.Person;

public interface PersonService 
{
	List<Person> getAllPersons();
	Person getPersonById(int id);
	void savePerson(Person person);
	Person updatePerson(int id,Person person);
}
