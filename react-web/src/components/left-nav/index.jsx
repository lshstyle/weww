import React from 'react'
import {Menu, Icon, message} from 'antd'
import {Link, withRouter} from 'react-router-dom'

import './index.less'
import logo from '../../assets/images/favicon.ico'
import {reqMenu} from '../../api'
import memoryUtil from '../../utils/memoryUtil'

const {SubMenu} = Menu


class LeftNav extends React.Component {

    showMenuNodes = (menus) => {
        const path = this.props.location.pathname
        return menus.reduce((pre, menu) => {
            if (!menu.child) {
                pre.push(
                    <Menu.Item key={menu.path}>
                        <Link to={menu.path}>
                            <span>
                                <Icon type={menu.icon} />
                                <span>{menu.title}</span>
                            </span>
                        </Link>
                    </Menu.Item>
                )
                
            } else {
                const cItem = menu.child.find(item => item.path === path)
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
        
        const menus = memoryUtil.menus
        this.menuNodes = this.showMenuNodes(menus)
    }

    render() {
        const path = this.props.location.pathname
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

export default withRouter(LeftNav)