package com.example.react.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.react.entity.Product;

@Mapper
public interface ProductMapper {

	List<Product> list(@Param("product") Product product);
	
	
	void updateStatus(@Param("id") String productId,
			          @Param("status") String status);
	
	void update(@Param("product") Product product);
	
	void add(@Param("product") Product product);
	
	void delete(@Param("productId") String productId);
}
