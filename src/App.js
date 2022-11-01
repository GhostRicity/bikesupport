import gear from './gear.svg';
import './App.css';
// import React, { useState } from 'react';
import CookieBot from 'react-cookiebot';

const domainGroupId = 'd9eb7ea3-2545-41f3-8efb-7e9a03076eb1';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CookieBot domainGroupId={domainGroupId} />
        <img src={gear} className="App-logo" alt="gearSpinnig" />
        <h1 className='bsmain bs' >
          BIKE <spna className="bs2">SUPPORT</spna> 
        </h1>
        <p>Bikes need support to</p>
      </header>
    </div>
  );
}

export default App;
