
import {
    INCREAMENT,
    DECREAMENT
} from './action-types'
import {combineReducers} from '../lib/redux'

const initNum=0
function count(state=initNum, action) {
    switch(action.type) {
        case INCREAMENT: return state + action.count
        case DECREAMENT: return state - action.count
        default: return state
    }
}

export default combineReducers({count})