package com.example.react.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.react.entity.Product;

@Mapper
public interface ProductMapper {

	List<Product> list(@Param("product") Product product);
}
