package com.restsample.springmvc.dao;

import java.util.List;

import com.restsample.springmvc.model.Person;

public interface PersonDao 
{
List<Person> getAllPersons();
Person getPersonById(int id);
void savePerson(Person person);
}
