import React from 'react'
import {Card, Select, Input, Button,Icon, Table,message} from 'antd'

import LinkButton from '../../../components/link-button'
import httpStatus from '../../../utils/httpStatus'
import {reqProducts,reqProductUpdateStatus,reqProductDelete} from '../../../api'

export default class ProductHome extends React.Component {
    state = {
        products: [],
        total: 0,
        defaultPageSize: 5,
        loading: false,
        searchName: '',
        searchType: 'name'
    }

    initColumns = () => {
        this.columns = [
            {
              title: '商品名称',
              width: 100,
              dataIndex: 'name'
            },
            {
              title: '商品描述',
              dataIndex: 'desc'
            },
            {
              title: '价格',
              dataIndex: 'price',
              render: (price) => ( '¥' + price)
            },
            {
                title: '状态',
                width: 100,
                render: (product) => {
                    const {status, id} = product
                    return (
                        <span>
                            <Button type='primary' 
                                    onClick ={ () => this.updateStatus(id, status === '1'? '2' : '1')}
                            >
                                {status === '1' ? '下架' : '上架'}
                            </Button>
                            <span>{status === '1' ? '在售' : '已下架'}</span>
                        </span>
                    )
                }
              },
              {
                title: '操作',
                width: 120,
                render: (product) => {
                    return (
                        <span>
                           <LinkButton onClick={ ()=> this.props.history.push('/product-manage/product/detail',{product})}>详情</LinkButton>
                           <LinkButton onClick={ ()=> this.props.history.push('/product-manage/product/addUpdate', {product})}>修改</LinkButton>
                           <LinkButton onClick={ ()=> this.productDelete(product)}>删除</LinkButton>
                        </span>
                    )
                }
              }
          ]
    }

    updateStatus = async (productId, status) => {
        const result = await reqProductUpdateStatus(productId, status)
        if (result.code === httpStatus.UPDATE) {
            message.info("操作成功")
            this.getProducts(1)
        }
    }

    productDelete = async(product) => {
        const productId = product.id
        const result = await reqProductDelete(productId)
        if (result.code === httpStatus.DELETE) {
            message.info("操作成功")
            this.getProducts(1)
        }
    }

    getProducts = async (pageNum) => {
        this.pageNum = pageNum
        this.setState({loading:true})
        const {defaultPageSize, searchType, searchName} = this.state
        const result = await reqProducts(pageNum, defaultPageSize,searchType, searchName)
        this.setState({loading:false})
        if (result.code === httpStatus.SEARCH) {
            const products = result.data
            const total = result.total
            this.setState({products, total})
        }
    }

    componentWillMount() {
        this.initColumns()
    }

    componentDidMount() {
        this.getProducts(1)
    }

    render() {
        const {products, defaultPageSize, total,loading, searchType,searchName} = this.state
        const title = (
            <span>
                <Select value={searchType} style={{width:150}} 
                        onChange={value => this.setState({searchType:value})}>
                    <option value='name'>按名称搜索</option>
                    <option value='desc'>按描述搜索</option>
                </Select>
                <Input placeholder='关键字'  style={{width:150,margin: '0 15px'}} value={searchName} 
                        onChange={event => this.setState({searchName: event.target.value})}/>
                <Button  type='primary' onClick={() => {this.getProducts(1)}}>搜索</Button>
            </span>
            )
        const extra = (
            <Button type='primary' onClick= { () => this.props.history.push('/product-manage/product/addUpdate')} >
            <Icon type='plus' />
                添加商品
            </Button>
        )
         
          
        return (
            <Card  title={title}  extra={extra} >
                <Table
                    bordered
                    loading = {loading}
                    rowKey = 'id'
                    dataSource={products}
                    columns={this.columns}
                    pagination = {{
                        current: this.pageNum,
                        defaultPageSize, 
                        showQuickJumper: true, 
                        total,
                        onChange: this.getProducts
                    }}
                >

                </Table>
            </Card>
        )
    }
}