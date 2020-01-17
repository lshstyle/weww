import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'


import {addTodo, deleteTodo}  from '../redux/actions'
import Login from '../pages/login/login'
import Home from '../pages/home/home'
import Todo from '../pages/todo/todo'

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/todo" component={Todo} />
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}


export default connect(
    state => ({todos:state}),
    {addTodo,deleteTodo}
)(App)