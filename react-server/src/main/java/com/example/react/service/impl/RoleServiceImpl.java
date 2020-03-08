package com.example.react.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.react.entity.Role;
import com.example.react.mapper.RoleMapper;
import com.example.react.mapper.RolePermissionMapper;
import com.example.react.service.RoleService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Service
public class RoleServiceImpl implements RoleService {

	@Autowired
	private RoleMapper roleMapper;
	
	@Autowired
	private RolePermissionMapper rolePermissionMapper;
	
	public List<Role> list(Role role) {
		//PageHelper.startPage(role.getPageNum(), role.getPageSize());
		//List<Role> list =  roleMapper.list();
		//return new PageInfo<Role>(list);
		return roleMapper.list();
	}
	
	public void add(String name) {
		roleMapper.add(name);
	}
	
	public void updateAuth(Role role) {
		roleMapper.updateAuth(role.getId(), role.getAuthId());
	    rolePermissionMapper.deleteByRoleId(role.getId());
	    for (String menuId : role.getMenus()) {
	    	rolePermissionMapper.add(role.getId(), menuId);
	    }
	}

	@Override
	public void update(String id, String name) {
		// TODO Auto-generated method stub
		roleMapper.update(id, name);
	}
	
}
