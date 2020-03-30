import React, { useState } from 'react';

import Line from './components/Line/Line';
import LineContainer from './components/LineContainer/LineContainer';
import NandGate from './components/NandGate/NandGate';
import GateContainer from './components/GateContainer/GateContainer';
import GateTrack from './components/GateTrack/GateTrack';
import Input from './components/Input/Input';

import './App.css';

function App() {

  const [inputValues, setInputValues] = useState({ A: true, B: true });

  const handleInputChange = (inputLabel, value) => {
    setInputValues(prevInputValues => ({ ...prevInputValues, [inputLabel]: !!value }));
  };

  return (
    <div className="app">
      <GateTrack>
        <GateContainer>
          <LineContainer>
            <Line top={25} />
            <Line top={75} />
          </LineContainer>
          <NandGate />
          <LineContainer>
            <Line top={50} isOutput={true} />
          </LineContainer>
        </GateContainer>
      </GateTrack>
      <form className="app__form">
        <Input label="A" onChange={handleInputChange} value={inputValues.A} />
        <Input label="B" onChange={handleInputChange} value={inputValues.B} />
      </form>
    </div>
  );
}

export default App;
