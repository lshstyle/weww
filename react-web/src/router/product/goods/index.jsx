import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ProductHome from './home'
import ProductAddUpdate from './add-update'
import ProductDetail from './detail'

export default class Goods extends React.Component {
    render() {
        return (
            <Switch>
                
                <Route path='/product' exact component={ProductHome} />
                <Route path='/product/addUpdate' component={ProductAddUpdate} />
                <Route path='/product/detail' component={ProductDetail} />
                <Redirect to='/product' />
            </Switch>
        )
    }
}