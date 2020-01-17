import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Add from '../components/add'
import List from '../components/list'
import {addComment, deleteComment} from '../redux/actions'

class App extends React.Component{

    static propTypes = {
        comments: PropTypes.array.isRequired,
        addComment: PropTypes.func.isRequired,
        deleteComment: PropTypes.func.isRequired
    }

    render(){
        const {comments, addComment,deleteComment} = this.props
        return (
            <div>
                <Add addComment={addComment}/>
                <List comments={comments} deleteComment={deleteComment}/>
            </div>
        )
    }

}

export default connect(
    state => ({comments:state}),
    {addComment,deleteComment}
)(App)