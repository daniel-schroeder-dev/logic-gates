import React from 'react';
import PropTypes from 'prop-types';

import './Line.css';

function Line(props) {

  const style = {
    top: props.top + 'px',
    left: props.isOutput ? '12px' : '0',
    width: props.isOutput ? '88px' : '100px',
    borderColor: props.isOn ? '#ffe600' : 'black',
  };

  return (
    <div className="line" style={style}></div>
  );
}

Line.propTypes = {
  top: PropTypes.number.isRequired,
  left: PropTypes.bool, 
  isOn: PropTypes.bool.isRequired,
};

export default Line;