package com.rest.springmvc.dao;

import java.util.List;

import com.rest.springmvc.model.Person;

public interface PersonDao 
{
	List<Person> getAllPersons();
	Person getPersonById(int id);
	void savePerson(Person person);
}
