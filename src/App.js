import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Greet /> */}
      {/* <EventBind /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
