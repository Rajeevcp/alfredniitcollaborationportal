package com.restsample.springmvc.services;

import java.util.List;

import com.restsample.springmvc.model.Person;

public interface PersonService 
{
List<Person> getAllPersons();
Person getPersonById(int id);
void savePerson(Person person);
}
