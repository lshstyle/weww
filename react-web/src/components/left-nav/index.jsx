import React from 'react'
import {Menu, Icon} from 'antd'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {setHeadTitle} from '../../redux/actions'

import './index.less'
import logo from '../../assets/images/favicon.ico'

const {SubMenu} = Menu

class LeftNav extends React.Component {

    showMenuNodes = (menus) => {
        const path = this.props.location.pathname
        return menus.reduce((pre, menu) => {
            if (!menu.child) {
                if (menu.path === path || path.indexOf(menu.path) >=0) {
                    this.props.setHeadTitle(menu.title)
                }
                pre.push(
                    <Menu.Item key={menu.path}>
                        <Link to={menu.path} onClick={()=> {this.props.setHeadTitle(menu.title)}}>
                            <span>
                                <Icon type={menu.icon} />
                                <span>{menu.title}</span>
                            </span>
                        </Link>
                    </Menu.Item>
                )
                
            } else {
                const cItem = menu.child.find(item => path.indexOf(item.path) === 0)
                if (cItem) {
                    this.openKey = menu.path
                }
                pre.push(
                    <SubMenu key={menu.path}
                            title={
                                <span>
                                    <Icon type={menu.icon} />
                                    <span>{menu.title}</span>
                                </span>
                            }
                    >
                    {
                        this.showMenuNodes(menu.child)
                    }
                    </SubMenu>
                )
            }
            return pre
        }, [])
    }

    componentWillMount() {
        const menus = this.props.menus
        this.menuNodes = this.showMenuNodes(menus)
    }

    render() {
        
        let path = this.props.location.pathname
        if (path.indexOf('/product-manage/product') === 0) {
            path = '/product-manage/product'
        }
        const openKey = this.openKey
        return (
            <div className='left-nav'>
                <Link to='/' className='left-nav-header'>
                    <img src={logo} alt='图标'/>
                    <h1>管理系统</h1>
                </Link>
                <Menu
                    mode='inline'
                    theme='dark'
                    selectedKeys={[path]}
                    defaultOpenKeys={[openKey]}
                >
                {
                    this.menuNodes
                }
                </Menu>
            </div>
        )
    }
}

export default connect(
    state => ({menus:state.menus}),
    {setHeadTitle}
)(withRouter(LeftNav))