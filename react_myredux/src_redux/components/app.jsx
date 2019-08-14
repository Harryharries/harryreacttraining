import React,{Component} from 'react'
import {INCREMENT,DECREMENT} from '../redux/action-types'
import * as actions from '../redux/actions'


export default class App extends Component {

    // state = {
    //     count: 1
    // }

    increment =() => {
        //1. 得到选择的增加数量
        const number = this.select.value*1
        // //2. 得到原本的count state， 计算新
        // const count = this.state.count
        // //3.返回
        // this.setState({count: count+number})

        //2.d调动store犯法更新状态
        //this.props.store.dispatch({type: INCREMENT, data: number })
        this.props.store.dispatch(actions.increment(number))
    }

    decrement =() => {
        //1. 得到选择的增加数量
        const number = this.select.value*1
        //2. 得到原本的count state， 计算新
        // const count = this.state.count
        // //3.返回
        // this.setState({count: count-number})
        // this.props.store.dispatch({type: DECREMENT, data: number })
        this.props.store.dispatch(actions.decrement(number))
    }

    incrementIfOdd =() => {
        //1. 得到选择的增加数量
        const number = this.select.value*1
        //2. 得到原本的count state， 计算新
        const count = this.props.store.getState()
        if (count%2 == 1){
            this.props.store.dispatch(actions.increment(number))
        }

    }

    incrementAsync =() => {
        //1. 得到选择的增加数量
        const number = this.select.value*1
        //2. 得到原本的count state， 计算新

        setTimeout(() => {
            this.props.store.dispatch(actions.increment(number))
        },1000)
    }


    render() {
        const count = this.props.store.getState()
        //debugger
        return(
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref = {select => this.select =select }>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.incrementIfOdd}>increment if odd</button>
                    <button onClick={this.incrementAsync}>increment async</button>
                </div>
            </div>
        )
    }
}