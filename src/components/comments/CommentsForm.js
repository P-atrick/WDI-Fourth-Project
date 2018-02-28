import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function CommentsForm({ handleChange, handleSubmit }) {
  return(
    <div>
      <h3>Comments</h3>
      <textarea className="textarea" rows="3" placeholder="Comment"></textarea>
      <button className="button" onClick={handleSubmit} >Add comment</button>
    </div>
  );
}

export default CommentsForm;
