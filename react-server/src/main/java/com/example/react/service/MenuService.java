package com.example.react.service;

import java.util.List;

import com.example.react.entity.Menu;

public interface MenuService {
	
	List<Menu> list(String userId);

}
