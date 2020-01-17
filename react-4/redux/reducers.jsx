import { ADD_COMMENT, DELETE_COMMENT } from "./action-types"

/**
 * 包含n个reducers函数（根据老的state和action返回一个新的state）
 */
const initData = [
    {userName:'Tom', content: 'aaa'}
]
export function comments(state=initData, action) {
    switch(action.type) {
        case ADD_COMMENT :  return [action.data, ...state]
        case DELETE_COMMENT: return state.filter((comment,index) => index!== action.data)
        default: return state
    }
}