import React from 'react'
import {add, sub} from './redux/actions'
import {connect} from './lib/redux/react-redux'
class App extends React.Component {

    constructor(props) {
        super(props)
        this.selectRef = React.createRef()
    }
    add = ()=> {
        const count = this.selectRef.current.value*1
        this.props.add(count)
    }
    sub = () => {
        const count = this.selectRef.current.value*1
        this.props.sub(count)
    }
    addOdd = () => {
        const count = this.selectRef.current.value*1
        this.props.add(count)
    }
    addAsync = () => {
        const count = this.selectRef.current.value*1
        this.props.add(count)
    }

    render() {
        const count = this.props.count

        return (
            <div>
                <p>click {count} times</p>
                <select ref={this.selectRef}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                <button onClick={this.add}>+</button>
                <button onClick={this.sub}>-</button>
                <button onClick={this.addOdd}>add if odd</button>
                <button onClick={this.addAsync}>add sync</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({count: state.count})
// const mapDispatchToProps = (dispatch) => ({
//     add: (count) =>dispatch(add(count)),
//     sub: (count) => dispatch(sub(count))
// })

const mapDispatchToProps = {add,sub}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)