import React from 'react'
import {Layout} from 'antd'
import {Redirect,  Route,Switch} from 'react-router-dom'

import LeftNav from '../../components/left-nav/index'
import Header from '../../components/header/index'
import Home from '../home'
import Product from '../product-manage/product'
import Category from '../product-manage/category'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
import User from '../user'
import Role from '../role'
import Config from '../system/config'
import Git from '../devlop/git'
import NotFound from '../not-found'

import {connect} from 'react-redux'
import {getMenus} from '../../redux/actions'

const {Footer, Sider, Content} = Layout


class App extends React.Component {
    
    render() {
        const user = this.props.user
        if (!user || !user.id) {
            return (
                <Redirect to='/login' />
            )
        }
        const menus = this.props.menus
        if (menus.length ===0) {
            this.props.getMenus(user.id)
            return (
                <Redirect to='/' />
            )
        }
        return (
            <Layout style={{width:'100%', minHeight:'100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header />
                    <Content style={{margin:20,backgroundColor: '#fff'}}>
                        <Switch>
                            <Redirect exact from='/' to='/home' />
                            <Route path='/home' component={Home} />
                            <Route path='/product-manage/category' component={Category} />
                            <Route path='/product-manage/product' component={Product} />
                            <Route path='/charts/bar' component={Bar} />
                            <Route path='/charts/line' component={Line} />
                            <Route path='/charts/pie' component={Pie} />
                            <Route path='/user' component={User} />
                            <Route path='/role' component={Role} />
                            <Route path='/system/config' component={Config} />
                            <Route path='/devlop' component={Git} />
                            <Route component={NotFound} />
                        </Switch>
                        
                    </Content>
                    <Footer style={{textAlign: 'center', color: '#ccccc'}}>版权所有©1997-2020</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default connect(
    state => ({user: state.user, menus: state.menus}),
    {getMenus}
)(App)