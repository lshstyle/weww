/*
    包含n个action creator函数的模块
    同步action  对象 {type: 'xxx',data: 'xxx'}
    异步action  函数 dispatch => {}
*/
import {
       SET_HEAD_TITLE, 
       RECEIVE_USER, 
       SHOW_USER_ERROR_MSG,
       RECEIVE_MENUS,
       SHOW_MENU_ERROR_MSG,
       RESET_USER,
       RESET_MENUS
    }  from './action-types'

import {reqLogin, reqMenu} from '../api'
import httpStatus from '../utils/httpStatus'
import storageUtil from '../utils/storageUtil'

export const setHeadTitle = (headTitle) => ({type:SET_HEAD_TITLE ,data: headTitle})

export const receiveUser = (user) => ({type:RECEIVE_USER, user})

export const showUserErrorMsg = (errorMsg) => ({type:SHOW_USER_ERROR_MSG, errorMsg})

export const showMenuErrorMsg = (errorMsg) => ({type:SHOW_MENU_ERROR_MSG, errorMsg})

export const receiveMenus = (menus) => ({type: RECEIVE_MENUS, menus})

export const login = (userName,passwd) => {
    return async dispatch =>  {
        const result = await reqLogin(userName, passwd)
        if (result.code === httpStatus.SEARCH) {
            const user = result.data
            storageUtil.saveUser(user)
            dispatch(receiveUser(user))
        } else {
            const msg = result.msg
            dispatch(showUserErrorMsg(msg))
        }
        
    }
}

export const getMenus = (userId) => {
    return async dispatch => {
        const result = await reqMenu(userId)
        if (result.code === httpStatus.SEARCH) {
            const menus = result.data
            storageUtil.saveMenus(menus)
            dispatch(receiveMenus(menus))
        } else {
            const msg = result.msg
            dispatch(showMenuErrorMsg(msg))
        }
    }
}

export const resetUser = () => {
    storageUtil.removeUser()
    return ({type: RESET_USER})
}

export const resetMenus = () => {
    storageUtil.removeMenus()
    return ({type: RESET_MENUS})
}

