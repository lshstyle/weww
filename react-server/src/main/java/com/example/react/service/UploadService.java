package com.example.react.service;

import org.springframework.web.multipart.MultipartFile;

import com.example.react.entity.Upload;

public interface UploadService {

	Upload add(MultipartFile file);
	
	String read(String uploadId);
	
	void delete(String uploadName);
	
}
