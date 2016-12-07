package com.rest.springmvc.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;

@Entity
@Table(name="persondemo")
public class Person 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int personId;
	@NotEmpty(message="Mandatory field")
	private String name;
	@NotEmpty(message="Mandatory field")
	private String email;
	//@Length(min=5,max=10)
	@NotEmpty(message="Mandatory field")
	private String phoneno;
	//@NotEmpty(message="Mandatory field")
	private Date dob;

	public int getPersonId() {
		return personId;
	}
	public void setPersonId(int personId) {
		this.personId = personId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
}
