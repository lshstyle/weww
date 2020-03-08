package com.example.react.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.react.entity.Menu;

@Mapper
public interface MenuMapper {

	List<Menu> list(@Param("userId") String userId);
}
