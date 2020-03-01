package com.example.react.service;

import java.util.List;

import com.example.react.entity.Category;

public interface CategoryService {
	
	List<Category> list(String parentId);
	
	void add(String parentId, String categoryName);
	
	void update(String categoryId, String categoryName);
	
	void delete(String categoryId);
	
	Category detail(String categoryId);

}
