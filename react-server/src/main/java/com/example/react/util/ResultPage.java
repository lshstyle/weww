package com.example.react.util;

import java.io.Serializable;
import java.util.List;

import com.github.pagehelper.PageInfo;

public class ResultPage<T> implements Serializable {

	private String code;
	private String msg;
	private Integer pageSize;
	private Integer pageNum;
	private Long total;
	private Integer pages;
    private List<T> data;
	public Integer getPageSize() {
		return pageSize;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}

	public Integer getPageNum() {
		return pageNum;
	}

	public void setPageNum(Integer pageNum) {
		this.pageNum = pageNum;
	}

	public Long getTotal() {
		return total;
	}

	public void setTotal(Long total) {
		this.total = total;
	}

	public Integer getPages() {
		return pages;
	}

	public void setPages(Integer pages) {
		this.pages = pages;
	}
	

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

	public List<T> getData() {
		return data;
	}

	public void setData(List<T> data) {
		this.data = data;
	}

	public ResultPage(PageInfo<T> pageInfo, HttpStatus httpStatus) {
		super();
		this.setData(pageInfo.getList());
		this.pageNum = pageInfo.getPageNum();
		this.pageSize = pageInfo.getPageSize();
		this.pages = pageInfo.getPages();
		this.total = pageInfo.getTotal();
		this.setCode(httpStatus.getCode());
		this.setMsg(httpStatus.getMsg());
	}

}
