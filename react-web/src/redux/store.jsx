/*
    redux 最核心的管理对象store
*/
import {createStore, applyMiddleware} from 'redux'
import  thunk from 'redux-thunk'
import reducer from './reducer'
import {composeWithDevTools} from 'redux-devtools-extension'

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))