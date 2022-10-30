import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import CookieBot from 'react-cookiebot';
const domainGroupId = 'd9eb7ea3-2545-41f3-8efb-7e9a03076eb1';

function App() {
  const [hasCookieBot, setHasCookieBot] = useState(undefined);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Bikes need support to</p>
          <CookieBot domainGroupId={domainGroupId} />
      </header>
    </div>
  );
}

export default App;
