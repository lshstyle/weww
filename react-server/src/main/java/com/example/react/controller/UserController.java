package com.example.react.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.react.entity.User;
import com.example.react.service.UserService;
import com.example.react.util.HttpStatus;
import com.example.react.util.Result;
import com.example.react.util.ResultPage;
import com.github.pagehelper.PageInfo;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/list")
	public ResultPage<User> list(@RequestBody User user) {
		PageInfo<User> list = userService.list(user);
		return new ResultPage<User>(list, HttpStatus.SEARCH);
	}
	
	@PostMapping("/update")
	public Result update(@RequestBody User user) {
		userService.update(user);
		return new Result(HttpStatus.UPDATE);
	}
	
	@GetMapping("/delete")
	public Result delete(@RequestParam("userId") String userId) {
		userService.delete(userId);
		return new Result(HttpStatus.DELETE);
	}
}
