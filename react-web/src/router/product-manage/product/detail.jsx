import React from 'react'
import {Card, Icon, List,} from 'antd'

import {reqCategoryDetail} from '../../../api'
import {BASE_IMG_URL} from '../../../utils/constants' 

const Item = List.Item
export default class ProductDetail extends React.Component {
    state = {
        categoryName: '',
        parentCategoryName: ''
    }

    async componentDidMount() {
        const {category, parentCategory} = this.props.location.state.product
        if (parentCategory === '0') {
            const result = await reqCategoryDetail(category)
            this.setState ({categoryName:result.data.name})
        } else {
            const results = await Promise.all([reqCategoryDetail(category), reqCategoryDetail(parentCategory)])
           
            const categoryName = results[0].data.name
            const parentCategoryName = results[1].data.name
            this.setState({
                categoryName:categoryName,
                parentCategoryName: parentCategoryName
            })
        }
    }
    render() {
        const {name, desc,price,imgs,detail} = this.props.location.state.product
        const {categoryName, parentCategoryName} = this.state
        const title =(
            <span>
                <Icon type='arrow-left' 
                      style={{ color: 'green', marginRight:15, fontSize:18}}
                      onClick={() => this.props.history.goBack()}
                />
                <span>商品详情</span>
            </span>
        )
        return (
            <Card title={title} className="product-detail">
                <List>
                    <Item>
                        <span className="left">商品名称：</span>
                        <span className="right">{name}</span>
                    </Item>
                    <Item>
                        <span className="left">商品描述：</span>
                        <span className="right">{desc}</span>
                    </Item>
                    <Item >
                        <span className="left">商品价格：</span>
                        <span className="right">{price}</span>
                    </Item>
                    <Item >
                        <span className="left">所属分类：</span>
                        <span className="right">
                            {parentCategoryName}{categoryName ? '-->' + categoryName : ''}
                        </span>
                    </Item>
                    <Item >
                        <span className="left">商品图片：</span>
                        <span className="right">
                            {imgs.split(',').map(img => (
                                <img
                                    className='product-img'
                                    src = {BASE_IMG_URL + img}
                                    alt='图片' />
                            ))
                        }
                        </span>
                    </Item>
                    <Item >
                        <span className="left">商品详情：</span>
                        <span className="right" dangerouslySetInnerHTML={{__html: detail}}></span>
                    </Item>
                </List>
            </Card>
        )
    }
}