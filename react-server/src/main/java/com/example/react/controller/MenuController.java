package com.example.react.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.react.entity.Menu;
import com.example.react.service.MenuService;
import com.example.react.util.HttpStatus;
import com.example.react.util.Result;

@RestController
@RequestMapping("/menu")
public class MenuController {
	
	@Autowired
	private MenuService menuService;
	
	@GetMapping("/list")
	public Result<List> list(@RequestParam("userId") String userId) {
		List<Menu> data = menuService.list(userId);
		return new Result<List>(data, HttpStatus.SEARCH);
	}
	
	

}
