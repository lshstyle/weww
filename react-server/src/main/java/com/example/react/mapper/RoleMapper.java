package com.example.react.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.react.entity.Role;

@Mapper
public interface RoleMapper {
	
	List<Role> list();

	void add(@Param("name") String name);
	
	void updateAuth(@Param("id") String id,
			        @Param("authId") String authId); 
	
	void update(@Param("id") String id, 
			    @Param("name") String name);
}
