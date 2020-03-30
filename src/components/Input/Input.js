import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

function Input(props) {

  const id = `input${props.label}`;

  return (
    <div className="input">
      <label htmlFor={id}>{props.label}</label>
      <input type="number" id={id} name={id} min="0" max="1" />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Input;