import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Add from '../../components/todo/add'
import List from '../../components/todo/list'
import {addTodo, deleteTodo} from '../../redux/actions'

class Todo extends React.Component {
     
    static propTypes = {
        todos: PropTypes.array.isRequired,
        addTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    render() {
        const {todos,addTodo, deleteTodo} = this.props
        return (
           <div>
                <Add  addTodo={addTodo}/>
                <List deleteTodo={deleteTodo} todos={todos}/>
            </div>
        )
    }
}


export default connect(
    state => ({todos:state}),
    {addTodo,deleteTodo}
)(Todo)

