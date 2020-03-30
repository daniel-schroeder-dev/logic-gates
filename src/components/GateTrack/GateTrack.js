import React, { useState, } from 'react';
import PropTypes from 'prop-types';

import NandGate from '../NandGate/NandGate';
import NotGate from '../NotGate/NotGate';

import './GateTrack.css';

function GateTrack(props) {

  const [nandOutput, setNandOutput] = useState(false);

  const getNandOuput = nandOutput => {
    setNandOutput(nandOutput);
  };

  return (
    <div className="gate-track">
      <NandGate inputValues={props.inputValues} returnOutput={getNandOuput} />
      <NotGate inputValue={nandOutput} />
    </div>
  );
}

GateTrack.propTypes = {
  inputValues: PropTypes.object.isRequired,
};

export default GateTrack;