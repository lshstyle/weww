package com.example.react.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.react.entity.Upload;
import com.example.react.service.UploadService;
import com.example.react.util.HttpStatus;
import com.example.react.util.Result;

@RestController
@RequestMapping("/upload")
public class UploadController {
	
	@Autowired
	private UploadService uploadService;
	
	@PostMapping("/add")
	public Result<Upload> add(@RequestParam("file") MultipartFile file ) {
		if (file.isEmpty()) {
			return new Result(HttpStatus.ERROR);
		} 
		Upload upload = uploadService.add(file);
		return new Result<Upload>(upload, HttpStatus.ADD);
	}
	
	@GetMapping("read")
	public Result<String> read(@RequestParam("uploadId") String uploadId) {
		String result = uploadService.read(uploadId);
		return new Result<String>(result, HttpStatus.SEARCH);
	}
	
	@GetMapping("delete")
	public Result delete(@RequestParam("uploadName") String uploadName) {
		uploadService.delete(uploadName);
		return new Result(HttpStatus.DELETE);
	}

}
