import React from 'react';

import Auth from '../../lib/Auth';

function CommentsForm({ newComment, handleChange, handleSubmit }) {
  newComment.createdBy = Auth.getPayload().userId;
  return(
    <div>
      <h3>Comments</h3>
      <textarea
        value={newComment.content}
        className="textarea"
        rows="1"
        placeholder="Comment"
        onChange={handleChange}
      >
      </textarea>
      <button className="button" onClick={handleSubmit} >Add comment</button>
    </div>
  );
}

export default CommentsForm;
