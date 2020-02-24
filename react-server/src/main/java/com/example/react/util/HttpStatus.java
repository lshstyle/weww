package com.example.react.util;

public enum HttpStatus {

	SEARCH("1000", "查询成功"),
	ADD("1001", "新增成功"),
	UPDATE("1002", "更新成功"),
	DELETE("1003", "删除成功"),
	ERROR("9999", "请求失败");

	private String code;
	private String msg;

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	HttpStatus(String code, String msg) {
		this.code = code;
		this.msg = msg;
	}

}
