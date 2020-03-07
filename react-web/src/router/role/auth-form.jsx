import React from 'react'
import PropTypes from 'prop-types'

import {Form, Input, Tree} from 'antd'
import memoryUtil from '../../utils/memoryUtil'

const Item = Form.Item

const {TreeNode} = Tree

export default class AuthForm extends React.Component {
    
    static propTypes = {
        role: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props)
        const menus = memoryUtil.menus
        const checkedKeys = this.props.role.menus
        this.state={menus,checkedKeys}
    }

    initTreeNode= (menus)=> {
        return menus.reduce((pre, item) => {
            pre.push(
                <TreeNode title={item.title} key={item.id} >
                    
                    { item.child? this.initTreeNode(item.child) : null}
                </TreeNode>
            )
            return pre
        }, [])
    }

    onCheck= (checkedKeys)=>{
        this.setState({checkedKeys})
    }

    getMenus = () => this.state.checkedKeys

    componentWillMount() {
        this.treeNodes = this.initTreeNode(this.state.menus)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            checkedKeys:nextProps.role.menus
        })
    }

    render() {

        const FormItemLayout = {
            labelCol : {span: 4},
            wrapperCol: {span: 15}
        }
        const {checkedKeys} = this.state
        const role = this.props.role
        return (
            <div>
                <Item label='角色名称' {...FormItemLayout}>
                    <Input value={role.name} disabled></Input>
                </Item>
                <Tree checkable 
                      defaultExpandAll={true}
                      checkedKeys={checkedKeys}
                      onCheck={this.onCheck}>
                    <TreeNode title='平台权限' key='all'>
                        {this.treeNodes}
                    </TreeNode>
                </Tree>
            </div>
        )
    }
}