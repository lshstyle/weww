import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'
import { Provider } from 'react-redux'
import {store} from './redux/store'


import storageUtils from './utils/storageUtils'
import memoryUtils from './utils/memoryUtils'
import { BrowserRouter } from 'react-router-dom'

const user = storageUtils.getUser()
console.log(user)
memoryUtils.user = user

ReactDOM.render(
      <Provider store={store}>
      <BrowserRouter>
            <App />
      </BrowserRouter>
      </Provider>, document.getElementById('root'))