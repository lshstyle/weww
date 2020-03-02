package com.example.react.service.impl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.Base64.Encoder;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.react.entity.Upload;
import com.example.react.mapper.UploadMapper;
import com.example.react.service.UploadService;

@Service
public class UploadServiceImpl  implements UploadService {
	
	@Autowired
	private UploadMapper uploadMapper;
	
	@Value("${upload.path}")
	private String path;
	
	
	public Upload add(MultipartFile file) {
		Upload upload = new Upload();
		try {
			File uploadFile = new File(path);
			if (!uploadFile.exists()) {
				uploadFile.mkdirs();
			}
			String uuid = UUID.randomUUID().toString().replaceAll("-", "");
			String name = file.getOriginalFilename();
			Long size = file.getSize();
			byte[] bytes = file.getBytes();
			String suffixName = name.substring(name.lastIndexOf(".")+1).toLowerCase();
			String fileName = uuid + "." + suffixName;
			Path path = Paths.get(uploadFile.getAbsolutePath() + File.separator + fileName);
			Files.write(path, bytes);
			
		
		
			upload.setId(uuid);
			upload.setName(fileName);
			upload.setFileName(name);
			upload.setSize(size);
			upload.setPath(path.toString());
			upload.setType(suffixName);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		uploadMapper.add(upload);
		return upload;
	}

	public String read(String uploadId) {
		
		Upload upload = uploadMapper.detail(uploadId);
		
		byte[] data = null;
		String result = null;
		String prefix = "data:image/${type};base64,";
		try {
			InputStream inStream = new FileInputStream(upload.getPath());
			data = new byte[inStream.available()];
			inStream.read(data);
			inStream.close();
			Encoder encode = Base64.getEncoder();
			prefix = prefix.replace("${type}", upload.getType());
			result = prefix + encode.encodeToString(data);
			System.out.println(result);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return result;
	}
	
	public void delete(String uploadName) {
		File deleteFile = new File(path + File.separator + uploadName);
		deleteFile.delete();
		uploadMapper.delete(uploadName);
	}
}
