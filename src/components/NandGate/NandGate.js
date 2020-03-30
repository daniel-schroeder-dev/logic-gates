import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Line from '../Line/Line';
import LineContainer from '../LineContainer/LineContainer';
import NandGateElement from '../NandGateElement/NandGateElement';

import './NandGate.css';

function NandGate(props) {

  const [output, setOutput] = useState(false);

  useEffect(() => {
    setOutput(!(props.inputValues.A && props.inputValues.B));
  }, [props.inputValues.A, props.inputValues.B]);

  useEffect(() => {
    props.returnOutput(output);
  }, [props, output]);

  return (
    <div className="nand-gate">
      <LineContainer>
        <Line top={25} isOn={props.inputValues.A} />
        <Line top={75} isOn={props.inputValues.B} />
      </LineContainer>
      <NandGateElement />
      <LineContainer>
        <Line top={50} isOutput={true} isOn={output} />
      </LineContainer>
    </div>
  );
}

NandGate.propTypes = {
  inputValues: PropTypes.object.isRequired,
  returnOutput: PropTypes.func.isRequired,
};

export default NandGate;