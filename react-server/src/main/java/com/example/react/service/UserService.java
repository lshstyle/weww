package com.example.react.service;

import com.example.react.entity.User;
import com.github.pagehelper.PageInfo;

public interface UserService {
	
	PageInfo<User> list(User user);
	
	void delete(String userId);
	
	void update(User user);

}
