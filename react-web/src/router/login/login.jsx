import React from 'react'
import { Redirect } from 'react-router-dom'
import {Form, Icon, Input, Button, message} from 'antd'

import './login.less'

import { reqLogin } from '../../api/index'
import memoryUtil from '../../utils/memoryUtil'
import storageUtil from '../../utils/storageUtil'


const Item = Form.Item

class Login extends React.Component {
    
    handleSubmit = (event) => {
        event.preventDefault()
        const form = this.props.form
        this.props.form.validateFields(async (err,values) => {
            if (!err) {
                const {userName, password} = values
                //const response = await reqLogin(userName, password)
                //const user = response.data
                const user = {status:0, userName:"admin"}
                if (user.status === 0) {
                    message.success("登陆成功")
                    storageUtil.saveUser(user)
                    memoryUtil.user = user
                    this.props.history.replace("/")
                    
                }
            } else {
                message.error("登陆成功")
            }
        })
    }

    validatorPwd = (rule, value, callback) => {
        if (!value) {
            callback("密码不能为空")
        } else {
            callback()
        }
    }

    render() {
        const user = memoryUtil.user
        if (user && user.userName) {
            return (
                <Redirect to="/" />
            )
        }
        const {getFieldDecorator} = this.props.form
        return (
            <div className="login">
                <header className="login-header"></header>
                <section className="login-content">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            <h2>用户登录</h2>
                        </Item>
                        <Item>
                            {
                                getFieldDecorator("userName",{
                                    rules:[
                                        {required: true, whitespace: true, message: "请输入用户名"},
                                        {min: 4, message: "用户名至少4位"},
                                        {max: 12, message: "用户名不能超过12位"},
                                        {pattern: /^[a-zA-Z0-9_]+$/, message: "用户名必须是英文、数字、下划线组成"},
                                    ]
                                })(
                                    <Input 
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="用户名"
                                    />
                                )
                            }
                        </Item>
                        <Item>
                            {
                                getFieldDecorator("password",{
                                    rules:[{validator: this.validatorPwd}]
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />
                                )
                            }
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登陆
                            </Button>
                        </Item>
                    </Form>
                </section>
                <footer className="login-footer">
                    版权所有©1997-2020
                </footer>
            </div>
        )
        
    }
}

const WarpLoginForm = Form.create()(Login)
export default  WarpLoginForm