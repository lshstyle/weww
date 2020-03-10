package com.example.react.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.react.entity.Chart;

@Mapper
public interface ChartMapper {

	List<Chart> list();
}
