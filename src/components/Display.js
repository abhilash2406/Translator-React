import React from 'react';
import '../style/style.css';

const Display = (props) => {
  return (
    <div className="display">
      <p>{props.outputtext}</p>
    </div>
  );
};

export default Display;
