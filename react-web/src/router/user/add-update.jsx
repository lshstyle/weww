import React from 'react'
import PropTypes from 'prop-types'
import {Form,Input,Select} from 'antd'

const Item = Form.Item
const Option = Select.Option
class UserAddUpdate extends React.Component {


    static propTypes = {
        setForm: PropTypes.func.isRequired,
        roles: PropTypes.array.isRequired,
        user: PropTypes.object
    }

    componentWillMount() {
        this.props.setForm(this.props.form)
    }
    
    render() {
        const user = this.props.user || {}
        const {getFieldDecorator} = this.props.form
        const {roles} = this.props
        const FormItemLayout = {
            labelCol : {span: 6},
            wrapperCol: {span: 14}
        }

        return (
            <Form {...FormItemLayout}>
                <Item label='用户名称'>
                    {
                        getFieldDecorator('name', {
                            initialValue: user.name,
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
                            initialValue: user.realName,
                            rules: [{
                                required: true, message: '用户真实姓名必须输入'
                            }]
                        })(
                            <Input placeholder='请输入用户真实姓名' />
                        )
                    }
                </Item>
                {
                    user.id? null: (
                        <Item label='密码'>
                            {
                                getFieldDecorator('passwd', {
                                    initialValue: user.passwd,
                                    rules: [{
                                        required: true, message: '密码必须输入'
                                    }]
                                })(
                                    <Input.Password placeholder='请输入密码' />
                                )
                            }
                        </Item>
                    )
                }
                
                <Item label='电话'>
                    {
                        getFieldDecorator('phone', {
                            initialValue: user.phone,
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
                            initialValue: user.email,
                            rules: [{
                                required: true, message: '邮箱必须输入'
                            }]
                        })(
                            <Input placeholder='请输入邮箱' />
                        )
                    }
                </Item>
                <Item label='角色'>
                    {
                        getFieldDecorator('roles', {
                            initialValue: user.roles,
                            rules: [{
                                required: true, message: '邮箱必须输入'
                            }]
                        })(
                            <Select
                                mode="multiple"
                            >
                                {
                                    roles.map(role => <Option key={role.id} value={role.id}>{role.name}</Option>)
                                }
                            </Select>
                        )
                    }
                </Item>
            </Form>
        )
    }
}
export default Form.create()(UserAddUpdate)