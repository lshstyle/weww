package com.example.react.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.react.entity.Category;
import com.example.react.mapper.CategoryMapper;
import com.example.react.service.CategoryService;

@Service
public class CategoryServiceImpl  implements CategoryService{

	@Autowired
	private CategoryMapper categoryMapper;
	
	public List<Category> list(String parentId) {
		return categoryMapper.list(parentId);
	}
	
	public void add (String parentId, String categoryName) {
		categoryMapper.add(parentId, categoryName);
	}
	
	public void update (String categoryId, String categoryName) {
		categoryMapper.update(categoryId, categoryName);
	}
	
	public void delete (String categoryId) {
		categoryMapper.delete(categoryId);
	}
	
	public Category detail(String categoryId) {
		return categoryMapper.detail(categoryId);
	}
}
