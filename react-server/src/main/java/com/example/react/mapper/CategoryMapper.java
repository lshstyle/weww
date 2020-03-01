package com.example.react.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.react.entity.Category;

@Mapper
public interface CategoryMapper {

	List<Category> list(@Param("parentId") String parentId);
	
	
	void add(@Param("parentId") String parentId,
			 @Param("categoryName") String categoryName);
	
	void update(@Param("categoryId") String categoryId,
			    @Param("categoryName") String categoryName);
	
	void delete(@Param("categoryId") String categoryId);
	
	Category detail(@Param("categoryId") String categoryId);
}
