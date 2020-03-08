package com.example.react.entity;

import java.util.List;

public class Role{

	private String id;
	private String name;
	private String authId;
	private String authName;
	private String authTime;
	private String createTime;
	private List<String> menus;
	
	public List<String> getMenus() {
		return menus;
	}
	public void setMenus(List<String> menus) {
		this.menus = menus;
	}
	public String getCreateTime() {
		return createTime;
	}
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getAuthId() {
		return authId;
	}
	public void setAuthId(String authId) {
		this.authId = authId;
	}
	public String getAuthName() {
		return authName;
	}
	public void setAuthName(String authName) {
		this.authName = authName;
	}
	public String getAuthTime() {
		return authTime;
	}
	public void setAuthTime(String authTime) {
		this.authTime = authTime;
	}
	
	
}
