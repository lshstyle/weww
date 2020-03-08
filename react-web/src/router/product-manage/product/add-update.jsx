import React from 'react'
import {Card,Icon, Form, Input, Cascader, Button, message} from 'antd'

import LinkButton  from '../../../components/link-button'
import {reqCategorys, reqProductUpdateOrAdd} from '../../../api'
import httpStatus from '../../../utils/httpStatus'
import PicturesWall from './pictures-wall'
import RichTextEditor from './rich-text-editor'

const Item = Form.Item
const TextArea = Input.TextArea

class ProudctAddUpdate extends React.Component {

    state = {
        options: []
    }

    constructor(props) {
        super(props)
        this.uploadImg = React.createRef()
        this.textEditor = React.createRef()
    }

    submit = () => {
        this.props.form.validateFields(async (error, values)=>{
            if (!error) {
                const imgs = this.uploadImg.current.getImgs()
                const detail = this.textEditor.current.getDetail()
                const {name, desc,price,categorys} = values
                let parentCategory, category
                if (categorys.length>1) {
                    parentCategory = categorys[0]
                    category = categorys[1]
                } else {
                    parentCategory='0'
                    category=categorys[0]
                }
                const product = {name,price,desc,imgs,detail,category,parentCategory}
                if (this.isUpdate) {
                    product.id = this.product.id
                }
                const result = await reqProductUpdateOrAdd(product)
                if (result.code === httpStatus.UPDATE) {
                    message.success(`${this.isUpdate? '更新' : '添加' }'商品成功'`)
                    this.props.history.goBack()
                } else {
                    message.error(`${this.isUpdate? '更新' : '添加' }'商品失败'`)
                }
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
        const {parentCategory} = product
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
        const {product} = this.props.location.state
        this.isUpdate = !!product
        this.product = product || {}
    }

    render() {
        const {isUpdate, product} = this
        const categorys = []
        const {parentCategory, imgs,category, detail} = product
      
        if (isUpdate) {
            
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
                            getFieldDecorator('categorys', {
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
                        <PicturesWall  ref= {this.uploadImg} imgs={imgs}/>
                    </Item>
                    <Item label='商品详情'  labelCol={{span:2}} wrapperCol={{span: 20}} >
                        <RichTextEditor ref={this.textEditor} detail={detail}/>
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

/*子组件调用父组件的方法：将父组件的方法以函数属性的形式传递给子组件，子组件就可以调用*/
