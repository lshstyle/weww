package com.example.react.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.react.entity.Menu;
import com.example.react.mapper.MenuMapper;
import com.example.react.service.MenuService;

@Service
public class MenuServiceImpl implements MenuService {

	@Autowired
	private MenuMapper menuMapper;
	
	@Override
	public List<Menu> list(String userId) {
		// TODO Auto-generated method stub
		List<Menu> list = menuMapper.list(userId);
		List<Menu> resultList = new ArrayList<Menu>();
		warpperMenus(list, resultList);
		return resultList;
	}
	
	private void warpperMenus(List<Menu> list, List<Menu> resultList) {
		
		for (Menu menu : list) {
			if ("0".equals(menu.getParentId())) {
				resultList.add(menu);
			} else {
				warpperMenusSub(menu, resultList);
			}
		}
	}
	
	private void warpperMenusSub(Menu menu, List<Menu> resultList) {
		if (resultList == null) {
			return;
		}
		for (Menu currMenu : resultList) {
			if (menu.getParentId().equals(currMenu.getId())) {
				if (currMenu.getChild() == null) {
					currMenu.setChild(new ArrayList<Menu>());
				}
				currMenu.getChild().add(menu);
			} else {
				warpperMenusSub(menu, currMenu.getChild());
			}
		}
	}

}
