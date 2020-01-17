import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {increment,decrement} from '../redux/actions'

class App extends React.Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
        increment:  PropTypes.func.isRequired,
        decrement:  PropTypes.func.isRequired,
    }
    increment = () => {
        const num = this.select.value*1
        this.props.increment(num)
    }

    decrement = () => {
        const num = this.select.value*1
        this.props.decrement(num)
    }

    addIfOdd = () => {
        const num = this.select.value*1
        if (num%2 ===1) {
            this.props.increment(num)
        }
    }

    addSync = () => {
        const num = this.select.value*1
        setTimeout(()=>{
            this.props.increment(num)
        },1000)
        
    }

    render() {
        
        const {count}  = this.props
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

export default connect(
    state => ({count: state}),
    {increment, decrement}
)(App)