import React from 'react';

import NotGateElement from '../NotGateElement/NotGateElement';
import Line from '../Line/Line';
import LineContainer from '../LineContainer/LineContainer';

import './NotGate.css';

function NotGate(props) {
  return (
    <div className="not-gate">
      <div className="nand-gate">
        <LineContainer>
          <Line top={50} isOn={false} />
        </LineContainer>
        <NotGateElement />
        <LineContainer>
          <Line top={49} isOutput={true} isOn={false} />
        </LineContainer>
      </div>
    </div>
  );
}

export default NotGate;