/**
 * redux最核心的管理对象
 */
import {createStore} from 'redux'
import {comments} from './reducers'

export const store = createStore(comments)


