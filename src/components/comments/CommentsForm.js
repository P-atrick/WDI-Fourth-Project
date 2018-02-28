import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class CommentsForm extends Component {

  state = {
    comments: []
  }

  addComment = () => {
    console.log('clicked');
  };

  render() {
    return(
      <div>
        <h3>Comments</h3>
        <textarea className="textarea" rows="3" placeholder="Comment"></textarea>
        <button className="button" onClick={this.addComment} >Add comment</button>
      </div>
    );
  }
}

export default CommentsForm;
