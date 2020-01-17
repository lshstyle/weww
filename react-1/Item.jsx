import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class Item extends React.Component {

    static propTypes = {
        comment: PropTypes.object.isRequired
    }
    render() {
        const {comment} = this.props 
        return (
                <li>
                <p>{comment.userName}说 {comment.content}</p>
                </li>
        )
    }
}