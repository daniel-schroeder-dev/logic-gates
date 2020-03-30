import React from 'react';
import './GateContainer.css';

function GateContainer(props) {
  return (
    <div className="gate-container">{props.children}</div>
  );
}

export default GateContainer;