import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class Add extends React.Component { 

    static propTypes = {
        addItem: PropTypes.func.isRequired
    }
    state = {
        userName: '',
        content: ''
    }

    handleSubmit = () => {
        const comment = this.state
        this.props.addItem(comment)
        this.setState = ({
            userName: '',
            content: ''
        })
    }
    handleNameChange = (event) => {
        const userName = event.target.value
        this.setState({userName})

    }
    handleContentChange = (event) => {
        const content = event.target.value
        this.setState({content})

    }
    render() {
        const {userName,content}  = this.state
        return (
        <div>
        <input type='text' placeholder='请输入用户名' value={userName} onChange={this.handleNameChange}/>
        <input type='text' placeholder='请输入评论' value={content} onChange={this.handleContentChange}/>
        <button onClick={this.handleSubmit}>添加</button>
        </div>
        )
    }
}