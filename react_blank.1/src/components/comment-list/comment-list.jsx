import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './comment-list.css'
import CommentItem from '../comment-item/comment-item'

export default class CommentList extends Component{

    static propTypes = {
        comments: PropTypes.array.isRequired
    }

    render(){

        const {comments} = this.props

        return(
<div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display: 'none'}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
            {
                comments.map((c,index) => <CommentItem comment={c} key={index}/>)
            }
        </ul>
      </div>
        )
    }
}

// CommentList.propType = {
//     comments: PropTypes.array.isRequired
// }