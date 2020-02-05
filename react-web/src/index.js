import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'
import { Provider } from 'react-redux'
import {store} from './redux/store'

import storageUtils from './utils/storageUtil'
import memoryUtils from './utils/memoryUtil'

const user = storageUtils.getUser()
memoryUtils.user = user

ReactDOM.render(
      <Provider store={store}>
            <App />
      </Provider>, document.getElementById('root')
)