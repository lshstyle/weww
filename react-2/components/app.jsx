import React from 'react'

import {INCREMENT, DECREMENT} from '../redux/action-types'

export default class App extends React.Component {

    increment = () => {
        const num = this.select.value*1
        this.props.store.dispatch({type:INCREMENT, data:num})
    }

    decrement = () => {
        const num = this.select.value*1
        this.props.store.dispatch({type:DECREMENT, data:num})
    }

    addIfOdd = () => {
        const num = this.select.value*1
        if (num%2 ===1) {
            this.props.store.dispatch({type:INCREMENT, data:num})
        }
    }

    addSync = () => {
        const num = this.select.value*1
        setTimeout(()=>{
            this.props.store.dispatch({type:INCREMENT, data:num})
        },1000)
        
    }

    render() {
        
        const count  = this.props.store.getState()
        return (
            <div>
                <p>click total num {count}</p>
                <select ref={select => this.select = select}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                </select>&nbsp;
                <button onClick={this.increment} >+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.addIfOdd}>addIfOdd</button>&nbsp;
                <button onClick={this.addSync}>addSync</button>
            </div>
        )
    }
}