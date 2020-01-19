import { ADD_TODO, DELETE_TODO } from './action-types'

const initData = [
    {date:'2019-12-12', time: '12:10:10', content:'1233232'}
]
export function todos(state=initData, action) {
    console.log(state)
    switch(action.type) {
        case ADD_TODO : return [action.data, ...state] 
        case DELETE_TODO : return state.filter((index) => index !== action.data)
        default: return state
    }
}