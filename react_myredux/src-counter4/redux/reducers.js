import {INCREMENT,DECREMENT} from "./action-types";

export default function counter(state = 0, action) {
    console.log('counter()',state, action)
    switch (action.type) {
        case 'INCREMENT':
            return state + action.data
        case 'DECREMENT':
            return state - action.data
        default:
            return state
    }
}


const counters = (state = 0, action) => {
    console.log('counter()', state, action)
    switch (action.type) {
        case 'INCREMENT':
            return state + action.data
        case 'DECREMENT':
            return state - action.data
        default:
            return state
    }
}

export {counters}