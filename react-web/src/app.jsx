import React from 'react'
import {Route,Switch, BrowserRouter} from 'react-router-dom'

import Login from './router/login'
import Main from './router/main'

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