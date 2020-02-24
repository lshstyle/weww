package com.example.react.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.react.entity.Product;
import com.example.react.service.ProductService;
import com.example.react.util.HttpStatus;
import com.example.react.util.ResultPage;
import com.github.pagehelper.PageInfo;

@RestController
@RequestMapping("/product")

public class ProductController {

	@Autowired
	private ProductService productService;
	
	@PostMapping("/list")
	public ResultPage<Product> list(@RequestBody Product product) {
		PageInfo<Product> list = productService.list(product);
		return new ResultPage<Product>(list, HttpStatus.SEARCH);
	}
}
