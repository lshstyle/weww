import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'antd'

export default class Item extends React.Component {

    static propTypes = {
        index: PropTypes.number.isRequired,
        todo: PropTypes.object.isRequired,
        deleteTodo: PropTypes.func.isRequired

    }
 
    deleteTodo = () => {
        const {index} = this.props
        this.propTypes.deleteTodo(index)
    }

    render() {
        const {todo} = this.props
        return (
            <li>
                {todo.date}&nbsp;&nbsp;&nbsp;{todo.content} 
                <Button type="primary" onClick={this.deleteTodo}>删除</Button>
            </li>
        )
    }

}