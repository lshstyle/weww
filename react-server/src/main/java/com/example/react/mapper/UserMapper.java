package com.example.react.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.react.entity.User;

@Mapper
public interface UserMapper {

	User getUserInfo(@Param("name") String userName, 
			         @Param("passwd") String passwd);
	
	List<User> list();
	
	void add(@Param("user") User user);
	
	void update(@Param("user") User user);
	
	void delete(@Param("userId") String userId);
	
}
