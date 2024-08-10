import React, { useState } from 'react';
import './App.css';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';

function App() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="App">
      <div className={`AppGlass ${!expanded ? 'hide-sidebar' : ''}`}>
        <Sidebar expanded={expanded} setExpanded={setExpanded} />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
