package com.example.react.service;

import java.util.List;

import com.example.react.entity.Role;
import com.github.pagehelper.PageInfo;

public interface RoleService {
	
	PageInfo<Role> list(Role role);
	
	void add(String name);
	
	void update(String id, String name);

	void updateAuth(Role role);
	
	List<Role> listAll();
}
