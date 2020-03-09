/*
根据老的state 和action 计算生成新的state
*/
import {
         SET_HEAD_TITLE,
         RECEIVE_USER,
         SHOW_USER_ERROR_MSG,
         RECEIVE_MENUS,
         SHOW_MENU_ERROR_MSG,
         RESET_USER,
         RESET_MENUS
        } from './action-types'
import storageUtil from '../utils/storageUtil'
import {combineReducers} from 'redux'

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
        case RECEIVE_USER: return action.user
        case SHOW_USER_ERROR_MSG: 
            const errorMsg = action.errorMsg
            return {...state, errorMsg}
        case RESET_USER:
            return {}
        default: return state
    }
}

const initMenus = storageUtil.getMenus()
function menus(state=initMenus, action) {
    switch(action.type) {
        case RECEIVE_MENUS: return action.menus
        case SHOW_MENU_ERROR_MSG:
            const errorMsg = action.errorMsg
            return {...state, errorMsg}
        case RESET_MENUS:
            return []
        default: return state
    }
}

export default combineReducers({headTitle, user,menus})