import React from 'react'
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Sidebar, Navbar } from './components';
import { Dashboard, Login, Register, TasksPage, CalendarPage, GoalsPage } from './pages';
// import Calendar from './components';

const App = () => {

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

      <div>
        <BrowserRouter>
          <div>
            {/* <Navbar /> */}
          </div>

          <div className ='w-15 fixed sidebar bg-white'>
            {/* <Sidebar /> */}
          </div>
          
          <div>
            <Routes>
              <Route path='/' element={<Dashboard />} />

              <Route path='/dashboard' element={<Dashboard />} />

              <Route path='/login' element={<Login />} />

              <Route path='/register' element={<Register />} />

              <Route path='/calendar' element={<CalendarPage />} />

              <Route path='/tasks' element={<TasksPage />} />

              <Route path='/goals' element={<GoalsPage />} />
              
            </Routes>
          </div>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
