import React from 'react'
import {Card, Button, Table, message, Modal} from 'antd'

import {reqRoles, reqAddRole,reqUpdateRoleAuth} from '../../api'
import httpStatus from '../../utils/httpStatus'
import AddForm from './add-form'
import AuthForm from './auth-form'
import memoryUtil from '../../utils/memoryUtil'

export default class Role extends React.Component {
    
    state = {
        roles: [],
        pageSize: 10,
        role: {},
        loading: false,
        isShowAdd: false,
        isShowAuth: false
    }

    constructor(props) {
        super(props)
        this.auth = React.createRef()
    }

    initColumn = () => {
        this.columns = [
            {
                title: '角色名称',
                dataIndex: 'name'
            },
            {
                title: '创建时间',
                dataIndex: 'createTime'
            },
            {
                title: '授权时间',
                dataIndex: 'authTime'
            },
            {
                title: '授权人',
                dataIndex: 'authName'
            }
    ]}

    onRow = (role) => {
        return {
            onClick:  event => {
                this.setState({role})
            }
        }
    }

    getRoles = async () => {
        this.setState({loading:true})
        const result = await reqRoles()
        this.setState({loading:false})
        if (result.code === httpStatus.SEARCH) {
            const roles = result.data
            this.setState({roles})
        }
    }

    addRole = () => {
        this.form.validateFields(async (err, values) => {
            if (!err) {
                //1.隐藏modal
                this.setState({
                    isShowAdd: false
                })
                //2.发请求
                const {name} = values
                this.form.resetFields()
                const  result = await reqAddRole(name)
                if (result.code === httpStatus.ADD) {
                    message.success('角色添加成功!')
                    this.getRoles()
                } 
            }
        })
    }

    addAuth = async () => {
        this.setState({isShowAuth:false})
        const menus = this.auth.current.getMenus()
        const role = this.state.role
        role.menus = menus
        const user = memoryUtil.user
        role.authId = user.id
        const result = await reqUpdateRoleAuth(role)
        if (result.code === httpStatus.UPDATE) {
            message.success('设置角色权限成功')
            // this.setState({
            //     roles: [...this.state.roles]
            // })
            this.getRoles(1)
        } else {
            message.success('设置角色权限失败')
        }
    }

    handleRoleCancel = () => {
        this.form.resetFields()
        this.setState({
            isShowAdd: false
        })
    }

    handleAuthCancel = () => {
    
        this.setState({
            isShowAuth: false
        })
    }

    componentWillMount() {
        this.initColumn()
    }

    componentDidMount() {
        this.getRoles(1)
    }

    render() {
        const {role,roles,loading} = this.state
        const title = (
            <span>
                <Button type='primary' style={{margin: '0 10px'}} onClick={() =>this.setState({isShowAdd: true})}>创建角色</Button>
                <Button type='primary' disabled={!role.id} onClick={() => this.setState({isShowAuth: true})}>设置角色权限</Button>
            </span>
        )
        
        return (
            <Card title={title}>
                <Table
                    rowSelection={{
                        type: 'radio',
                        selectedRowKeys: [role.id],
                        onSelect: (role) => {
                            this.setState({role})
                        }
                    }}
                   
                    onRow={this.onRow}
                    columns={this.columns} 
                    dataSource={roles} 
                    bordered 
                    rowKey='id'
                    loading={loading}
                    pagination={{defaultPageSize: this.state.pageSize, showQuickJumper: true}}
                />
                <Modal
                    title='添加角色'
                    visible={this.state.isShowAdd}
                    onOk={this.addRole}
                    onCancel={this.handleRoleCancel}
                >
                    <AddForm  
                        setForm = {(form) => {this.form = form}}
                    />
                </Modal>
                <Modal
                    title='设置角色权限'
                    visible={this.state.isShowAuth}
                    onOk={this.addAuth}
                    onCancel={this.handleAuthCancel}
                >
                    <AuthForm  role={role} ref={this.auth}/>
                </Modal>
            </Card>
        )
    }
}