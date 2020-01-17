import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Item from './Item'

export default class List extends React.Component {
    static propTypes = {
        comments: PropTypes.array.isRequired
    }

    render(){
        const {comments} = this.props
        return (
            <div>
            <div>评论列表</div>
            <ul>
            {comments.map((comment,index) => <Item comment={comment} key={index}/>)}
            </ul>
            </div>
        )
    }

    
    
}

