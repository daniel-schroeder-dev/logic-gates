import React from 'react';
import PropTypes from 'prop-types';

import './Line.css';

function Line(props) {

  const setY = () => {
    return {
      top: props.top + 'px',
      left: props.isOutput ? '10px' : '0',
      width: props.isOutput ? '88px' : '100px',
    };
  };

  return (
    <div className="line" style={setY()}></div>
  );
}

Line.propTypes = {
  top: PropTypes.number.isRequired,
  left: PropTypes.bool, 
};

export default Line;