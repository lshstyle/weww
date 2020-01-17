import React from 'react'
import PropTypes from 'prop-types'

export default class Add extends React.Component {

    static propTypes = {
        addComment: PropTypes.func.isRequired
    }

    state = {
        userName: '',
        content: ''
    }

    handleUserName = (event) => {
        const userName = event.target.value
        this.setState({userName})
    }

    handleContent = (event) => {
        const content = event.target.value
        this.setState({content})
    }

    addComment = () => {
        const comment = this.state
        this.props.addComment(comment)
        this.setState({
            userName:'',
            content:''
        })
    }

    render(){
        const {userName, content} = this.state
        return (
            <div>
                <h2>评论添加</h2>
                <label>用户</label>
                <input type='text' placeholder='请输入用户' value={userName} onChange={this.handleUserName}></input><br/>
                <label>内容</label>
                <input type='text' placeholder='请输内容' value={content} onChange={this.handleContent}></input><br/>
                <button onClick={this.addComment}>添加评论</button>
            </div>
        )
    }
}