package com.example.react.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.react.service.LoginService;

@RestController
@RequestMapping("/login")
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	@GetMapping("/getUserInfo")
	public Map<String, Object> getUserInfo(@RequestParam("userName") String userName,
			                               @RequestParam("passwd") String passwd){
		return loginService.getUserInfo(userName, passwd);
	}
}
