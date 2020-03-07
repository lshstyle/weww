package com.example.react.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface RolePermissionMapper {
	
	List<String> getMenusByRoleId(@Param("roleId") String roleId);

	void add(@Param("roleId") String roleId,
			    @Param("menuId") String menuId);
	
	void deleteByRoleId(@Param("roleId") String roleId);
}
