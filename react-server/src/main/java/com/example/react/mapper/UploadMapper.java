package com.example.react.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.react.entity.Upload;

@Mapper
public interface UploadMapper {
	
	void add(@Param("upload") Upload upload);

	Upload detail(@Param("uploadId") String uploadId);
	
	Integer delete(@Param("uploadName") String uploadName);
}
