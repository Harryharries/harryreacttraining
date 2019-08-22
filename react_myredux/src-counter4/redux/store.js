import {createStore} from 'redux'
import counter from './reducers'
//import counters from './reducers'

const store = createStore(counter)

export default store