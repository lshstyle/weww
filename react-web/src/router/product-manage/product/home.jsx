import React from 'react'
import {Card, Select, Input, Button,Icon, Table} from 'antd'

export default class ProductHome extends React.Component {
    render() {
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
            <Card
                title={title}
                extra={extra}
            >

            </Card>
        )
    }
}