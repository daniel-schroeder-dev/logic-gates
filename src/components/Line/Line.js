import React from 'react';
import PropTypes from 'prop-types';

import './Line.css';

function Line(props) {

  const setY = () => {
    return {
      top: props.y + 'px',
    };
  };

  return (
    <div className="line" style={setY()}></div>
  );
}

Line.propTypes = {
  y: PropTypes.number.isRequired,
};

export default Line;