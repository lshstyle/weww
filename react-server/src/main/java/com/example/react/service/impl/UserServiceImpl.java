package com.example.react.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.react.entity.User;
import com.example.react.mapper.UserMapper;
import com.example.react.mapper.UserRoleMapper;
import com.example.react.service.UserService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserMapper userMapper;
	
	@Autowired
	private UserRoleMapper userRoleMapper;
	
	public PageInfo<User> list(User user) {
		PageHelper.startPage(user.getPageNum(), user.getPageSize());
		List<User> list =  userMapper.list();
		return new PageInfo<User>(list);
	}
	
	public void update(User user) {
		if (user != null && user.getId() != null) {
			userMapper.update(user);
			userRoleMapper.delete(user.getId());
			
		} else {
			userMapper.add(user);
		}
		
		for (String roleId : user.getRoles()) {
			userRoleMapper.add(user.getId(), roleId);
		}
	}
	
	public void delete(String userId) {
		userMapper.delete(userId);
		userRoleMapper.delete(userId);
	}
}
