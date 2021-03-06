import React from 'react';

const BackButton = ({ history }) => {
  return (
    <div>
      <button onClick={history.goBack} className="button is-black is-outlined">Back</button>
    </div>
  );
};

export default BackButton;
