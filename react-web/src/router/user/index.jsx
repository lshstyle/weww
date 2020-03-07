import React from 'react'
import {Card, Button, Table, Modal,message} from 'antd'

import LinkButton from '../../components/link-button'
import {reqUsers, reqAddOrUpdateUser, reqDeleteUser} from '../../api'
import httpStatus from '../../utils/httpStatus'
import UserAddUpdate from './add-update'
export default class User extends React.Component {
    
    state = {
        isShow: false,
        users: [],
        pageSize: 5,
        loading: false
    }

    initColumns = () => {
        this.columns = [{
            title: '用户名',
            dataIndex: 'name'
        },{
            title: '邮箱',
            dataIndex: 'email'
        },{
            title: '手机号',
            dataIndex: 'phone'   
        },{
            title: '注册时间',
            dataIndex: 'createTime'
        },{
            title: '角色名称',
            dataIndex: 'roles',
            render: (roles) => {
                const roleNames = roles.map((role,index) => role.name)
                return (
                    roleNames.join()
                )
            }
        },{
            title: '操作',
            render: (user) => {
                return (
                    <span>
                        <LinkButton>修改</LinkButton>
                        <LinkButton onClick={()=>{this.deleteUser(user)}}>删除</LinkButton>
                    </span>
                )
            }
        }] 
    }

    getUsers= async (pageNum) => {
        this.setState({loading:true})
        const result = await reqUsers(pageNum, this.state.pageSize)
        this.setState({loading:false})
        if (result.code === httpStatus.SEARCH) {
            const users = result.data
            this.setState({users})
        }
    }

    addOrUpdateUser = ()=> {
        this.form.validateFields(async (err, values) => {
            if (!err) {
                //1.隐藏modal
                this.setState({
                    isShow: false
                })
                //2.发请求
                const  user = values
                this.form.resetFields()
                const  result = await reqAddOrUpdateUser(user)
                if (result.code === httpStatus.UPDATE) {
                    message.success('用户添加成功!')
                    this.getUsers(1)
                } 
            }
        })
    }

    deleteUser = (user) => {
        Modal.confirm({
            title: `确认删除用户:${user.realName}吗？`,
            onOk: async ()=>{
                const result = await reqDeleteUser(user.id)
                if (result.code === httpStatus.DELETE) {
                    message.success('删除成功')
                    this.getUsers(1)
                } else {
                    message.success('删除失败')
                }

            }
        })
    }

    componentDidMount() {
        this.getUsers(1)
    }


    componentWillMount() {
        this.initColumns()
    }

    render() {
        const title = (
            <span>
                <Button type='primary' onClick={()=> this.setState({isShow: true})}>创建用户</Button>
            </span>
        )
        const {loading, pageSize,users} = this.state
        return (
            <Card title={title}>
                <Table 
                    columns={this.columns} 
                    dataSource={users} 
                    bordered 
                    rowKey='id'
                    loading={loading}
                    pagination={{defaultPageSize: this.state.pageSize, showQuickJumper: true}}
                />
                <Modal
                    title='添加用户'
                    visible={this.state.isShow}
                    onOk={this.addOrUpdateUser}
                    onCancel={() => {this.setState({isShow:false})}}
                >
                    <UserAddUpdate  
                        setForm = {(form) => {this.form = form}}
                    />
                </Modal>
            </Card>
        )
    }
}