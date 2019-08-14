import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './components/app'
import store from './redux/store'


function render(){
    ReactDOM.render(<App store={store}/>, document.getElementById('root'))
}

render()

store.subscribe(render)