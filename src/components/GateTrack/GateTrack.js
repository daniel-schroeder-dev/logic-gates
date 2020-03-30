import React, { useState, } from 'react';
import PropTypes from 'prop-types';

import NandGate from '../NandGate/NandGate';
import NotGate from '../NotGate/NotGate';

import './GateTrack.css';

function GateTrack(props) {

  const [nandOutput, setNandOutput] = useState(false);

  const getOuput = output => {
    setNandOutput(output);
  };

  return (
    <div className="gate-track">
      <NandGate inputValues={props.inputValues} returnOutput={getOuput} />
      <NotGate inputValue={nandOutput} />
    </div>
  );
}

GateTrack.propTypes = {
  inputValues: PropTypes.object.isRequired,
};

export default GateTrack;