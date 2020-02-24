import React from 'react'
import {Card, Select, Input, Button,Icon, Table} from 'antd'

import LinkButton from '../../../components/link-button'
import httpStatus from '../../../utils/httpStatus'
import {reqProducts} from '../../../api'

export default class ProductHome extends React.Component {
    state = {
        products: [],
        total: 0,
        defaultPageSize: 5,
        loading: false
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
                dataIndex: 'status',
                render: (status) => {
                    return (
                        <span>
                            <Button type='primary' >下架</Button>
                            <span>在售</span>
                        </span>
                    )
                }
              },
              {
                title: '操作',
                width: 100,
                render: (product) => {
                    return (
                        <span>
                           <LinkButton>详情</LinkButton>
                           <LinkButton>修改</LinkButton>
                        </span>
                    )
                }
              }
          ]
    }

    getProducts = async (pageNum) => {
        this.setState({loading:true})
        const {defaultPageSize} = this.state
        const result = await reqProducts(pageNum, defaultPageSize)
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
        const {products, defaultPageSize, total,loading} = this.state
        const title = (
            <span>
                <Select value='1' style={{width:150}}>
                    <option value='1'>按名称搜索</option>
                    <option value='2'>按描述搜索</option>
                </Select>
                <Input placeholder='关键字'  style={{width:150,margin: '0 15px'}}/>
                <Button  type='primary' >搜索</Button>
            </span>
            )
        const extra = (
            <Button type='primary'>
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