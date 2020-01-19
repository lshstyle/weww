import React from 'react'
import PropTypes from 'prop-types'

import Item from './item'

export default class List extends React.Component {

    static  propTypes = {
        todos: PropTypes.array.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    render() {
        const {todos,deleteTodo} = this.props
        console.log(todos)
        return (
            <div>
                <h2>代办列表</h2>
                <ul>
                {todos.map((todo, index) => <Item index={index} todo={todo} deleteTodo={deleteTodo} key={index} />)}
                </ul>
            </div>
        )
    }
}
