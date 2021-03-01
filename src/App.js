import React, { useState } from 'react';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import LoginContext from './components/LoginContext';

function App() {
  return (
    <LoginContext.Provider value={useState('AbduRahman')}>
      <Navbar />
      <Landing />
    </LoginContext.Provider>
  );
}

export default App;
