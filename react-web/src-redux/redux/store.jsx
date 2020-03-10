import {createStore} from '../lib/redux'
import reducer from './reducer'

export const store = createStore(reducer)