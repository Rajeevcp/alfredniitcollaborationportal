package com.niit.backend.implementation;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.niit.backend.dao.FileUploadDAO;
import com.niit.backend.model.UploadFile;
import com.niit.backend.model.User;

@Repository
public class FileUploadDAOImpl implements FileUploadDAO 
{
	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	@Transactional
	public void save(UploadFile uploadFile) 
	{
		Session session=sessionFactory.openSession();
		session.save(uploadFile);
		session.flush();
		session.close();
	}

	@Override
	public UploadFile getFile(String username) 
	{
		Session session=sessionFactory.openSession();
		Query query=session.createQuery("from UploadFile where username=?");
		query.setParameter(0, username);
        UploadFile uploadFile=(UploadFile)query.uniqueResult();
		session.close();
		return uploadFile;
	}

}