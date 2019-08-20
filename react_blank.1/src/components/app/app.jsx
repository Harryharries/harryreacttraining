import React, { Component } from 'react'

import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'


export default class App extends Component{

constructor(props){
    super(props)
    //给组件state
    this.state = {
        comments: [
            {username: 'Tom', content: 'react os gppd'},
            {username: 'jasck', content: 'react hard!'}
        ]
    }

}

    render(){

        const {comments} = this.state

        return(
            <div>
    <header className="site-header jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div className="container">
            <CommentAdd/>
            <CommentList comment = {comments}/>

      
      
    </div>
  </div>
        )
    }
}