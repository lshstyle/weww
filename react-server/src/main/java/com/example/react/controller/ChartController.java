package com.example.react.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.react.entity.Chart;
import com.example.react.service.ChartService;
import com.example.react.util.HttpStatus;
import com.example.react.util.Result;

@RestController
@RequestMapping("/chart")
public class ChartController {

	@Autowired
	private ChartService chartService;
	
	@GetMapping("/list")
	public Result<List> list() {
		List<Chart> list = chartService.list();
		return new Result<List>(list, HttpStatus.SEARCH);
	}
}
