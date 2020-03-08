import React from 'react'
import {Card, Button, Table, Modal,message} from 'antd'

import LinkButton from '../../components/link-button'
import {reqUsers, reqAddOrUpdateUser, reqDeleteUser,reqRoles} from '../../api'
import httpStatus from '../../utils/httpStatus'
import UserAddUpdate from './add-update'
export default class User extends React.Component {
    
    state = {
        isShow: false,
        users: [],
        pageSize: 5,
        loading: false,
        roles: []
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
            title: '所属角色',
            dataIndex: 'roles',
            render: (roles) => {
                return roles.map((roleId) => <label style={{marginRight:'10px'}}>{this.rolesName[roleId]}</label>)
            }
        },{
            title: '操作',
            render: (user) => {
                return (
                    <span>
                        <LinkButton onClick={() => {this.updateUser(user)}}>修改</LinkButton>
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

    getRoles = async() => {
        const result = await reqRoles()
        if (result.code === httpStatus.SEARCH) {
            const roles = result.data
            this.rolesName = roles.reduce((pre, role)=>{
                pre[role.id] = role.name
                return pre
            }, {})
            this.setState({roles})
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
                user.id = this.user.id
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

    updateUser = (user) => {
        this.user = user
        this.setState({isShow: true})
    }

    componentDidMount() {
        this.getUsers(1)
    }


    componentWillMount() {
        this.initColumns()
        this.getRoles()
    }

    render() {
        const user = this.user
       
        const title = (
            <span>
                <Button type='primary' onClick={()=> this.setState({isShow: true})}>创建用户</Button>
            </span>
        )
        const {loading, users,roles} = this.state
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
                    title={user? '修改用户' : '添加用户'}
                    visible={this.state.isShow}
                    onOk={this.addOrUpdateUser}
                    onCancel={() => {
                        this.form.resetFields()
                        this.setState({isShow:false})}}
                >
                    <UserAddUpdate  
                        setForm = {(form) => {this.form = form}}
                        roles = {roles}
                        user = {user}
                    />
                </Modal>
            </Card>
        )
    }
}