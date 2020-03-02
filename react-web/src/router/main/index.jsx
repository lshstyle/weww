import React from 'react'
import {Layout, message} from 'antd'
import {Redirect,  Route,Switch} from 'react-router-dom'

import {reqMenu} from '../../api'
import memoryUtil from '../../utils/memoryUtil'
import storageUtil from '../../utils/storageUtil'
import httpStatus from '../../utils/httpStatus'
import LeftNav from '../../components/left-nav/index'
import Header from '../../components/header/index'
import Home from '../home'
import Product from '../product-manage/product'
import Category from '../product-manage/category'
import Bar from '../analysis/bar'
import Line from '../analysis/line'
import Pie from '../analysis/pie'
import User from '../system/user'
import Role from '../system/role'
import Config from '../system/config'
import Git from '../devlop/git'

const {Footer, Sider, Content} = Layout
export default class App extends React.Component {
    
    getMenus = async () => {
        const result = await reqMenu()
        if (result.code === httpStatus.SEARCH) {
            storageUtil.saveMenus(result.data)
            memoryUtil.menus = result.data
        } else {
            message.error('获取菜单失败')
        }
    }

    componentWillMount() {
        
        const menus = memoryUtil.menu
        if (!menus || menus.length <=0 ) {
            this.getMenus()
        }
    }

    render() {
        
        const user = memoryUtil.user
        
        if (!user || !user.name) {
            return (
                <Redirect to='/login' />
            )
        }
        return (
            <Layout style={{width:'100%', minHeight:'100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header></Header>
                    <Content style={{margin:20,backgroundColor: '#fff'}}>
                        <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/product-manage/category' component={Category} />
                            <Route path='/product-manage/product' component={Product} />
                            <Route path='/analysis/bar' component={Bar} />
                            <Route path='/analysis/line' component={Line} />
                            <Route path='/analysis/pie' component={Pie} />
                            <Route path='/system/user' component={User} />
                            <Route path='/system/role' component={Role} />
                            <Route path='/system/config' component={Config} />
                            <Route path='/devlop' component={Git} />
                            <Redirect to='/home' />
                        </Switch>
                        
                    </Content>
                    <Footer style={{textAlign: 'center', color: '#ccccc'}}>footer</Footer>
                </Layout>
            </Layout>
        )
    }
}