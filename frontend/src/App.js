import React from 'react'
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import { Dashboard, Login, Register, TasksPage, CalendarPage, GoalsPage, MenteePage, MentorPage, LinkedIn } from './pages';
=======
import { Dashboard, Login, Register, TasksPage, CalendarPage, GoalsPage, FeedbackPage, MenteePage, MentorPage } from './pages';
>>>>>>> 777a4e08f0bc18ca73376f17795a34641d8380d9
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
      <BrowserRouter>

        <div>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />

            <Route path='/login' element={<Login />} />

            <Route path='/register' element={<Register />} />

            <Route path='/calendar' element={<CalendarPage />} />

            <Route path='/tasks' element={<TasksPage />} />

            <Route path='/goals' element={<GoalsPage />} />

<<<<<<< HEAD
              <Route path='/mentorpage' element={<MentorPage />} />
              
              <Route path='/linkedin' element={<LinkedIn />} />
              
            </Routes>
          </div>
        </BrowserRouter>
      </div>
=======
            <Route path='/menteepage' element={<MenteePage />} />

            <Route path='/mentorpage' element={<MentorPage />} />

            <Route path='/feedback' element={<FeedbackPage />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
>>>>>>> 777a4e08f0bc18ca73376f17795a34641d8380d9
  );
}

export default App;
