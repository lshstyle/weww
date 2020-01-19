import React from 'react'
import {Layout} from 'antd'
import {Redirect,  Route,Switch} from 'react-router-dom'

import memoryUtils from '../utils/memoryUtils'
import LeftNav from './left-nav/index'
import Header from './header/index'
import Home from '../router/home/home'
import User from '../router/user/user'
import Role from '../router/role/role'
import Bar from '../router/chart/bar'
import Line from '../router/chart/line'
import Pie from '../router/chart/pie'
import Config from '../router/system/config'

const {Footer, Sider, Content} = Layout
export default class App extends React.Component {

    render() {
        
        // const user = memoryUtils.user
        // if (!user || !user.userName) {
        //     return (
        //         <Redirect to="/login" />
        //     )
        // }
        return (
            <Layout style={{width:"100%", height:"100%"}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header></Header>
                    <Content style={{backgroundColor: "#fff"}}>
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/user" component={User} />
                            <Route path="/role" component={Role} />
                            <Route path="/home" component={Home} />
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: "center", color: "#ccccc"}}>footer</Footer>
                </Layout>
            </Layout>
        )
    }
}