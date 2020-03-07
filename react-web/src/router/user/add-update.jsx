import React from 'react'
import PropTypes from 'prop-types'
import {Form,Input,Select} from 'antd'

import {reqRolesAll} from '../../api'
import httpStatus from '../../utils/httpStatus'

const Item = Form.Item
class UserAddUpdate extends React.Component {


    static propTypes = {
        setForm: PropTypes.func.isRequired
    }

    

    getRolesAll= async () => {
        const result = await reqRolesAll()
        if (result.code === httpStatus.SEARCH) {
           
            this.roles = result.data
        }
    }

    componentWillMount() {
        this.props.setForm(this.props.form)
        this.getRolesAll()
    }

    render() {
        const {getFieldDecorator} = this.props.form
        const FormItemLayout = {
            labelCol : {span: 6},
            wrapperCol: {span: 14}
        }

        return (
            <Form {...FormItemLayout}>
                <Item label='用户名称'>
                    {
                        getFieldDecorator('name', {
                            initialValue: '',
                            rules: [{
                                required: true, message: '用户名称必须输入'
                            }]
                        })(
                            <Input placeholder='请输入用户名称' />
                        )
                    }
                </Item>
                <Item label='用户真实姓名'>
                    {
                        getFieldDecorator('realName', {
                            initialValue: '',
                            rules: [{
                                required: true, message: '用户真实姓名必须输入'
                            }]
                        })(
                            <Input placeholder='请输入用户真实姓名' />
                        )
                    }
                </Item>
                <Item label='密码'>
                    {
                        getFieldDecorator('passwd', {
                            initialValue: '',
                            rules: [{
                                required: true, message: '密码必须输入'
                            }]
                        })(
                            <Input placeholder='请输入密码' />
                        )
                    }
                </Item>
                <Item label='电话'>
                    {
                        getFieldDecorator('phone', {
                            initialValue: '',
                            rules: [{
                                required: true, message: '电话必须输入'
                            }]
                        })(
                            <Input placeholder='请输入电话' />
                        )
                    }
                </Item>
                <Item label='邮箱'>
                    {
                        getFieldDecorator('email', {
                            initialValue: '',
                            rules: [{
                                required: true, message: '邮箱必须输入'
                            }]
                        })(
                            <Input placeholder='请输入邮箱' />
                        )
                    }
                </Item>
                {/* <Item label='角色'>
                    {
                        getFieldDecorator('roles', {
                            initialValue: '',
                            rules: [{
                                required: true, message: '邮箱必须输入'
                            }]
                        })(
                            <Input placeholder='请输入邮箱' />
                        )
                    }
                </Item> */}
            </Form>
        )
    }
}
export default Form.create()(UserAddUpdate)