package com.example.react.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserRoleMapper {

	void add(@Param("userId") String userId,
			 @Param("roleId") String roleId);
	
	void delete(@Param("userId") String userId);
	
}
