import React from 'react';
import PropTypes from 'prop-types';

import NotGateElement from '../NotGateElement/NotGateElement';
import Line from '../Line/Line';
import LineContainer from '../LineContainer/LineContainer';

import './NotGate.css';

function NotGate(props) {

  

  return (
    <div className="not-gate">
      <div className="not-gate">
        <LineContainer>
          <Line top={50} isOn={props.inputValue} />
        </LineContainer>
        <NotGateElement />
        <LineContainer>
          <Line top={49} isOutput={true} isOn={false} />
        </LineContainer>
      </div>
    </div>
  );
}

NotGate.propTypes = {
  inputValue: PropTypes.bool.isRequired,
};

export default NotGate;