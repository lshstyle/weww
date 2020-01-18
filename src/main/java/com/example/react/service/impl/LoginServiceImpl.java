package com.example.react.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.example.react.service.LoginService;

@Service
public class LoginServiceImpl implements LoginService {

	@Override
	public Map<String, Object> getUserInfo(String userName, String passwd) {
		// TODO Auto-generated method stub
		
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("userName", userName);
	    resultMap.put("password", passwd);
	    resultMap.put("status", 0);
		return resultMap;
	}

}
