import React from 'react'
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Sidebar, Navbar } from './components';
import { Dashboard, Login } from './pages';
// import Calendar from './components';

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
    
    <div>
      {/* <header className="App-header">
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
      </header> */}

      <div>
        <BrowserRouter>
          <div></div>
          <Navbar />


          <div className ='w-15 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            <Sidebar />
          </div>
          
          <div>
            
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/dashboard' element={<Dashboard />} />

              <Route path='/login' element={<Login />} />
              
            </Routes>
          </div>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
