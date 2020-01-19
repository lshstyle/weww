import React from 'react'
import {Menu, Icon} from 'antd'
import {Link, Router} from 'react-router-dom'
import menus from '../../config/menu'

import "./index.less"
import logo from "../../assets/images/favicon.ico"

const {SubMenu} = Menu

export default class LeftNav extends React.Component {

    getMenuNodes = (menus) => {
        return menus.map((menu, index) => {
           if (!menu.child) {
                return (
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
               return (
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
        })
    }
    render() {
        return (
            <div className="left-nav">
                <header to="/" className="left-nav-header">
                    <img src={logo} alt="图标"/>
                    <h1>管理系统</h1>
                </header>
                <Menu
                    mode="inline"
                    theme="dark"
                >
                    {/* <Menu.Item key="/home">
                       
                                <Icon type="home" />
                                <span>首页</span>
                           
                    </Menu.Item>
                    <Menu.Item key="/user">
                       
                                <Icon type="user" />
                                <span>用户管理</span>
                           
                    </Menu.Item>
                    <Menu.Item key="3">
                        
                                <Icon type="safety" />
                                <span>角色管理</span>
                           
                    </Menu.Item>
                    <SubMenu 
                        key="sub1"
                        title={
                            <span>
                                <Icon type="area-chart" />
                            <span>图形图标</span>
                            </span>
                            }
                    >
                        <Menu.Item key="/chart/bar">
                            
                                    <Icon type="bar-chart" />
                                    <span>柱状图</span>
                               
                        </Menu.Item>
                        <Menu.Item key="/chart/pie">
                           
                                    <Icon type="pie-chart" />
                                    <span>饼图</span>
                              
                        </Menu.Item>
                        <Menu.Item key="/chart/line">
                           
                                    <Icon type="line-chart" />
                                    <span>折线图</span>
                                
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                        <span>
                            <Icon type="setting" />
                        <span>系统管理</span>
                        </span>
                        }
                    >
                        <Menu.Item key="/system/tool">
                           
                                    <Icon type="tool" />
                                    <span>参数配置</span>
                               
                        </Menu.Item>
                    </SubMenu> */}
                    {
                        this.getMenuNodes(menus)
                    }
                </Menu>
            </div>
        )
    }
}