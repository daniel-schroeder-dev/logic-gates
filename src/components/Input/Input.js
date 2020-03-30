import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

function Input(props) {

  const id = `input${props.label}`;

  return (
    <div className="input">
      <span>{props.label}:</span>
      <div className="input__wrapper">
        <input className="input__element" type="radio" id="on" name={props.label} checked={props.value} onChange={e => props.onChange(props.label, true)} value={true} />
        <label className="input__label" htmlFor={id}>On</label>
        <input className="input__element" type="radio" id="off" name={props.label} checked={!props.value}  onChange={e => props.onChange(props.label, false)} value={false} />
        <label className="input__label" htmlFor={id}>Off</label>
      </div>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
};

export default Input;