package com.example.react.service;

import com.example.react.entity.User;

public interface LoginService {

	User getUserInfo(String userName, String passwd);
}
