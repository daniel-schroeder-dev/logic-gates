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
          <Line />
        </LineContainer>
        <NandGate />
      </GateContainer>
    </div>
  );
}

export default App;
