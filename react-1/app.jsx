import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import logo from './logo.svg';
import './app.css';

import Add from './add'
import List from './list'
export default class App extends React.Component{
  
  state = {
    comments:[{userName: '李三',content: 'abd'},{userName: '李四',content: 'abdeed'}]
  }

  addItem = (comment) => {
    const {comments} = this.state
    comments.unshift(comment)
    this.setState({comments})
  }

  render(){
    const {comments} = this.state
    return (
      <div>
        <div>请发表对react的评论</div>
        <Add addItem = {this.addItem}/>
        <List comments = {comments}/>
      </div>
    )
  }
}