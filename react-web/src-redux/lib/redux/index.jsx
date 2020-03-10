//根据指定的reducer函数 创建store对象
export function createStore(reducer) {

    //用来存储内部状态数据的变量
    let state = reducer(undefined, {type:'@@redux/init'}) 
    // 用来存储监听state更新回调函数的容器
    const listeners = []
    //返回当前内部的state数据
    function getState() {
        return  state
    }

    /**
     * 
     * 分发action  
     * 1).触发reducer调用，
     * 2).产生新的state
     * 3).调用回调函数
     */
    function dispatch(action) {
        // 1).触发reducer调用，产生新的state
        const newState = reducer(state, action)
        // 2).保存新的state
        state = newState
        // 3).调用回调函数
        listeners.forEach(listener => listener() )
    }

    //绑定内部state改变的回调函数
    function subscribe (listener) {
        listeners.push(listener)
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

//整合传入参数对象中的多个reducer函数，返回一个新的reducer函数
export function combineReducers(reducers) {

    return (state ={}, action)=> {
        const newState = Object.keys(reducers).reduce((preState, key)=>{
            preState[key] = reducers[key](state[key],action)
            return preState
        }, {})
        return newState
    }
}