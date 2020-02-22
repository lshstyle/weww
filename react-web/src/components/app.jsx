import React from 'react'
import {Route,Switch, BrowserRouter} from 'react-router-dom'

import Login from '../router/login'
import Main from '../router/main'

import storageUtil from '../utils/storageUtil'
import memoryUtil from '../utils/memoryUtil'

const user = storageUtil.getUser()
memoryUtil.user = user

export default class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/' component={Main} />
                </Switch>
            </BrowserRouter>
        )
    }
}