import React from 'react'
import {Menu, Icon} from 'antd'
import {Link, withRouter} from 'react-router-dom'
import menus from '../../config/menu'

import './index.less'
import logo from '../../assets/images/favicon.ico'

const {SubMenu} = Menu


class LeftNav extends React.Component {

    // getMenuNodes = (menus) => {
    //     return menus.map((menu, index) => {
    //        if (!menu.child) {
    //             return (
    //                 <Menu.Item key={menu.key}>
    //                     <Link to={menu.key}>
    //                         <span>
    //                             <Icon type={menu.icon} />
    //                             <span>{menu.title}</span>
    //                         </span>
    //                     </Link>
    //                 </Menu.Item>
    //             )
    //        } else {
    //            return (
    //             <SubMenu key={menu.key}
    //                     title={
    //                     <span>
    //                         <Icon type={menu.icon} />
    //                     <span>{menu.title}</span>
    //                     </span>
    //                     }
    //             >
    //                {this.getMenuNodes(menu.child)}
    //             </SubMenu>
    //            )
    //        }
    //     })
    // }

    getMenuNodes = (menus) => {
        
        const path = this.props.location.pathname
        return menus.reduce((pre, menu) => {
            if (!menu.child) {
                pre.push(
                    <Menu.Item key={menu.key}>
                        <Link to={menu.key}>
                            <span>
                                <Icon type={menu.icon} />
                                <span>{menu.title}</span>
                            </span>
                        </Link>
                    </Menu.Item>
                )
                
            } else {
                const cItem = menu.child.find(item => item.key === path)
                if (cItem) {
                    this.openKey = menu.key
                }
                pre.push(
                    <SubMenu key={menu.key}
                            title={
                            <span>
                                <Icon type={menu.icon} />
                            <span>{menu.title}</span>
                            </span>
                            }
                    >
                    {this.getMenuNodes(menu.child)}
                    </SubMenu>
                )
            }
            return pre
        }, [])
    }

    componentWillMount() {
        this.menuNodes = this.getMenuNodes(menus)
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