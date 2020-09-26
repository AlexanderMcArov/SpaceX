import React from 'react';
import Navbar from './components/Navbar/Navbar'
import spaceImg from './images/SpaceX-Logo.png'
import Launches from './components/Launches/Launches'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Launches />
      <h1>SpaceX</h1>
    </div>
  );
}

export default App;
