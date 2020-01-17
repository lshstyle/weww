import React from 'react'
import PropTypes from 'prop-types'

export default class Item extends React.Component{

    static propTyes = {
        index: PropTypes.number.isRequired,
        deleteComment: PropTypes.func.isRequired,
        comment: PropTypes.object.isRequired

    }

    deleteComment = () => {
        const {index} = this.props
        this.props.deleteComment(index)
    }
    render(){
        const {comment} = this.props
        return (
            <li>
               {comment.userName} 说  {comment.content}
               <button onClick={this.deleteComment}>删除</button>
            </li>
        )
    }
}