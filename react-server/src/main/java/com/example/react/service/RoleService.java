package com.example.react.service;

import java.util.List;

import com.example.react.entity.Role;

public interface RoleService {
	
	List<Role> list(Role role);
	
	void add(String name);
	
	void update(String id, String name);

	void updateAuth(Role role);
	
}
