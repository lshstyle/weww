import React from 'react'
import {Card,Icon, Form, Input, Cascader, Upload, Button} from 'antd'

import LinkButton  from '../../../components/link-button'
import {reqCategorys} from '../../../api'
import httpStatus from '../../../utils/httpStatus'
import PicturesWall from './pictures-wall'

const Item = Form.Item
const TextArea = Input.TextArea



class ProudctAddUpdate extends React.Component {

    state = {
        options: [],
    }


    submit = () => {
        this.props.form.validateFields((error, values)=>{
            if (!error) {

            }
        })
    }

    validatePrice = (rule, value, callback) => {
        if (value * 1 > 0) {
            callback()
        } else {
            callback('价格必须大于0')
        }
        
    }
    
    getCategorys = async (parentId)  => {
        const result = await reqCategorys(parentId)
        if (result.code === httpStatus.SEARCH) {
            const categorys = result.data
            if (parentId === '0') {
                this.initOptions(categorys)
            } else {
                return categorys
            }
        }
    }

    initOptions = async (categorys) => {
        const options = categorys.map(c=>({
            value: c.id,
            label: c.name,
            isLeaf: false
        }))

        const {isUpdate, product} = this
        const {parentCategory, category} = product
        if (isUpdate && parentCategory !== '0') {
            const subCategorys = await this.getCategorys(parentCategory)
            const subOptions = subCategorys.map(c=>({
                value: c.id,
                label: c.name,
                isLeaf: true
            }))
            const targetOption = options.find(option =>option.value === parentCategory)
            targetOption.children = subOptions
        }
        this.setState({options}) 
    }

    loadData = async selectedOptions => {
        const targetOptions = selectedOptions[0]
        targetOptions.loading = true
        const subCategorys = await this.getCategorys(targetOptions.value)
        targetOptions.loading = false
        if (subCategorys && subCategorys.length > 0) {
            const subOptions = subCategorys.map(c=>({
                value: c.id,
                label: c.name,
                isLeaf: true
            }))
            targetOptions.children = subOptions
        } else {
            targetOptions.isLeaf = true
        }
        this.setState({options: [...this.state.options]})
        
    }

    componentDidMount() {
        this.getCategorys('0')
    }

    componentWillMount() {
        const product = this.props.location.state.product
        this.isUpdate = !!product
        this.product = product || {}
    }

    render() {
        const {isUpdate, product} = this
        const categorys = []
        if (isUpdate) {
            const {parentCategory, category} = product
            if (parentCategory === '0') {
                categorys.push(category)
            } else {
                categorys.push(parentCategory)
                categorys.push(category)
            }
        }
        const formItemLayout = {
            labelCol: {span:2},
            wrapperCol: {span: 8}
        }
        const title = (
            <span>
                <LinkButton onClick = { ()=>  this.props.history.goBack()}>
                    <Icon type='arrow-left' style={{fontSize:20}}/>
                </LinkButton>
                <span>{isUpdate? '修改商品' : '添加商品'}</span>
            </span>
        )

        const {getFieldDecorator} = this.props.form
        return (
            <Card title={title}>
                <Form {...formItemLayout}>
                    <Item label='商品名称'>
                        {
                            getFieldDecorator('name', {
                                initialValue: product.name,
                                rules: [
                                    {
                                        required: true,
                                        message: '必须输入商品名称'
                                    }
                                ]
                            })(
                                <Input placeholder='请输入商品名称' />
                            )
                        }
                    </Item>
                    <Item label='商品描述'>
                       {
                            getFieldDecorator('desc', {
                                initialValue: product.desc,
                                rules: [
                                    {
                                        required: true,
                                        message: '必须输入商品描述'
                                    }
                                ]
                            })(
                                <TextArea placeholder='请输入商品描述' autosize={{minRows:2, masRows:6}}/>
                            )
                        }
                        
                    </Item>
                    <Item label='商品价格'>
                        {
                            getFieldDecorator('price', {
                                initialValue: product.price,
                                rules: [
                                    {
                                        required: true,
                                        message: '必须输入商品价格',
                                        
                                    },
                                    {
                                        validator: this.validatePrice
                                    }
                                ]
                            })(
                                <Input placeholder='请输入商品价格' addonAfter='元'/>
                            )
                        }
                        
                    </Item>
                    <Item label='商品分类'>
                        {
                            getFieldDecorator('category', {
                                initialValue: categorys,
                                rules: [
                                    {
                                        required: true,
                                        message: '必须输入商品分类'
                                    }
                                ]
                            })(
                                <Cascader
                                    options={this.state.options}
                                    loadData={this.loadData}
                                />
                            )
                        }
                        
                    </Item>
                    <Item label='商品图片'>
                        {
                            getFieldDecorator('imgs', {
                                initialValue: product.price,
                                rules: [
                                    {
                                        required: false
                                    }
                                ]
                            })(
                                <PicturesWall />
                            )
                        }
                        
                    </Item>
                    <Item label='商品详情'>
                        <Input placeholder='请输入商品详情' />
                    </Item>
                    <Item>
                        <Button type='primary' onClick={this.submit}>提交</Button>
                    </Item>
                </Form>
            </Card>
        )
    }
}

export default  Form.create()(ProudctAddUpdate)