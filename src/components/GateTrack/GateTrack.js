import React from 'react';
import './GateTrack.css';

function GateTrack(props) {
  return (
    <div className="gate-track">{props.children}</div>
  );
}

export default GateTrack;