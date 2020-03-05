import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [coords, setCoords] = useState({});

  const getCurrentLocation = () => {
    window.navigator.geolocation.watchPosition((pos) => {
      const { latitude, longitude, timestamp} = pos.coords;
      console.log(latitude);
      setCoords({ latitude, longitude, timestamp});
    });
  }  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={getCurrentLocation}>Get location</button>
        <p>{coords.latitude}</p>
        <p>{coords.longitude}</p>
      </header>
    </div>
  );
}

export default App;
