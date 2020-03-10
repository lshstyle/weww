package com.example.react.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.react.entity.Chart;
import com.example.react.mapper.ChartMapper;
import com.example.react.service.ChartService;

@Service
public class ChartServiceImpl  implements ChartService{

	@Autowired
	private ChartMapper chartMapper;
	
	public List<Chart> list() {
		return chartMapper.list();
	}
}
