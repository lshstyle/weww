package com.example.react.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.react.entity.User;
import com.example.react.mapper.UserMapper;
import com.example.react.service.LoginService;

@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	private UserMapper userMapper;
	
	
	@Override
	public User getUserInfo(String userName, String passwd) {
		// TODO Auto-generated method stub
		return userMapper.getUserInfo(userName, passwd);
	}

}
