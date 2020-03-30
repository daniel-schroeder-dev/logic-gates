import React from 'react';

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
        {/*<NandGateElement />*/}
        <LineContainer>
          <Line top={50} isOutput={true} isOn={false} />
        </LineContainer>
      </div>
    </div>
  );
}

export default NotGate;