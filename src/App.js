import React, { useState } from 'react';

import GateTrack from './components/GateTrack/GateTrack';
import Input from './components/Input/Input';

import './App.css';

function App() {

  const [inputValues, setInputValues] = useState({ A: false, B: false });

  const handleInputChange = (inputLabel, value) => {
    setInputValues(prevInputValues => ({ ...prevInputValues, [inputLabel]: value }));
  };

  return (
    <div className="app">
      <GateTrack inputValues={inputValues} />
      <form className="app__form">
        <Input label="A" onChange={handleInputChange} value={inputValues.A} />
        <Input label="B" onChange={handleInputChange} value={inputValues.B} />
      </form>
    </div>
  );
}

export default App;
