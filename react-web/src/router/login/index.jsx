import React from 'react'
import { Redirect } from 'react-router-dom'
import {Form, Icon, Input, Button, message} from 'antd'

import './index.less'

import {connect} from 'react-redux'
import {login} from '../../redux/actions'

const Item = Form.Item

class Login extends React.Component {
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.form.validateFields(async (err,values) => {
            if (!err) {
                const {userName, password} = values
                this.props.login(userName,password)
            } else {
                message.error('数据校验失败！')
            }
        })
    }

    validatorPwd = (rule, value, callback) => {
        if (!value) {
            callback('密码不能为空')
        } else {
            callback()
        }
    }

    render() {
        const user = this.props.user
        if (user && user.id) {
            return (
                <Redirect to='/' />
            )
        }
        const {getFieldDecorator} = this.props.form
        return (
            <div className='login'>
                <header className='login-header'></header>
                <section className='login-content'>
                    
                    <Form onSubmit={this.handleSubmit} className='login-form'>
                        <Item>
                            <h2>用户登录</h2>
                            <span className={user.errorMsg? 'error-msg show' : 'error-msg'}>{user.errorMsg}</span>
                        </Item>
                        <Item>
                            {
                                getFieldDecorator('userName',{
                                    rules:[
                                        {required: true, whitespace: true, message: '请输入用户名'},
                                        {min: 4, message: '用户名至少4位'},
                                        {max: 12, message: '用户名不能超过12位'},
                                        {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字、下划线组成'},
                                    ]
                                })(
                                    <Input 
                                        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder='用户名'
                                    />
                                )
                            }
                        </Item>
                        <Item>
                            {
                                getFieldDecorator('password',{
                                    rules:[{validator: this.validatorPwd}]
                                })(
                                    <Input
                                        prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type='password'
                                        placeholder='密码'
                                    />
                                )
                            }
                        </Item>
                        <Item>
                            <Button type='primary' htmlType='submit' className='login-form-button'>
                                登陆
                            </Button>
                        </Item>
                    </Form>
                </section>
                <footer className='login-footer'>
                    版权所有©1997-2020
                </footer>
            </div>
        )
    }
}

const WarpLoginForm = Form.create()(Login)
export default  connect(
    state => ({user: state.user}),
    {login}
)(WarpLoginForm)