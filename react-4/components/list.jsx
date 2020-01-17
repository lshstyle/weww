import React from 'react'
import PropTypes from 'prop-types'

import Item from './item'

export default class List extends React.Component {

    static propTypes = {
        deleteComment: PropTypes.func.isRequired,
        comments: PropTypes.array.isRequired
    } 

    render() {
        const {comments, deleteComment} = this.props
        return (
            <div>
                <h2>评论列表</h2>
                <ul>
                    {
                        comments.map((comment, index) => <Item comment={comment} index={index} deleteComment={deleteComment} key={index}/>)
                    }
                </ul>
            </div>
        )
    }
}