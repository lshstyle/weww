/*
根据老的state 和action 计算生成新的state
*/
import { ADD_TODO, DELETE_TODO, SET_HEAD_TITLE} from './action-types'
import storageUtil from '../utils/storageUtil'
import {combineReducers} from 'redux'


const initData = [
    {date:'2019-12-12', time: '12:10:10', content:'1233232'}
]

function todos(state=initData, action) {
    switch(action.type) {
        case ADD_TODO : return [action.data, ...state] 
        case DELETE_TODO : return state.filter((index) => index !== action.data)
        default: return state
    }
}

const initHeadTitle='首页'
function headTitle(state=initHeadTitle, action) {
    switch(action.type) {
        case SET_HEAD_TITLE: return action.data
        default: return state
    }
}

const initUser= storageUtil.getUser()
function user(state=initUser, action) {
    switch(action.type) {
        default: return state
    }
}

export default combineReducers({todos, headTitle, user})