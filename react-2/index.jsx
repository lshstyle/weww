import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import App from './components/app'
import {counter} from './redux/reducers'
import { render } from '@testing-library/react'

const store = createStore(counter)
function init() {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}

init()
store.subscribe(init)