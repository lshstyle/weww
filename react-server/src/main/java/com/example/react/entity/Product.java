package com.example.react.entity;

import java.math.BigDecimal;

public class Product extends Page {

	private String id;
	private String name;
	private String desc;
	private String imgs;
	private String status;
	private BigDecimal price;
	private String detail;
	private String category;
	private String parentCategory;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategoryId(String category) {
		this.category = category;
	}

	public String getParentCategory() {
		return parentCategory;
	}

	public void setParentCategoryId(String parentCategory) {
		this.parentCategory = parentCategory;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String getImgs() {
		return imgs;
	}

	public void setImgs(String imgs) {
		this.imgs = imgs;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

}
