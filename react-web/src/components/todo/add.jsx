import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker, TimePicker ,Button,Input ,Form } from 'antd'


import '../../router/todo/todo.less'

const {TextArea} = Input
export default class Add extends React.Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    state = {
        date: "",
        time: "",
        content: ""
    }

    handleDate = (event) => {
        this.setState({date:event.target.value})
    }

    handleContent = (event) => {
        this.setState({time:event.target.value})
    } 
    
    addTodo = () => {
        const todo = this.state
        this.propTypes.addTodo(todo)
        this.setState({
            date: "",
            content: ""
        })
    }
    render() {
        const {date, time, content} = this.state
        return (
            <Form className='form-content'>
                <Form.Item>
                <DatePicker showTime  value={date} onChange={this.handleDate}/>
                </Form.Item>
                <Form.Item>
                <TextArea  rows={4} className="form-input" placeholder="请输入内容" 
                value={content} onChange={this.handleContent}/>
                </Form.Item>
                <Form.Item>
                <Button type="primary" className="form-button" onClick={this.addTodo}>添加</Button>
                </Form.Item>
            </Form>
        )
    }
}