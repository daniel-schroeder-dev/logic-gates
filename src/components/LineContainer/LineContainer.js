import React from 'react';
import './LineContainer.css';

function LineContainer(props) {
  return (
    <div className="line-container">{props.children}</div>
  );
}

export default LineContainer;