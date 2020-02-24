import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ProductHome from './home'
import ProductAddUpdate from './add-update'
import ProductDetail from './detail'

import './index.less'

export default class Product extends React.Component {
    render() {
        return (
            <Switch>
                
                <Route path='/product-manage/product' exact component={ProductHome} />
                <Route path='/product-manage/product/addUpdate' component={ProductAddUpdate} />
                <Route path='/product-manage/product/detail' component={ProductDetail} />
                <Redirect to='/product-manage/product' />
            </Switch>
        )
    }
}