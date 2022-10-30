import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import { Button, View, Text } from 'react';
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
        <View style={{ flex: 1, alignItems: 'center' }}>
      <CookieBot domainGroupId={domainGroupId} />
          <Text>Click to test Cookiebot</Text>
          <Button title="TEST" onPress={() => setHasCookieBot(!!document.querySelector('#CookieBot'))} />
          <Text style={{ color: 'red', marginVertical: 10 }}>
            {hasCookieBot && `Has CookieBot: ${JSON.stringify(hasCookieBot)}`}
          </Text>
        </View>    <View style={{ flex: 1, alignItems: 'center' }}>
          <CookieBot domainGroupId={domainGroupId} />
          <Text>Click to test Cookiebot</Text>
          <Button title="TEST" onPress={() => setHasCookieBot(!!document.querySelector('#CookieBot'))} />
          <Text style={{ color: 'red', marginVertical: 10 }}>
            {hasCookieBot && `Has CookieBot: ${JSON.stringify(hasCookieBot)}`}
          </Text>
    </View>
      </header>
    </div>
  );
}

export default App;
