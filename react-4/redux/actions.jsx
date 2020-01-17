import { ADD_COMMENT, DELETE_COMMENT } from "./action-types"

/**
 * 所有的action工厂函数
 */
export const addComment = (comment) => ({type: ADD_COMMENT, data:comment})
export const deleteComment = (index) => ({type: DELETE_COMMENT, data:index})

export const getCommentSync = () =>{
    return dispatch => {
        setTimeout(()=>{

        },1000)
    }
}