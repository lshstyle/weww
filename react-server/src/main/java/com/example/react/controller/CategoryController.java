package com.example.react.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.react.entity.Category;
import com.example.react.service.CategoryService;
import com.example.react.util.HttpStatus;
import com.example.react.util.Result;

@RestController
@RequestMapping("/category")
public class CategoryController {

	@Autowired
	private CategoryService categoryService;
	
	@GetMapping("/list")
	public Result<List> list(@RequestParam("parentId") String parentId) {
		
		List<Category> list = categoryService.list(parentId);
		return new Result<List>(list,HttpStatus.SEARCH);
	}
	
	@PostMapping("/add")
	public Result add(@RequestBody Category category) {
		
		categoryService.add(category.getParentId(), category.getName());
		return new Result(HttpStatus.ADD);
	}
	
	@PostMapping("/update")
	public Result update(@RequestBody Category category) {
		
		categoryService.update(category.getId(), category.getName());
		return new Result(HttpStatus.UPDATE);
	}
	
	@GetMapping("/delete")
	public Result delete(@RequestParam("id") String categoryId) {
		categoryService.delete(categoryId);
		return new Result(HttpStatus.DELETE);
	}
	
	@GetMapping("/detail")
	public Result<Category> getCategoryById(@RequestParam("id") String categoryId) {
		Category category = categoryService.detail(categoryId);
		return new Result<Category>(category, HttpStatus.SEARCH);
	}
}
