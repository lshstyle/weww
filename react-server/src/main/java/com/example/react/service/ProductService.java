package com.example.react.service;

import com.example.react.entity.Product;
import com.github.pagehelper.PageInfo;

public interface ProductService {

	PageInfo<Product> list(Product product);
	
	void updateStatus(String productId, String status);
	
	void update(Product product);
	
	void delete(String productId);
}
