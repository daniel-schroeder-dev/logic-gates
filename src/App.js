import React from 'react';

import Line from './components/Line/Line';
import NandGate from './components/NandGate/NandGate';
import GateContainer from './components/GateContainer/GateContainer';

import './App.css';

function App() {
  return (
    <div className="app">
      <GateContainer>
        <Line />
        <NandGate />
      </GateContainer>
    </div>
  );
}

export default App;
