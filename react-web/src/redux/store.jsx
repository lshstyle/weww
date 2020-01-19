import {createStore} from 'redux'

import {todos} from './reducers'

export const store = createStore(todos)