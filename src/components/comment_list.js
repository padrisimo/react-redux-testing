import React, { Component } from 'react'
import { connect } from 'react-redux';

const CommentList = (props) => {
        const list = props.comments.map(comment => <li key={comment}>{comment}</li>)
        return (
            <ul className="comment-list m-t-2">{list}</ul>
        );
    
}

const mapStateToProps = (state) => ({
     comments: state.comments 
});

export default connect(mapStateToProps)(CommentList);