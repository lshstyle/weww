package com.example.react.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.react.entity.Product;
import com.example.react.mapper.ProductMapper;
import com.example.react.service.ProductService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductMapper productMapper;
	
	public PageInfo<Product> list(Product product) {
		PageHelper.startPage(product.getPageNum(), product.getPageSize());
		List<Product> list =  productMapper.list(product);
		return new PageInfo<Product>(list);
	}
	
	public void updateStatus(String productId, String status) {
		productMapper.updateStatus(productId, status);
	}

	public void update(Product product) {
		if (product != null && product.getId() != null) {
			productMapper.update(product);
		} else {
			productMapper.add(product);
		}
	}
	
	public void delete(String productId) {
		productMapper.delete(productId);
	}
	
}
