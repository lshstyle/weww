import React from 'react'
import {Card, Table, Button, Icon} from 'antd'


import  LinkButton from '../../components/link-button'

export default class Category extends React.Component {

    render() {
        const columns = [{title:"分类名称",
                          dataIndex:"name",
                          width:"60%"
                        },
                        {title:"状态", 
                         dataIndex:"status",
                         width:"20%"
                        },
                        {title:"操作",
                         width:"20%",
                         render: () => (
                            <div>
                                <LinkButton>修改分类</LinkButton>
                                <LinkButton>查看子分类</LinkButton>
                            </div>
                         )
                        }]
        const dataSource = [{name:"电器",
                             status:"启用",
                             id: "1"
                            },
                            {name:"电脑", 
                             status:"停用",
                             id: "2"
                            },
                            {name:"图书", 
                             status:"停用",
                             id: "3"
                            },
                            {name:"食品", 
                             status:"停用",
                             id: "4"
                            },
                            {name:"服装", 
                             status:"停用",
                             id: "5"
                            }]
        const title = '一级分类列表'
        const extra = (
            <Button type='primary'>
                <Icon type='plus' />添加 
            </Button>
        )
        return (
            <Card title={title} extra={extra}>
                <Table columns={columns} 
                       dataSource={dataSource} 
                       bordered 
                       rowKey="id"/>
            </Card>
        )
    }
}