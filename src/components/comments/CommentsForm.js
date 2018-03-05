import React from 'react';

function CommentsForm({ newComment, handleChange, handleSubmit }) {

  return(
    <div>
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
