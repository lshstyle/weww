package com.example.react.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.react.entity.Role;
import com.example.react.service.RoleService;
import com.example.react.util.HttpStatus;
import com.example.react.util.Result;

@RestController
@RequestMapping("/role")
public class RoleController {
	
	@Autowired
	private RoleService roleService;
	
	
	@PostMapping("/list")
	public Result<List> list(@RequestBody Role role) {
		List<Role> list = roleService.list(role);
		return new Result<List>(list, HttpStatus.SEARCH);
	}
	
	@GetMapping("/add")
	public Result add(@RequestParam("name") String name) {
		roleService.add(name);
		return new Result(HttpStatus.ADD);
	}
	
	@PostMapping("/updateAuth")
	public Result updateAuth(@RequestBody Role role) {
		roleService.updateAuth(role);
		return new Result(HttpStatus.UPDATE);
	}
	
}
