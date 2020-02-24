package com.example.react.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.react.entity.User;

@Mapper
public interface UserMapper {

	User getUserInfo(@Param("name") String userName, 
			         @Param("passwd") String passwd);
	
}
