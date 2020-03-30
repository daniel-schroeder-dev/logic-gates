import React from 'react';

import Line from './components/Line/Line';
import LineContainer from './components/LineContainer/LineContainer';
import NandGate from './components/NandGate/NandGate';
import GateContainer from './components/GateContainer/GateContainer';

import './App.css';

function App() {
  return (
    <div className="app">
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
      <form>
        <div>
          <label for="inputA">A</label>
          <input type="number" id="inputA" name="inputA" min="0" max="1" />
        </div>
      </form>
    </div>
  );
}

export default App;
