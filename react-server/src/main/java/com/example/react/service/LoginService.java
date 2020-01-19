package com.example.react.service;

import java.util.Map;

public interface LoginService {

	Map<String, Object> getUserInfo(String userName, String passwd);
}
