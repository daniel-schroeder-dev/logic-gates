import React from 'react';
import PropTypes from 'prop-types';

import Line from '../Line/Line';
import LineContainer from '../LineContainer/LineContainer';
import NandGateElement from '../NandGateElement/NandGateElement';

import './NandGate.css';

function NandGate(props) {
  return (
    <div className="nand-gate">
      <LineContainer>
        <Line top={25} isOn={props.inputValues.A} />
        <Line top={75} isOn={props.inputValues.B} />
      </LineContainer>
      <NandGateElement />
      <LineContainer>
        <Line top={50} isOutput={true} isOn={false} />
      </LineContainer>
    </div>
  );
}

NandGate.propTypes = {
  inputValues: PropTypes.object.isRequired,
};

export default NandGate;