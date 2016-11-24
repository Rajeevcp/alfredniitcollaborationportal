package com.rest.springmvc.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.rest.springmvc.model.Person;

@Repository
public class PersonDaoImpl implements PersonDao 
{
	@Autowired
	private SessionFactory sessionFactory;

	public SessionFactory getSessionFactory() 
	{
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) 
	{
		this.sessionFactory = sessionFactory;
	}

	public List<Person> getAllPersons() 
	{
		Session session=sessionFactory.openSession();
		Query query=session.createQuery("from Person");
		List<Person> persons=query.list();
		session.close();
		return persons;
	}

	public Person getPersonById(int id) 
	{
		Session session=sessionFactory.openSession();
		// select * from persondemo where id=?
		Person person=(Person) session.get(Person.class,id);
		session.close();
		return person;
	}

	public void savePerson(Person person) 
	{
		Session session=sessionFactory.openSession();
		session.save(person);
		session.flush();
		session.close();
	}
	
	@Transactional
	public Person updatePerson(int id, Person person) {
		Session session=sessionFactory.openSession();
		Person currentPerson=(Person)session.get(Person.class,id); //persistent
		if(currentPerson==null)
			return null;
		
		session.merge(person);
		Person updatedPerson=(Person)session.get(Person.class,id);
		session.flush();
		session.close();
		return updatedPerson;
	}
}
