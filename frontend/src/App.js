import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import Calendar from './components/calendar';

function App() {

  const [test, setTest] = useState('')

  useEffect(() => {
    console.log('inside use effect')
    callAPI();
  })

  function callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => setTest(res))
        .catch(err => err)
};



  return (
    
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">{test}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Calendar/>
      </header>
      
    </div>
  );
}

export default App;
