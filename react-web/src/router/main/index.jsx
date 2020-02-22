import React from 'react'
import {Layout} from 'antd'
import {Redirect,  Route,Switch} from 'react-router-dom'

import memoryUtils from '../../utils/memoryUtil'
import LeftNav from '../../components/left-nav/index'
import Header from '../../components/header/index'
import Home from '../home'
import Goods from '../product/goods'
import Category from '../product/category'
import User from '../user'
import Role from '../role'
import Bar from '../chart/bar'
import Line from '../chart/line'
import Pie from '../chart/pie'
import Config from '../system/config'

const {Footer, Sider, Content} = Layout
export default class App extends React.Component {

    render() {
        
        const user = memoryUtils.user
        if (!user || !user.userName) {
            return (
                <Redirect to="/login" />
            )
        }
        return (
            <Layout style={{width:"100%", height:"100%"}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header></Header>
                    <Content style={{margin:20,backgroundColor: "#fff"}}>
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/product/category" component={Category} />
                            <Route path="/product/goods" component={Goods} />
                            <Route path="/user" component={User} />
                            <Route path="/role" component={Role} />
                            <Route path="/chart/bar" component={Bar} />
                            <Route path="/chart/line" component={Line} />
                            <Route path="/chart/pie" component={Pie} />
                            <Route path="/system/config" component={Config} />
                            <Redirect to="/home" />
                        </Switch>
                        
                    </Content>
                    <Footer style={{textAlign: "center", color: "#ccccc"}}>footer</Footer>
                </Layout>
            </Layout>
        )
    }
}