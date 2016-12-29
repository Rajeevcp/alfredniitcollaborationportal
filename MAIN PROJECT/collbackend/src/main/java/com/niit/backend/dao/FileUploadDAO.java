package com.niit.backend.dao;

import com.niit.backend.model.UploadFile;

public interface FileUploadDAO 
{
	void save(UploadFile uploadFile);
	UploadFile getFile(String username);
}
