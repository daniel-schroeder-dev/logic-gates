import React from 'react';
import PropTypes from 'prop-types';

import NandGate from '../NandGate/NandGate';
import NotGate from '../NotGate/NotGate';

import './GateTrack.css';

function GateTrack(props) {
  return (
    <div className="gate-track">
      <NandGate inputValues={props.inputValues} />
      <NotGate inputValue={false} />
    </div>
  );
}

GateTrack.propTypes = {
  inputValues: PropTypes.object.isRequired,
};

export default GateTrack;