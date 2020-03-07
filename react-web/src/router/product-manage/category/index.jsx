import React from 'react'
import {Card, Table, Button, Icon, message, Modal} from 'antd'


import  LinkButton from '../../../components/link-button'
import {reqCategorys,reqCategoryUpdate,reqCategoryAdd, reqCategoryDelete} from '../../../api'
import AddForm from './add-form'
import UpdateForm from './update-form'
import httpStatus from '../../../utils/httpStatus'

export default class Category extends React.Component {

    state = {
        categorys: [], //一级分类列表
        loading: false,
        parentId: '0',
        parentName: '',
        subCategorys: [],
        showStatus: 0, //0:两个modal都不显示 1：显示添加 2：显示修改
    }

    componentWillMount() {
        this.initColumns()
        
    }

    componentDidMount() {
        this.getCategorys()
    }

    getCategorys = async (parentId) => {
        this.setState({loading:true})
        parentId = parentId || this.state.parentId 
       const result = await reqCategorys(parentId)
       if (result.code === httpStatus.SEARCH) {
           const categorys = result.data
           
           if (parentId === '0') {
            this.setState({categorys})
           } else {
               this.setState({subCategorys:categorys})
           }
       } else {
           message.error('获取分类列表失败')
       }
       this.setState({loading:false})
    }

    initColumns = () => {
        this.columns = [{
                            title:'分类名称',
                            dataIndex:'name',
                            width:'60%'
                        },
                        {
                            title:'状态', 
                            dataIndex:'status',
                            width:'10%'
                        },
                        {
                            title:'操作',
                            width:'30%',
                            render: (category) => (
                                <div>
                                    <LinkButton onClick={()=>this.showUpdateModal(category)}>修改分类</LinkButton>
                                    {this.state.parentId === '0'? <LinkButton onClick={()=>{this.showSubCategorys(category)}}>查看子分类</LinkButton> : null}
                                    <LinkButton onClick={()=> this.deleteCategory(category)}>删除分类</LinkButton>
                                </div>
                            )
                        }]
    }

    showSubCategorys = (category) => {
        this.setState({
            parentId: category.id,
            parentName: category.name
        }, () => {
            this.getCategorys()
        })
    }

    showAddModal = () => {
        this.setState({showStatus: 1})
    }

    showUpdateModal = (category) => {
        this.category = category
        this.setState({showStatus: 2})
    }

    deleteCategory =  (category) => {
        const categoryId = category.id
        Modal.confirm({
            content: '确定删除【' + category.name +'】吗？',
            onOk: async () => {
                const  result = await reqCategoryDelete(categoryId)
                if (result.code === httpStatus.DELETE) {
                    this.getCategorys()
                } 
            },
          })
    }

    showCategorys = () => {
        this.setState({
            parentId: '0',
            parentName: '',
            subCategorys: []

        })
    }

    handleCancel = () => {
        this.form.resetFields()
        this.setState({
            showStatus:0
        })
    }

    addCategory = () => {

        this.form.validateFields(async (err, values) => {
            if (!err) {
                //1.隐藏modal
                this.setState({
                    showStatus: 0
                })
                //2.发请求
                const {parentId,categoryName} = values
                this.form.resetFields()
                const  result = await reqCategoryAdd(categoryName,parentId)
                if (result.code === httpStatus.ADD) {
                    if (parentId === this.state.parentId) {
                        this.getCategorys()
                    } else if (parentId === '0') {
                        this.getCategorys('0')
                    }
                    
                } 
            }
        })
        
    }

    updateCategory = () => {
        
        this.form.validateFields(async (err, values) => {
            if (!err) {
                //1.隐藏modal
                this.setState({
                    showStatus: 0
                })
                //2.发请求
                const categoryId = this.category.id
                const {categoryName} = values
                this.form.resetFields()
                const  result = await reqCategoryUpdate({categoryId, categoryName})
                if (result.code === httpStatus.UPDATE) {
                    this.getCategorys()
                } 
            }
        })
        
    }


    render() {
        const {categorys, loading, parentId, parentName,subCategorys} = this.state
        
        const category = this.category || {}
        const title = parentId === '0'? '一级分类列表' :(
            <span>
                <LinkButton onClick={this.showCategorys}>一级分类列表</LinkButton>
                <Icon type='arrow-right' style={{margin: '0 10px'}}/>
                <span>{parentName}</span>
            </span>
        )
        const extra = (
            <Button type='primary' onClick={()=> { this.showAddModal()}}>
                <Icon type='plus' />添加 
            </Button>
        )
        return (
            <Card title={title} extra={extra}>
                <Table columns={this.columns} 
                       dataSource={parentId==='0'? categorys: subCategorys} 
                       bordered 
                       rowKey='id'
                       loading={loading}
                       pagination={{defaultPageSize: 5, showQuickJumper: true}}/>
                <Modal
                    title='添加分类'
                    visible={this.state.showStatus === 1}
                    onOk={this.addCategory}
                    onCancel={this.handleCancel}
                >
                    <AddForm  
                        categorys={categorys} 
                        parentId={parentId}
                        setForm = {(form) => {this.form = form}}
                    />
                </Modal>
                <Modal
                    title='修改分类'
                    visible={this.state.showStatus === 2}
                    onOk={this.updateCategory}
                    onCancel={this.handleCancel}
                >
                    <UpdateForm  
                        categoryName = {category.name}
                        setForm = {(form) => {this.form = form}}
                    />
                </Modal>
            </Card>
        )
    }
}