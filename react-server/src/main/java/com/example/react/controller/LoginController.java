package com.example.react.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.react.entity.User;
import com.example.react.service.LoginService;
import com.example.react.util.HttpStatus;
import com.example.react.util.Result;

@RestController
@RequestMapping("/login")
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	@GetMapping("/getUserInfo")
	public Result<User> getUserInfo(@RequestParam("userName") String userName,
	                                @RequestParam("passwd") String passwd){
		User data = loginService.getUserInfo(userName, passwd);
		if (data != null) {
			return new Result<User>(data, HttpStatus.SEARCH);
		} else {
			return new Result<User>(data, HttpStatus.ERROR);
		}
	}
}
