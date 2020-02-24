package com.example.react.util;

import java.io.Serializable;

public class Result<T> implements Serializable {

	private String msg;
	private String code;
	private T data;
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public T getData() {
		return data;
	}
	public void setData(T data) {
		this.data = data;
	}
	
	public Result() {
		super();
	}
	
	public Result(T data, HttpStatus httpStatus) {
		super();
		this.data = data;
		this.code = httpStatus.getCode();
		this.msg = httpStatus.getMsg();
	}
	
	public Result(HttpStatus httpStatus) {
		super();
		this.code = httpStatus.getCode();
		this.msg = httpStatus.getMsg();
	}
}
