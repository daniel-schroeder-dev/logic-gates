import React from 'react';
import './NandGate.css';

function NandGate(props) {
  return (
    <div className="nand-gate">{props.children}</div>
  );
}

export default NandGate;