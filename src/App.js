import React from 'react';
import { List, Set } from 'immutable'

import './App.css';
import World from './game-of-life/World'


function App() {
  const aliveCells = Set([
    List([0,0]),
    List([1,2]),
    List([2,2])
  ])

  return (
    <div className="App">
      <World rows={3} columns={3} aliveCells={aliveCells}></World>
    </div>
  );
}

export default App;
