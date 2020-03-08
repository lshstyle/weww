/*
    包含n个action creator函数的模块
    同步action  对象 {type: 'xxx',data: 'xxx'}
    异步action  函数 dispatch => {}
*/
import {ADD_TODO, DELETE_TODO, SET_HEAD_TITLE}  from './action-types'

export const addTodo = (todo) => ({type: ADD_TODO, data: todo})
export const deleteTodo = (index) => ({type: DELETE_TODO, data: index})

export const setHeadTitle = (headTitle) => ({type:SET_HEAD_TITLE ,data: headTitle})

