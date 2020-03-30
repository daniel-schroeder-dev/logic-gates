import React, { useState } from 'react';

import Line from './components/Line/Line';
import LineContainer from './components/LineContainer/LineContainer';
import NandGateElement from './components/NandGateElement/NandGateElement';
import GateContainer from './components/GateContainer/GateContainer';
import GateTrack from './components/GateTrack/GateTrack';
import Input from './components/Input/Input';

import './App.css';

function App() {

  const [inputValues, setInputValues] = useState({ A: false, B: false });

  const handleInputChange = (inputLabel, value) => {
    setInputValues(prevInputValues => ({ ...prevInputValues, [inputLabel]: !!value }));
  };

  return (
    <div className="app">
      <GateTrack>
        <GateContainer>
          <LineContainer>
            <Line top={25} isOn={inputValues.A} />
            <Line top={75} isOn={inputValues.B} />
          </LineContainer>
          <NandGateElement />
          <LineContainer>
            <Line top={50} isOutput={true} isOn={false} />
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
