import React, { useState } from 'react';

import NandGate from './components/NandGate/NandGate';
import NotGate from './components/NotGate/NotGate';
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
      <GateTrack>
        <NandGate inputValues={inputValues} />
        <NotGate inputValue={true} />
      </GateTrack>
      <form className="app__form">
        <Input label="A" onChange={handleInputChange} value={inputValues.A} />
        <Input label="B" onChange={handleInputChange} value={inputValues.B} />
      </form>
    </div>
  );
}

export default App;
