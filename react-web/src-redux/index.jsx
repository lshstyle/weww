import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import { Provider } from './lib/redux/react-redux'
import {store} from './redux/store'

ReactDOM.render((
       <Provider store={store}>
            <App store={store}/>
      </Provider>
      ), 
      document.getElementById('root')
)
